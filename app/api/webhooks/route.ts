import prisma from "@/lib/db";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET!;

export async function POST(req: Request) {
  const payload = await req.text();
  const headerPayload = headers();

  const svix_id = (await headerPayload).get("svix-id") as string;
  const svix_timestamp = (await headerPayload).get("svix-timestamp") as string;
  const svix_signature = (await headerPayload).get("svix-signature") as string;

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new NextResponse("Invalid Signature", { status: 400 });
  }

  const { type, data } = evt;

  if (type === "user.created") {
    const email = data.email_addresses[0]?.email_address.toString() || "";

    try {
      await prisma.user.create({
        data: {
          imageUrl: data.image_url || "",
          clerkId: data.id,
          email: email || "",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
        },
      });

      console.log("User created in database:", data.id, email);

      return new NextResponse("User created", { status: 200 });
    } catch (e) {
      console.error("❌ DB Error:", e);
      return new NextResponse("DATABASE ERROR", { status: 500 });
    }
  }

  return new NextResponse("OK", { status: 200 });
}

import { CohereClientV2 } from "cohere-ai";
import { NextRequest, NextResponse } from "next/server";

const cohere = new CohereClientV2({
  token: process.env.COHERE_AI_API_KEY! || "",
});

if (!process.env.COHERE_AI_API_KEY) {
  throw new Error("COHERE_AI_API_KEY is not set in environment variables!");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { goal, level } = await body;

  if (!goal || !level) {
    console.log("goal and level are required", body);
    return new NextResponse("Goal and Level are required", { status: 400 });
  }

  // const res = (async () => {
  //   const response = await cohere.chat({
  //     model: "command-a-03-2025",
  //     messages: [
  //       {
  //         role: "user",
  //         content: "hello world!",
  //       },
  //     ],
  //   });

  //   console.log("Cohere response: ", response.message.content);
  //   return response.message.content;
  // })();

  // return new NextResponse(
  //   JSON.stringify({
  //     success: true,
  //     roadmap: res,
  //   })
  // );

  const prompt = `Generate a detailed roadmap for a ${goal} at the ${level} level. The roadmap should include the following phases:
1. **Foundational Knowledge**: Key concepts and skills to master.
2. **Intermediate Skills**: More advanced topics and tools to learn.
3. **Advanced Topics**: Specialized skills and technologies.
4. **Project Ideas**: Suggested projects to apply skills.
5. **Resources**: Recommended books, courses, and online materials.
6. **Networking**: Tips for connecting with professionals in the field.
Each phase should be detailed and actionable with proper Title, Description, key with a focus on practical skills and real-world applications.`;

  try {
    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: prompt,  
        },
      ],
      maxTokens: 800,
      temperature: 0.7,
    });

 

    const roadmap = response.message.content;
    
    console.log("Got the Response From Cohere ");
    return NextResponse.json({ roadmap, success: true }, { status: 200 });
  } catch (error) {
    console.log("Error generating roadmap:", error);

    return NextResponse.json({
      success: false,
      error: "Failed to generate roadmap",
    });
  }
}

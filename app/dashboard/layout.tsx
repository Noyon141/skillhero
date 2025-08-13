import ScrollToTop from "@/components/ScrollToTop";
import { SignOutRedirect } from "@/components/SignOutRedirect";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { sidebarNavigation } from "@/data/Sidebar-Navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignOutRedirect />
      <SidebarProvider>
        <Sidebar className="">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <Link href="/dashboard" className="flex items-center gap-2">
                <span className="text-lg font-bold">Skill Hero</span>
              </Link>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {sidebarNavigation.map((section) => (
              <SidebarGroup key={section.title}>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <SidebarMenuItem key={item.href}>
                          <SidebarMenuButton asChild tooltip={item.title}>
                            <Link href={item.href}>
                              <Icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center justify-between px-2">
              <ThemeToggle />
              <UserButton />
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:group-data-[state=collapsed]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-px bg-border" />
              <span className="text-lg font-semibold">Dashboard</span>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
            <ScrollToTop />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

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

const DashboardPage = () => {
  return (
    <>
      <SignOutRedirect />
      <SidebarProvider>
        <Sidebar>
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
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">
                  Welcome to Your Career Dashboard
                </h1>
              </div>
              <p className="text-muted-foreground">
                Track your progress, manage your learning path, and achieve your
                career goals.
              </p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Career Roadmap Card */}
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">
                  Your Career Roadmap
                </h3>
                <p className="text-muted-foreground mb-4">
                  View and manage your personalized AI-generated career path.
                </p>
                <button className="text-primary hover:underline">
                  View Roadmap →
                </button>
              </div>

              {/* Learning Progress Card */}
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">
                  Learning Progress
                </h3>
                <p className="text-muted-foreground mb-4">
                  Track your progress through learning modules and courses.
                </p>
                <button className="text-primary hover:underline">
                  View Progress →
                </button>
              </div>

              {/* Resources Card */}
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">
                  Curated Resources
                </h3>
                <p className="text-muted-foreground mb-4">
                  Access personalized learning resources and materials.
                </p>
                <button className="text-primary hover:underline">
                  Browse Resources →
                </button>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardPage;

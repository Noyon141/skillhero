import { SignOutRedirect } from "@/components/SignOutRedirect";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
      <SignOutRedirect />
      <div className="min-h-screen bg-background">
        {/* Dashboard Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link href={"/dashboard"}>
                  <span className="text-xl font-bold">
                    Skill Hero Dashboard
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <UserButton />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">
              Welcome to Your Career Dashboard
            </h1>

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
        </main>
      </div>
    </>
  );
};

export default DashboardPage;

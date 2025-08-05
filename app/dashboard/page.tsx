import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
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
          <h3 className="text-lg font-semibold mb-4">Your Career Roadmap</h3>
          <p className="text-muted-foreground mb-4">
            View and manage your personalized AI-generated career path.
          </p>
          <Link
            href="/dashboard/roadmap"
            className="text-primary hover:underline"
          >
            View Roadmap →
          </Link>
        </div>

        {/* Learning Progress Card */}
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
          <p className="text-muted-foreground mb-4">
            Track your progress through learning modules and courses.
          </p>
          <Link
            href="/dashboard/learning"
            className="text-primary hover:underline"
          >
            View Progress →
          </Link>
        </div>

        {/* Resources Card */}
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-lg font-semibold mb-4">Curated Resources</h3>
          <p className="text-muted-foreground mb-4">
            Access personalized learning resources and materials.
          </p>
          <Link
            href="/dashboard/courses"
            className="text-primary hover:underline"
          >
            Browse Resources →
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

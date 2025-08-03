import {
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  Home,
  Settings,
  Target,
  User,
  Users,
} from "lucide-react";

export interface SidebarNavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface SidebarNavSection {
  title: string;
  items: SidebarNavItem[];
}

export const sidebarNavigation: SidebarNavSection[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home,
      },
      {
        title: "Career Roadmap",
        href: "/dashboard/roadmap",
        icon: Target,
      },
      {
        title: "Learning Path",
        href: "/dashboard/learning",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Progress",
    items: [
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
      {
        title: "Achievements",
        href: "/dashboard/achievements",
        icon: Award,
      },
      {
        title: "Calendar",
        href: "/dashboard/calendar",
        icon: Calendar,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Courses",
        href: "/dashboard/courses",
        icon: FileText,
      },
      {
        title: "Community",
        href: "/dashboard/community",
        icon: Users,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User,
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

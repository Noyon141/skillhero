import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <main className="h-screen">{children}</main>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;

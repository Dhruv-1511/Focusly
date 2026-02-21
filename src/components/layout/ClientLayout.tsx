"use client";

import { usePathname } from "next/navigation";
import { DashboardLayout } from "./DashboardLayout";
import { LandingNavbar } from "./LandingNavbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  if (!isLandingPage) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return (
    <div className="flex min-h-screen w-full bg-background relative overflow-x-hidden">
      <div className="noise" />
      <LandingNavbar />
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Landing background glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}


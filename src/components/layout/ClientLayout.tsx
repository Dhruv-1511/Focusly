 "use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background relative overflow-x-hidden premium-bg">
      <div className="noise" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[280px] transition-all duration-500 relative">
        <Navbar onToggleSidebar={() => setIsSidebarOpen(true)} />
        <main className="flex-1 w-full px-4 sm:px-8 lg:px-10 pb-20 pt-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Background Decorative Blobs */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow" />
    </div>
  );
}

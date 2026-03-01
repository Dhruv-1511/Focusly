"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  LayoutDashboard,
  Search, 
  Calendar, 
  Timer, 
  BookOpen, 
  Users, 
  HeartPulse, 
  Trophy 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Overview", icon: Home, href: "/" },
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Research", icon: Search, href: "/problems" },
  { name: "Planner", icon: Calendar, href: "/planner" },
  { name: "Deep Work", icon: Timer, href: "/focus" },
  { name: "Library", icon: BookOpen, href: "/tools" },
  { name: "Community", icon: Users, href: "/community" },
  { name: "Wellness", icon: HeartPulse, href: "/mental-health" },
  { name: "Achievements", icon: Trophy, href: "/rewards" },
];

export function SidebarMenu({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname() || "";

  return (
    <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
      <div className="px-5 mb-4 mt-2">
         <div className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest">Platform</div>
      </div>
      {menuItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-6 px-6 py-4 transition-all group relative border-4 mb-2 overflow-hidden",
              isActive 
                ? "text-black bg-primary border-black skew-x-[-12deg] shadow-[8px_8px_0_0_#fff]" 
                : "text-primary bg-black border-primary/20 hover:border-primary hover:translate-x-4"
            )}
          >
            <div className={cn(
              "relative z-10 p-2 transition-all",
              isActive ? "bg-black text-primary rotate-[12deg]" : "bg-primary/5 text-primary"
            )}>
              <item.icon className="h-6 w-6" />
            </div>
            <span className={cn(
              "relative z-10 text-xl font-black italic uppercase tracking-tighter",
              isActive ? "text-black" : "text-primary"
            )}>{item.name}</span>
            {isActive && (
              <motion.div 
                layoutId="sidebar-active-indicator"
                className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

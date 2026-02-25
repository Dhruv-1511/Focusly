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
         <div className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]">Platform Core</div>
      </div>
      {menuItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-3.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all group relative",
              isActive 
                ? "text-white bg-white/3 border border-white/5 shadow-xl" 
                : "text-muted-foreground hover:bg-white/3 hover:text-white border border-transparent"
            )}
          >
            <div className={cn(
              "relative z-10 p-1.5 rounded-lg transition-all",
              isActive ? "bg-primary/20 text-primary" : "text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
            )}>
              <item.icon className="h-4 w-4" />
            </div>
            <span className="relative z-10">{item.name}</span>
            {isActive && (
              <motion.div 
                layoutId="sidebar-active-indicator"
                className="absolute left-0 w-1.5 h-6 bg-primary rounded-full blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

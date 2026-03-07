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
    <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto custom-scrollbar">
      <div className="px-4 mb-6 mt-2">
         <div className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-[0.2em]">Navigation</div>
      </div>
      {menuItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-4 px-4 py-3.5 transition-all duration-300 group relative rounded-2xl overflow-hidden",
              isActive 
                ? "text-white bg-white/[0.05] shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]" 
                : "text-muted-foreground hover:text-white hover:bg-white/[0.02]"
            )}
          >
            {/* Active Glow */}
            {isActive && (
              <motion.div 
                layoutId="sidebar-active-pill"
                className="absolute left-0 w-1.5 h-6 bg-primary rounded-r-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <div className={cn(
              "relative z-10 p-2 rounded-xl transition-all duration-300",
              isActive ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" : "bg-white/[0.03] text-muted-foreground group-hover:bg-white/5"
            )}>
              <item.icon className="h-5 w-5" />
            </div>
            
            <span className={cn(
              "relative z-10 text-sm font-semibold tracking-tight transition-colors duration-300",
              isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
            )}>
              {item.name}
            </span>

            {/* Subtle row indicator */}
            {!isActive && (
              <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                 <div className="h-1 w-1 rounded-full bg-primary/40" />
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

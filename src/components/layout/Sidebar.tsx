"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Search, 
  Calendar, 
  Timer, 
  BookOpen, 
  Users, 
  HeartPulse, 
  Trophy, 
  Settings,
  LayoutDashboard,
  Zap,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const menuItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Problems", icon: Search, href: "/problems" },
  { name: "Planner", icon: Calendar, href: "/planner" },
  { name: "Focus Mode", icon: Timer, href: "/focus" },
  { name: "Learning Tools", icon: BookOpen, href: "/tools" },
  { name: "Community", icon: Users, href: "/community" },
  { name: "Mental Health", icon: HeartPulse, href: "/mental-health" },
  { name: "Rewards", icon: Trophy, href: "/rewards" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 border-r bg-card flex flex-col z-50 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" onClick={onClose}>
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">
              <Zap className="h-5 w-5 text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter">
              STUDY<span className="text-primary">HUB</span>
            </span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      
      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto pt-4 custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "text-primary bg-primary/5 shadow-sm" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={cn(
                "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto space-y-4">
        <div className="p-4 rounded-lg bg-muted/30 border border-border/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-lg -mr-8 -mt-8" />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-secondary text-white flex items-center justify-center font-black shadow-lg shadow-secondary/20 border-2 border-white">
              AR
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-black truncate leading-tight">Alex Rodriguez</div>
              <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Level 15 Pro</div>
            </div>
          </div>
          <div className="w-full bg-muted h-1.5 rounded-lg overflow-hidden mb-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              className="bg-primary h-full rounded-lg"
            />
          </div>
          <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest text-right">650 / 1000 XP</div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex-1 justify-start gap-3 rounded-lg font-black text-xs uppercase tracking-widest text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all">
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg text-muted-foreground hover:rotate-90 transition-transform">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      </aside>
    </>
  );
}




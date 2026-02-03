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
  LogOut,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "fixed left-6 top-6 bottom-6 w-[240px] glass rounded-[2rem] flex flex-col z-50 transition-all duration-500 lg:translate-x-0 border-white/20",
        isOpen ? "translate-x-0" : "-translate-x-[200%] lg:translate-x-0"
      )}>
        <div className="p-7 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group active:scale-95 transition-all" onClick={onClose}>
            <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.4)]">
              <Zap className="h-4 w-4 text-white fill-current" />
            </div>
            <span className="text-lg font-black text-white">
              STUDY<span className="text-primary italic">HUB</span>
            </span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-8 w-8 text-muted-foreground hover:text-white" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 group relative",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn(
                  "h-4 w-4 transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                {item.name}
              </div>
              {isActive && (
                <ChevronRight className="h-3 w-3 text-primary animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-5 mt-auto space-y-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex-1 h-9 justify-start gap-2.5 rounded-xl font-black text-[9px] uppercase text-muted-foreground hover:text-destructive hover:bg-destructive/10">
            <LogOut className="h-3.5 w-3.5" /> Sign Out
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-xl text-muted-foreground hover:text-white hover:rotate-45 transition-transform"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      </aside>
    </>
  );
}

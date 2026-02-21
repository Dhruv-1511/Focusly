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
  Trophy, 
  Settings,
  LogOut,
  X,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

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

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname() || "";
  const { data: session } = useSession();

  return (
    <>
      <aside className={cn(
        "fixed left-0 top-0 bottom-0 w-[280px] bg-card/30 backdrop-blur-xl border-r border-white/5 flex flex-col z-70 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group transition-all" onClick={onClose}>
            <div className="relative h-8 w-8 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Focusly Logo" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Focusly
            </span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-lg h-8 w-8 text-muted-foreground hover:text-white" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="px-4 mb-4">
             <div className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Platform</div>
          </div>
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group relative",
                  isActive 
                    ? "text-white bg-white/5 border border-white/5 shadow-sm" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-white border border-transparent"
                )}
              >
                <item.icon className={cn(
                  "h-4 w-4 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 w-1 h-4 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 mt-auto space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10">
                 {session?.user?.image ? (
                   <Image src={session.user.image} alt="User" width={40} height={40} className="rounded-full" />
                 ) : (
                   <span>{session?.user?.name?.[0] || "U"}</span>
                 )}
              </div>
              <div className="flex-1 min-w-0">
                 <div className="text-sm font-semibold text-white truncate">{session?.user?.name || "Anonymous User"}</div>
                 <div className="flex items-center gap-1 text-[10px] font-medium text-primary">
                    <ShieldCheck className="h-3 w-3" /> Pro Member
                 </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="flex-1 h-8 rounded-lg text-xs font-semibold text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                onClick={() => signOut()}
              >
                <LogOut className="h-3.5 w-3.5 mr-2" /> Sign Out
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}



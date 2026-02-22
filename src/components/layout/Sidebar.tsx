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
  ChevronRight,
  Zap
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
        "fixed left-0 top-0 bottom-0 w-[280px] bg-card/40 backdrop-blur-2xl border-r border-white/5 flex flex-col z-70 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 pb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group transition-all" onClick={onClose}>
            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-primary/20 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <Zap className="h-6 w-6 text-primary fill-primary/30" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter italic">
              Focusly
            </span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-9 w-9 text-muted-foreground hover:text-white" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      
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

        <div className="p-4 mt-auto">
          <div className="p-5 rounded-[2rem] bg-white/2 border border-white/5 glass-dark">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative h-11 w-11 rounded-2xl bg-linear-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-black text-sm ring-1 ring-white/20 shadow-xl overflow-hidden group/avatar">
                 {session?.user?.image ? (
                   <Image src={session.user.image} alt="User" width={44} height={44} className="rounded-full object-cover group-hover/avatar:scale-110 transition-transform" />
                 ) : (
                   <span className="relative z-10">{session?.user?.name?.[0] || "U"}</span>
                 )}
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
              </div>
              <div className="flex-1 min-w-0">
                 <div className="text-sm font-black text-white truncate leading-tight mb-0.5">{session?.user?.name || "Anonymous"}</div>
                 <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <ShieldCheck className="h-2.5 w-2.5 text-primary" />
                    <span className="text-[9px] font-black text-primary uppercase tracking-tighter">Pro Elite</span>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="h-9 rounded-xl text-[11px] font-black text-muted-foreground hover:text-destructive hover:bg-destructive/10 border-white/5"
                onClick={() => signOut()}
              >
                <LogOut className="h-3.5 w-3.5 mr-2" /> EXIT
              </Button>
              <Button 
                variant="outline"
                size="icon" 
                className="h-9 w-full rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 border-white/5"
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



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
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { FocuslyModal } from "../ui/FocuslyModal";
import { useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

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
  const pathname = usePathname() || "";
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session } = useSession();

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
        "fixed left-6 top-6 bottom-6 w-[260px] glass rounded-[2.5rem] flex flex-col z-[70] transition-all duration-500 lg:translate-x-0 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
        isOpen ? "translate-x-0" : "-translate-x-[120%] lg:translate-x-0"
      )}>
        <div className="p-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group active:scale-95 transition-all" onClick={onClose}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <Image 
                src="/logo.png" 
                alt="Focusly Logo" 
                width={36}
                height={36}
                priority
                className="object-contain relative z-10"
              />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase italic">
              FOCUS<span className="text-primary">LY</span>
            </span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-8 w-8 text-muted-foreground hover:text-white" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      
      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        <div className="px-4 mb-4">
           <div className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.2em] mb-4">Navigation</div>
        </div>
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-4 py-3.5 rounded-2xl text-[10px] font-black uppercase transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "text-white bg-primary/20 border border-primary/20 shadow-[0_0_20px_rgba(129,140,248,0.1)]" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white border border-transparent"
              )}
            >
              <div className="flex items-center gap-3.5 relative z-10">
                <item.icon className={cn(
                  "h-4 w-4 transition-all duration-300 group-hover:scale-110",
                  isActive ? "text-primary drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" : "text-muted-foreground group-hover:text-primary"
                )} />
                <span className="tracking-widest">{item.name}</span>
              </div>
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent -z-10"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto border-t border-white/5 space-y-6">
        {/* User Profile Section */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/10 transition-colors">
          <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xs shadow-lg relative overflow-hidden">
             {session?.user?.image ? (
               <Image src={session.user.image} alt="User" fill className="object-cover" />
             ) : (
               <span>{session?.user?.name?.[0] || "U"}</span>
             )}
             <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-secondary border-2 border-background" />
          </div>
          <div className="flex-1 min-w-0">
             <div className="text-[10px] font-black text-white truncate uppercase tracking-tighter">{session?.user?.name || "Focus User"}</div>
             <div className="flex items-center gap-1 text-[8px] font-black text-primary uppercase">
                <ShieldCheck className="h-2.5 w-2.5" /> PRO SQUAD
             </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            className="flex-1 h-10 justify-start gap-3 rounded-xl font-black text-[9px] uppercase text-muted-foreground hover:text-destructive hover:bg-destructive/10 border border-transparent hover:border-destructive/20"
            onClick={() => setModalOpen(true)}
          >
            <LogOut className="h-3.5 w-3.5" /> Sign Out
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl text-muted-foreground hover:text-white hover:rotate-90 transition-all border border-transparent hover:bg-white/5"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      </aside>

      <FocuslyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Terminating Session?"
        message="Your neural progress is synchronized. Do you wish to end the current intensive focus period?"
        type="warning"
        confirmLabel="TERMINATE"
        onConfirm={() => signOut()}
      />
    </>
  );
}


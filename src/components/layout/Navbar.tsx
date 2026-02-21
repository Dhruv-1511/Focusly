"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, Bell, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full pt-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-4"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-lg hover:bg-white/5 text-muted-foreground lg:hidden" 
            onClick={onToggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden md:flex items-center bg-white/5 rounded-xl px-4 py-2 border border-white/5 group focus-within:border-primary/50 transition-all w-64 lg:w-80">
            <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-transparent border-none outline-none text-sm px-3 w-full text-white placeholder:text-muted-foreground/30 font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden xl:flex items-center gap-6">
             {["Solutions", "Planner", "Library"].map((item) => (
               <Link 
                 key={item}
                 href={`/${item.toLowerCase()}`}
                 className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
               >
                 {item}
               </Link>
             ))}
          </nav>
          
          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-lg hover:bg-white/5 text-muted-foreground relative"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]" />
            </Button>
            
            {session ? (
              <div className="flex items-center gap-4 ml-2">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-semibold text-white">
                    {session.user?.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-primary w-2/3" />
                    </div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">LVL 12</span>
                  </div>
                </div>
                <div className="h-9 w-9 rounded-full bg-linear-to-br from-primary/20 to-indigo-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                   {session.user?.image ? (
                     <img src={session.user.image} alt="" className="h-full w-full object-cover" />
                   ) : (
                     <Sparkles className="h-4 w-4 text-primary" />
                   )}
                </div>
              </div>
            ) : (
              <Button 
                size="sm" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-xs px-5"
                asChild
              >
                <Link href="/login">Upgrade</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}



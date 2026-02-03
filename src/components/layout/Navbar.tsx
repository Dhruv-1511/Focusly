"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, Bell, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
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
        "sticky top-6 z-40 transition-all duration-500 w-full px-4 mb-[-64px]",
        scrolled ? "top-4" : "top-6"
      )}
    >
      <div className={cn(
        "glass rounded-2xl px-6 py-3 flex items-center justify-between overflow-hidden relative mx-auto max-w-7xl",
        scrolled && "bg-white/20"
      )}>
        {/* Animated Background Accent */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-secondary/10 -z-10"
        />

        <div className="flex items-center gap-10">
          <Link href="/" className="flex lg:hidden items-center gap-3 active:scale-95 transition-transform">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
              <Zap className="h-5 w-5 text-white fill-current" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-white">
            {["Problems", "Planner", "Tools", "Community"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-xs font-black uppercase text-muted-foreground hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-white/5 rounded-xl px-3 py-1.5 border border-white/10 group focus-within:border-primary/50 transition-all">
            <Search className="h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary" />
            <input 
              type="text" 
              placeholder="Quick search..." 
              className="bg-transparent border-none outline-none text-[10px] font-black uppercase px-2 w-24 focus:w-40 transition-all text-white placeholder:text-muted-foreground/50"
            />
            <span className="text-[9px] font-black opacity-30 px-1.5 py-0.5 rounded border border-white/10 text-white">⌘K</span>
          </div>

          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-xl hover:bg-white/5 text-white"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]" />
            </Button>
          </div>

          <Button 
            size="sm" 
            className="hidden sm:flex h-9 px-5 font-black text-[10px] uppercase rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all bg-primary text-white hover:bg-primary/90"
          >
            GET STARTED
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden rounded-xl h-9 w-9 text-white" 
            onClick={onToggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

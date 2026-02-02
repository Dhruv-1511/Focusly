"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Zap, Menu, Bell, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check initial theme
    const isDarkTheme = document.documentElement.classList.contains("dark");
    setIsDark(isDarkTheme);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
        "sticky top-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-8 flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300"
            >
              <Zap className="h-6 w-6 text-white fill-current" />
            </motion.div>
            <span className="text-2xl font-black tracking-tighter hover:text-primary transition-colors">
              STUDY<span className="text-primary">HUB</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <Link href="/problems" className="hover:text-primary transition-colors">Problems</Link>
            <Link href="/planner" className="hover:text-primary transition-colors">Planner</Link>
            <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 text-orange-600 border border-orange-200 font-black text-[10px] uppercase tracking-wider"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🔥
            </motion.span> 
            12 Day Streak
          </motion.div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-lg hover:bg-slate-900 hover:text-white transition-colors" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <div className="h-8 w-px bg-border mx-2 hidden sm:block" />

          <Button size="sm" className="hidden sm:flex font-black rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            NEW SESSION
          </Button>
          
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onToggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}




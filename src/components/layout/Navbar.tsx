"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, Bell, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        "sticky top-0 z-50 transition-all duration-500 w-full px-4 lg:pl-[280px] pt-6",
        scrolled ? "pt-4" : "pt-6"
      )}
    >
      <div className={cn(
        "glass rounded-[1.5rem] px-8 py-4 flex items-center justify-between overflow-hidden relative mx-auto max-w-7xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]",
        scrolled && "bg-black/60 backdrop-blur-3xl border-white/20 shadow-primary/5 shadow-2xl"
      )}>
        {/* Animated Background Accent */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-primary via-transparent to-secondary -z-10"
        />

        <div className="flex items-center gap-12">
          <Link href="/" className="flex lg:hidden items-center gap-3 active:scale-95 transition-all group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
              <Image 
                src="/logo.png" 
                alt="Focusly Logo" 
                width={36}
                height={36}
                priority
                className="object-contain relative z-10"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {["Problems", "Planner", "Tools", "Community"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-all relative group"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                  initial={false}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-white/5 rounded-2xl px-4 py-2 border border-white/5 group focus-within:border-primary/50 focus-within:bg-white/10 transition-all shadow-inner">
            <Search className="h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="QUICK SEARCH..." 
              className="bg-transparent border-none outline-none text-[9px] font-black uppercase tracking-widest px-3 w-32 focus:w-56 transition-all text-white placeholder:text-muted-foreground/30"
            />
            <div className="flex items-center gap-1 opacity-20 group-focus-within:opacity-50 transition-opacity">
              <span className="text-[8px] font-black px-1.5 py-0.5 rounded-md bg-white/10 text-white">⌘</span>
              <span className="text-[8px] font-black px-1.5 py-0.5 rounded-md bg-white/10 text-white">K</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-[1rem] hover:bg-white/5 text-white relative group border border-transparent hover:border-white/5 transition-all"
            >
              <Bell className="h-4 w-4 transition-transform group-hover:rotate-12" />
              <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-primary rounded-full border-2 border-background shadow-[0_0_10px_var(--primary)]" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-[1rem] hover:bg-white/5 text-white border border-transparent hover:border-white/5 transition-all lg:hidden" 
              onClick={onToggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-2 hidden sm:block" />

          {session ? (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-black uppercase text-white tracking-tighter">
                  {session.user?.name}
                </span>
                <span className="text-[8px] font-black text-primary uppercase flex items-center gap-1">
                   <Sparkles className="h-2 w-2" /> Tier Pro
                </span>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => signOut()}
                className="h-10 px-6 font-black text-[10px] uppercase rounded-xl hover:bg-destructive/10 hover:text-destructive border border-transparent hover:border-destructive/20 transition-all"
              >
                EXIT
              </Button>
            </div>
          ) : (
            <Button 
              size="xl" 
              asChild
              className="hidden sm:flex h-11 px-8 font-black text-[10px] tracking-widest uppercase rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all bg-primary text-white border-none glow-primary"
            >
              <Link href="/login" className="flex items-center gap-2">
                AUTHENTICATE <Zap className="h-3 w-3 fill-current" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
}


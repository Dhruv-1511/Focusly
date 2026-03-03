"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Command as CommandIcon, Brain } from "lucide-react";
import { BrainZapLogo } from "@/components/ui/Logo";

export function LandingNavbar() {
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
            <BrainZapLogo className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
            FOCUSLY<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: "Features", href: "#features" },
            { name: "Tools", href: "/tools" },
            { name: "Library", href: "/problems" },
            { name: "Pricing", href: "#pricing" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-white transition-colors border border-white/5 hover:bg-white/5 rounded-full px-4"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'k', 'metaKey': true}))}
          >
            <CommandIcon className="h-3 w-3" /> FocusLink <span className="opacity-30">⌘K</span>
          </Button>

          <Link href="/login" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors px-2">
            Sign In
          </Link>
          <Button asChild className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 transition-all hover:scale-[1.05]">
            <Link href="/register">Initialize</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

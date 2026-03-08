"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./navbar/Logo";
import { SearchContainer } from "./navbar/SearchContainer";
import { NotificationSystem } from "./navbar/NotificationSystem";
import { ProfileMenu } from "./navbar/ProfileMenu";
import { Command as CommandIcon } from "lucide-react";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

const NAV_LINKS = [
  { name: "Research", href: "/problems" },
  { name: "Planner", href: "/planner" },
  { name: "Library", href: "/tools" }
];

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
        "sticky top-4 z-50 transition-all duration-500 w-[calc(100%-2rem)] mx-auto rounded-[2rem] border border-white/5",
        scrolled ? "bg-background/80 backdrop-blur-2xl py-3 shadow-2xl" : "bg-white/[0.02] backdrop-blur-xl py-4"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4 flex-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-white/5 text-muted-foreground lg:hidden shrink-0" 
            onClick={onToggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <SearchContainer />
          
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex h-10 px-4 gap-2 bg-white/5 border-white/10 text-muted-foreground hover:bg-primary/10 hover:border-primary/20 hover:text-white transition-all text-xs font-bold rounded-2xl"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'k', 'metaKey': true}))}
          >
            <CommandIcon className="h-3.5 w-3.5" /> <span>FocusLink</span> <span className="opacity-30 ml-auto">⌘K</span>
          </Button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <nav className="hidden xl:flex items-center gap-8 mr-4">
             {NAV_LINKS.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                   className="text-[11px] font-semibold text-muted-foreground hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
             ))}
          </nav>
          
          <div className="h-4 w-px bg-white/10 hidden xl:block" />

          <NotificationSystem />
          
          <ProfileMenu />
        </div>
      </div>
    </motion.header>
  );
}

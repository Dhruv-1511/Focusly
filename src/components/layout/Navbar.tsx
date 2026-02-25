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
        "sticky top-0 z-50 transition-all duration-300 w-full pt-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-4"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8 flex-1">
          <Logo />

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-white/5 text-muted-foreground lg:hidden shrink-0" 
            onClick={onToggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <SearchContainer />
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <nav className="hidden xl:flex items-center gap-8 mr-4">
             {NAV_LINKS.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 hover:text-white transition-colors"
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

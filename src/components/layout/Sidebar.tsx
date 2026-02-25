"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrainZapLogo } from "@/components/ui/Logo";
import { SidebarMenu } from "./sidebar/SidebarMenu";
import { SidebarProfile } from "./sidebar/SidebarProfile";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside className={cn(
      "fixed left-0 top-0 bottom-0 w-[280px] bg-card/40 backdrop-blur-2xl border-r border-white/5 flex flex-col z-70 transition-transform duration-300 lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-8 pb-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group transition-all" onClick={onClose}>
          <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-primary/20 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
            <BrainZapLogo className="h-7 w-7" />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter italic uppercase">
            Focusly
          </span>
        </Link>
        <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-9 w-9 text-muted-foreground hover:text-white" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
    
      <SidebarMenu onClose={onClose} />

      <SidebarProfile />
    </aside>
  );
}

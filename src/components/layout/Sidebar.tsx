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
      "fixed left-0 top-0 bottom-0 w-[320px] bg-black border-r-[20px] border-primary flex flex-col z-70 transition-transform duration-500",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-8 pb-10 flex items-center justify-between bg-primary border-b-4 border-black mb-8">
        <Link href="/" className="flex items-center gap-4 transition-all" onClick={onClose}>
          <div className="h-10 w-10 bg-black flex items-center justify-center rotate-[-12deg]">
            <BrainZapLogo className="h-7 w-7 text-primary" />
          </div>
          <span className="text-3xl font-black text-black italic tracking-tighter uppercase">
            Focusly.
          </span>
        </Link>
        <Button variant="ghost" size="icon" className="lg:hidden rounded-none h-12 w-12 text-black hover:bg-white" onClick={onClose}>
          <X className="h-8 w-8" />
        </Button>
      </div>
    
      <div className="flex-1 custom-scrollbar overflow-y-auto px-4 bg-[linear-gradient(rgba(240,171,252,0.05)_1px,transparent_1px)] bg-[size:100%_4px]">
        <SidebarMenu onClose={onClose} />
      </div>

      <div className="mt-auto p-4 rotate-[-2deg]">
         <SidebarProfile />
      </div>
    </aside>
  );
}

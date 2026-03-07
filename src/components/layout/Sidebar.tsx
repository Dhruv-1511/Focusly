"use client";

import Link from "next/link";
import { X, LayoutDashboard, Brain, Target, BookOpen, Settings, Users, Trophy } from "lucide-react";
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
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 bottom-0 w-[280px] bg-background border-r border-white/5 flex flex-col z-50 transition-all duration-700 ease-[0.16, 1, 0.3, 1]",
        isOpen ? "translate-x-0 shadow-3xl shadow-black" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Sidebar Header */}
        <div className="p-6 h-24 flex items-center justify-between border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 group transition-all" onClick={onClose}>
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/5">
              <BrainZapLogo className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
              FOCUSLY<span className="text-primary">.</span>
            </span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-10 w-10" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-8 px-4 custom-scrollbar">
          <SidebarMenu onClose={onClose} />
        </div>

        {/* Profile / Bottom Section */}
        <div className="p-4 border-t border-white/5 bg-white/[0.01]">
           <SidebarProfile />
        </div>
      </aside>
    </>
  );
}

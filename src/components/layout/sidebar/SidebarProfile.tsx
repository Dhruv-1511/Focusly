"use client";

import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export function SidebarProfile() {
  const { data: session } = useSession();

  return (
    <div className="p-2 mt-auto">
      <div className="p-4 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative h-10 w-10 rounded-xl bg-linear-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-black text-xs ring-1 ring-white/10 shadow-lg overflow-hidden group/avatar">
             {session?.user?.image ? (
               <Image src={session.user.image} alt="User" width={40} height={40} className="rounded-full object-cover group-hover/avatar:scale-110 transition-transform duration-500" />
             ) : (
               <span className="relative z-10">{session?.user?.name?.[0] || "U"}</span>
             )}
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
          </div>
          <div className="flex-1 min-w-0">
             <div className="text-xs font-bold text-white truncate leading-tight mb-1">{session?.user?.name || "Neural Resident"}</div>
             <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="text-[8px] font-black text-primary uppercase tracking-tighter">ELITE 0.1%</span>
             </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="flex-1 h-9 rounded-xl text-[10px] font-bold text-muted-foreground hover:text-white hover:bg-white/5 border border-white/5 transition-all"
            asChild
          >
            <Link href="/settings">
              <Settings className="h-3.5 w-3.5 mr-2" /> SETTINGS
            </Link>
          </Button>
          <Button 
            variant="ghost"
            size="icon" 
            className="h-9 w-9 rounded-xl text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 border border-white/5 transition-all"
            onClick={() => signOut()}
          >
            <LogOut className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

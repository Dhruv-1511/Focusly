"use client";

import { LogOut, Settings, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export function SidebarProfile() {
  const { data: session } = useSession();

  return (
    <div className="p-4 mt-auto">
      <div className="p-5 rounded-[2rem] bg-white/2 border border-white/5 glass-dark">
        <div className="flex items-center gap-4 mb-5">
          <div className="relative h-11 w-11 rounded-2xl bg-linear-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-black text-sm ring-1 ring-white/20 shadow-xl overflow-hidden group/avatar">
             {session?.user?.image ? (
               <Image src={session.user.image} alt="User" width={44} height={44} className="rounded-full object-cover group-hover/avatar:scale-110 transition-transform" />
             ) : (
               <span className="relative z-10">{session?.user?.name?.[0] || "U"}</span>
             )}
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
          </div>
          <div className="flex-1 min-w-0">
             <div className="text-sm font-black text-white truncate leading-tight mb-0.5">{session?.user?.name || "Anonymous"}</div>
             <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <ShieldCheck className="h-2.5 w-2.5 text-primary" />
                <span className="text-[9px] font-black text-primary uppercase tracking-tighter">Pro Elite</span>
             </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="h-9 rounded-xl text-[11px] font-black text-muted-foreground hover:text-destructive hover:bg-destructive/10 border-white/5"
            onClick={() => signOut()}
          >
            <LogOut className="h-3.5 w-3.5 mr-2" /> EXIT
          </Button>
          <Button 
            variant="outline"
            size="icon" 
            className="h-9 w-full rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 border-white/5"
            asChild
          >
            <Link href="/settings">
              <Settings className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

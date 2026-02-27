"use client";

import { ChevronDown, Sparkles, User, Settings, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ProfileMenu() {
  const { data: session } = useSession();
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  if (!session) {
    return (
      <Button 
        size="sm" 
        variant="glow"
        className="rounded-xl h-10 px-6 font-black text-[10px] tracking-widest uppercase"
        asChild
      >
        <Link href="/login">Upgrade Protocol</Link>
      </Button>
    );
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setShowProfile(!showProfile)}
        className={cn(
          "flex items-center gap-3 p-1 rounded-2xl transition-all border",
          showProfile ? "bg-white/10 border-primary/30" : "bg-white/5 border-transparent hover:border-white/10"
        )}
      >
        <div className="h-9 w-9 rounded-xl bg-linear-to-br from-primary/20 to-indigo-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
          {session.user?.image ? (
            <img src={session.user.image} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-xs font-black text-primary">{session.user?.name?.[0] || <Sparkles className="h-4 w-4" />}</span>
          )}
        </div>
        <div className="hidden sm:flex flex-col items-start pr-2">
          <span className="text-[10px] font-black text-white leading-none mb-1">
            {session.user?.name?.split(' ')[0]}
          </span>
          <div className="flex items-center gap-1">
            <div className="h-1 w-8 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3 shadow-[0_0_4px_var(--primary)]" />
            </div>
            <span className="text-[8px] font-black text-primary tracking-tighter">LVL 12</span>
          </div>
        </div>
        <ChevronDown className={cn("h-3 w-3 text-muted-foreground mr-1 transition-transform", showProfile && "rotate-180")} />
      </button>

      <AnimatePresence>
        {showProfile && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-3 w-64 glass rounded-3xl p-3 shadow-3xl border-white/10"
          >
            <div className="p-4 mb-2 bg-white/3 rounded-2xl border border-white/5">
              <div className="text-[10px] font-black text-muted-foreground/80 uppercase tracking-[0.2em] mb-3">Active Status</div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_var(--secondary)]" />
                <div className="text-xs font-bold text-white uppercase tracking-wider">Synchronized</div>
              </div>
            </div>
            <div className="space-y-1">
              <button 
                onClick={() => { router.push("/settings"); setShowProfile(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-xs font-bold text-muted-foreground hover:text-white transition-all"
              >
                <User className="h-4 w-4" /> Profile Protocol
              </button>
              <button 
                onClick={() => { router.push("/settings?tab=security"); setShowProfile(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-xs font-bold text-muted-foreground hover:text-white transition-all"
              >
                <Settings className="h-4 w-4" /> System Settings
              </button>
              <div className="h-px bg-white/5 my-1 mx-2" />
              <button 
                onClick={() => signOut()}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-destructive/10 text-xs font-bold text-muted-foreground hover:text-destructive transition-all"
              >
                <LogOut className="h-4 w-4" /> Terminate Link
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

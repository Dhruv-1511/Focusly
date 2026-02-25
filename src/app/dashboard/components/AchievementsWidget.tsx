"use client";

import { motion } from "framer-motion";
import { Trophy, Plus } from "lucide-react";
import Link from "next/link";

export function AchievementsWidget() {
  return (
    <motion.div className="glass-card p-8! overflow-hidden relative">
      <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-secondary/5 blur-2xl rounded-full" />
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center gap-2">
           <Trophy className="h-3.5 w-3.5 text-secondary" /> Achievements
        </h3>
        <Link href="/rewards" className="text-[10px] font-black text-primary hover:text-white transition-colors uppercase tracking-widest">Protocol Log</Link>
      </div>
      <div className="flex flex-wrap gap-3 relative z-10">
         {['🎖️', '🚀', '🧠', '⚡'].map((badge, i) => (
           <div key={i} className="h-14 w-14 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-2xl hover:bg-white/5 hover:scale-110 transition-all cursor-pointer shadow-lg group">
              <span className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{badge}</span>
           </div>
         ))}
         <div className="h-14 w-14 rounded-2xl bg-white/2 border border-dashed border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/5 transition-colors cursor-pointer">
            <Plus className="h-5 w-5" />
         </div>
      </div>
    </motion.div>
  );
}

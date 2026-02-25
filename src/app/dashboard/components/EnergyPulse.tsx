"use client";

import { motion } from "framer-motion";
import { Activity, Sparkles } from "lucide-react";

interface EnergyPulseProps {
  onMoodSelect: (emoji: string) => void;
}

export function EnergyPulse({ onMoodSelect }: EnergyPulseProps) {
  return (
    <motion.div className="glass-card p-8!">
      <h3 className="text-xl font-black mb-2 flex items-center gap-3">
        <Activity className="h-5 w-5 text-primary" /> Energy Pulse
      </h3>
      <p className="text-xs text-muted-foreground mb-8 font-black uppercase tracking-widest leading-relaxed">System feedback for AI optimization.</p>
      
      <div className="grid grid-cols-4 gap-3 mb-10">
         {['😊', '😐', '😔', '🤯'].map(emoji => (
           <button 
            key={emoji} 
            onClick={() => onMoodSelect(emoji)}
            className="aspect-square rounded-2xl bg-white/3 hover:bg-white/5 text-2xl transition-all border border-white/5 hover:border-primary/30 flex items-center justify-center hover:scale-110 active:scale-90"
           >
             {emoji}
           </button>
         ))}
      </div>

      <div className="p-5 bg-primary/10 rounded-3xl border border-primary/20 relative overflow-hidden group">
         <div className="absolute inset-0 bg-primary/5 animate-pulse" />
         <div className="relative z-10">
            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
               <Sparkles className="h-3.5 w-3.5" /> AI HYPOTHESIS
            </div>
            <p className="text-sm font-bold text-white leading-relaxed italic">
              "Baseline stable. Your cognitive throughput is projected to peak in 42 minutes."
            </p>
         </div>
      </div>
    </motion.div>
  );
}

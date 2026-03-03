"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Activity, Sparkles, Zap, Brain } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface EnergyPulseProps {
  onMoodSelect: (emoji: string) => void;
}

const PULSE_DATA: Record<string, { label: string, analysis: string, color: string }> = {
  '😊': { label: 'PEAK', analysis: 'Baseline stable. Cognitive throughput is projected to peak in 42 minutes.', color: 'text-green-400' },
  '😐': { label: 'LINEAR', analysis: 'Standard operational state. Recommended: 5-minute neural reset to boost alpha waves.', color: 'text-blue-400' },
  '😔': { label: 'DIP', analysis: 'Cortisol spike detected. Engaging recovery protocols. Lowering cognitive load.', color: 'text-amber-400' },
  '🤯': { label: 'OVERLOAD', analysis: 'Neural saturation reached. CRITICAL: Immediate 15-minute digital fast required.', color: 'text-rose-400' },
};

export function EnergyPulse({ onMoodSelect }: EnergyPulseProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (emoji: string) => {
    setSelected(emoji);
    onMoodSelect(emoji);
  };

  return (
    <motion.div className="glass p-8 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-primary pointer-events-none group-hover:scale-110 transition-transform duration-700">
        <Zap className="h-24 w-24" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" /> Energy Pulse
            </h3>
            <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-[0.2em]">Neural Baseline Feedback</p>
          </div>
          {selected && (
            <div className={cn("text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5", PULSE_DATA[selected].color)}>
              {PULSE_DATA[selected].label}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-10">
           {Object.keys(PULSE_DATA).map(emoji => (
             <button 
              key={emoji} 
              onClick={() => handleSelect(emoji)}
              className={cn(
                "aspect-square rounded-2xl bg-white/3 hover:bg-white/5 text-2xl transition-all border flex items-center justify-center hover:scale-110 active:scale-90 group/btn",
                selected === emoji ? "border-primary bg-primary/10 scale-105 shadow-lg shadow-primary/20" : "border-white/5"
              )}
             >
               <span className={cn("transition-transform group-hover/btn:scale-125", selected === emoji ? "scale-125" : "")}>{emoji}</span>
             </button>
           ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selected || 'none'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-6 bg-white/[0.03] rounded-3xl border border-white/5 relative overflow-hidden min-h-[100px] flex items-center"
          >
             <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
             <div className="relative z-10 w-full">
                <div className="text-[9px] font-black text-primary/60 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                   <Sparkles className="h-3 w-3" /> AI DIAGNOSIS
                </div>
                <p className="text-sm font-semibold text-white/90 leading-relaxed italic pr-4">
                  {selected ? `"${PULSE_DATA[selected].analysis}"` : "Awaiting neural input. Please select your current cognitive state above."}
                </p>
             </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

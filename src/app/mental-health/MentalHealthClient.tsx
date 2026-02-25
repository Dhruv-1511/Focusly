"use client";

import { motion } from "framer-motion";
import { HeartPulse, Brain, Zap, Moon, Sun, Wind, Sparkles, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FocuslyModal } from "@/components/ui/FocuslyModal";

export default function MentalHealthPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState("");

  const handleFeeling = (feeling: string) => {
    setSelectedFeeling(feeling);
    setModalOpen(true);
  };

  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Neural Balance Monitor</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Mental <span className="text-primary italic">Equilibrium</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          A high-performance brain requires high-performance recovery protocols to maintain cognitive longevity.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mood Logger */}
        <div className="lg:col-span-12">
           <section className="glass rounded-[3rem] p-10 md:p-14 relative overflow-hidden group border-white/5">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <HeartPulse className="h-48 w-48 text-primary" />
              </div>
              
              <div className="text-center max-w-xl mx-auto mb-12 relative z-10">
                 <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">How is your neural load today?</h2>
                 <p className="text-muted-foreground font-medium text-xs">AI-driven focus adjustments based on your current emotional baseline.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                 <MoodButton emoji="😊" label="Optimal" onClick={() => handleFeeling("OPTIMAL")} />
                 <MoodButton emoji="😐" label="Fatigued" onClick={() => handleFeeling("FATIGUED")} />
                 <MoodButton emoji="😔" label="Stressed" onClick={() => handleFeeling("STRESSED")} />
                 <MoodButton emoji="🤯" label="Burnout" onClick={() => handleFeeling("BURNOUT")} />
              </div>
           </section>
        </div>

        {/* Recovery Protocols */}
        <div className="lg:col-span-8 space-y-8">
           <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-4">
              Available Recovery Protocols
              <div className="h-px bg-white/5 flex-1" />
           </h3>
           
           <div className="space-y-4">
              <RecoveryItem 
                title="Box Breathing" 
                desc="Reset cortisol levels in 120 seconds with controlled respiratory cycles."
                icon={Wind}
                time="2m"
                color="text-blue-400"
              />
              <RecoveryItem 
                title="Neural Reset 528Hz" 
                desc="Acoustic frequencies designed to repair DNA stress markers and enhance calm."
                icon={Activity}
                time="10m"
                color="text-primary"
              />
              <RecoveryItem 
                title="Digital Detox Blast" 
                desc="Instant disconnection from all social nodes for immediate dopamine baseline reset."
                icon={Zap}
                time="∞"
                color="text-orange-500"
              />
           </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="lg:col-span-4 h-full">
           <div className="glass p-8 rounded-3xl border-white/5 h-full flex flex-col">
              <div className="mb-8 flex justify-between items-start">
                 <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Brain className="h-6 w-6 text-primary" />
                 </div>
                 <div className="px-2 py-1 rounded bg-secondary/10 border border-secondary/20 text-[9px] font-bold text-secondary uppercase tracking-wider">Verified</div>
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">Neural Guide <span className="text-muted-foreground/40 font-medium">v0.4</span></h4>
              <p className="text-xs font-semibold text-muted-foreground mb-10 leading-relaxed flex-1">
                 "I've noticed your focus sessions have been getting shorter over the last 48 hours. This typically indicates a rise in background cognitive load. I recommend a 30-minute 'Digital Silence' protocol before your next session."
              </p>
              <Button className="w-full h-12 rounded-xl bg-white text-black hover:bg-neutral-200 font-bold text-xs transition-all shadow-lg">
                 Start Dialogue
              </Button>
           </div>
        </div>
      </div>

      <FocuslyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Neural state Logged"
        message={`We've adjusted your protocol to account for your ${selectedFeeling} state. Focusly will now prioritize recovery modules.`}
        type="info"
      />
    </div>
  );
}

function MoodButton({ emoji, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 group transition-all transform active:scale-95"
    >
       <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
       <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-white transition-colors">{label}</div>
    </button>
  );
}

function RecoveryItem({ title, desc, icon: Icon, time, color }: any) {
  return (
    <div className="glass p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-6 group hover:border-white/10 transition-all">
       <div className={`h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center ${color} border border-white/5 group-hover:scale-105 transition-transform shrink-0`}>
          <Icon className="h-6 w-6" />
       </div>
       <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-1">
             <h4 className="font-bold text-base text-white tracking-tight">{title}</h4>
             <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/5 w-fit mx-auto sm:mx-0 uppercase tracking-tighter">{time}</span>
          </div>
          <p className="text-muted-foreground text-[11px] font-medium leading-relaxed">{desc}</p>
       </div>
       <Button variant="ghost" className="h-10 px-6 rounded-xl border border-white/5 hover:bg-white/5 font-bold text-[10px] tracking-wider text-primary group-hover:bg-primary group-hover:text-white transition-all">
          EXECUTE
       </Button>
    </div>
  );
}


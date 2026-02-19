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
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto space-y-16">
      <header className="relative">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <HeartPulse className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Neural Balance Monitor</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] uppercase italic text-white">
          MENTAL <br />
          <span className="text-gradient">EQUILIBRIUM.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">A high-performance brain requires high-performance recovery.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Mood Logger */}
        <div className="lg:col-span-12">
           <section className="glass-card rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden group border-white/5">
              <div className="absolute -top-20 -right-20 h-80 w-80 bg-primary/10 blur-[100px] rounded-full group-hover:blur-[120px] transition-all" />
              
              <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                 <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">How is your neural load?</h2>
                 <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-[0.3em]">AI-driven focus adjustments based on emotional state.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                 <MoodButton emoji="😊" label="Optimal" onClick={() => handleFeeling("OPTIMAL")} />
                 <MoodButton emoji="😐" label="Fatigued" onClick={() => handleFeeling("FATIGUED")} />
                 <MoodButton emoji="😔" label="Stressed" onClick={() => handleFeeling("STRESSED")} />
                 <MoodButton emoji="🤯" label="Burnout" onClick={() => handleFeeling("BURNOUT")} />
              </div>
           </section>
        </div>

        {/* Recovery Protocols */}
        <div className="lg:col-span-8 space-y-10">
           <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
              <div className="h-1.5 w-12 bg-primary rounded-full" /> 
              Recovery Protocols
           </h3>
           
           <div className="space-y-6">
              <RecoveryItem 
                title="Box Breathing v1.0" 
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
                time="Indefinite"
                color="text-orange-500"
              />
           </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden bg-white text-black border-none h-full">
              <div className="mb-10 flex justify-between items-start">
                 <div className="h-14 w-14 rounded-2xl bg-black/5 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-black" />
                 </div>
                 <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter italic leading-none">AI THERAPIST <br /><span className="text-black/40">V0.4</span></h4>
              <p className="text-sm font-medium text-black/60 mb-10 leading-relaxed">
                 "I've noticed your focus sessions have been getting shorter over the last 48 hours. This typically indicates a rise in background cognitive load. I recommend a 30-minute 'Digital Silence' protocol before your next session."
              </p>
              <Button className="w-full h-16 rounded-2xl bg-black text-white hover:bg-black/80 font-black uppercase text-[10px] tracking-widest transition-all">
                 START DIALOGUE
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
      className="flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 group transition-all transform active:scale-95"
    >
       <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">{emoji}</div>
       <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-white transition-colors">{label}</div>
    </button>
  );
}

function RecoveryItem({ title, desc, icon: Icon, time, color }: any) {
  return (
    <div className="glass-card p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-8 group hover:border-white/20 transition-all shimmer">
       <div className={`h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center ${color} border border-white/5 group-hover:scale-110 transition-transform`}>
          <Icon className="h-8 w-8" />
       </div>
       <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
             <h4 className="font-black text-lg uppercase tracking-tight text-white">{title}</h4>
             <span className="text-[9px] font-black px-2 py-0.5 rounded border border-white/10 text-muted-foreground uppercase">{time}</span>
          </div>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed">{desc}</p>
       </div>
       <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase text-[10px] tracking-widest group-hover:bg-primary group-hover:text-white group-hover:border-none transition-all">
          EXECUTE
       </Button>
    </div>
  );
}

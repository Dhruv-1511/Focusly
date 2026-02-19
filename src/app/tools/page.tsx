"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Brain, 
  Shield, 
  Clock, 
  BookOpen, 
  Target, 
  Sparkles, 
  ArrowRight,
  Monitor,
  Smartphone,
  Layers,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TOOLS = [
  {
    name: "Neural Timer 3.0",
    desc: "AI-optimized Pomodoro focus cycles synchronized with your peak circadian rhythm.",
    icon: Clock,
    color: "text-primary",
    bg: "bg-primary/10",
    status: "Active",
    link: "/focus"
  },
  {
    name: "Focus Shield",
    desc: "Browser and application blocker with deep-work isolation protocols.",
    icon: Shield,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    status: "Beta",
    link: "/tools/shield"
  },
  {
    name: "Recall Engine",
    desc: "Active recall and spaced repetition flashcard generator powered by neural LLMs.",
    icon: Brain,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    status: "Active",
    link: "/tools/recall"
  },
  {
    name: "Mock Generator",
    desc: "Instantly create high-accuracy practice exams from your notes and syllabi.",
    icon: Target,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    status: "Alpha",
    link: "/tools/exams"
  },
  {
    name: "Sonic Waves",
    desc: "Generative AI background audio designed to lock your brain into alpha-state.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    status: "Active",
    link: "/focus"
  },
  {
    name: "Study Architect",
    desc: "Automated curriculum builder based on exam dates and topic difficulty.",
    icon: Layers,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    status: "Active",
    link: "/planner"
  },
];

export default function ToolsPage() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto space-y-16">
      <header className="relative">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Activity className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Performance Arsenal</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] uppercase italic text-white">
          THE <br />
          <span className="text-gradient">LAB.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">Equip yourself with the most advanced neural performance tools ever built for students.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-10 rounded-[3rem] border-white/5 flex flex-col justify-between group cursor-pointer hover:border-primary/20 h-full shimmer"
          >
             <div>
                <div className="flex justify-between items-start mb-10">
                   <div className={`h-16 w-16 rounded-2xl ${tool.bg} flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                      <tool.icon className="h-8 w-8" />
                   </div>
                   <div className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded border border-white/10 text-muted-foreground group-hover:text-primary transition-colors">
                      {tool.status}
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic text-white group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-10">{tool.desc}</p>
             </div>
             
             <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex -space-x-2">
                   <Monitor className="h-4 w-4 text-muted-foreground/40" />
                   <Smartphone className="h-4 w-4 text-muted-foreground/40" />
                </div>
                <Button variant="ghost" className="h-10 px-0 hover:bg-transparent font-black text-[10px] uppercase tracking-[0.25em] text-primary group-hover:gap-3 transition-all flex items-center">
                   LAUNCH TOOL <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <section className="glass-card rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
         <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="flex items-center gap-2 mb-6 text-primary font-black uppercase text-[10px] tracking-[0.3em]">
                  <Sparkles className="h-4 w-4 fill-current" /> Experimental Feature
               </div>
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.95] text-white uppercase italic tracking-tighter">NEURAL SYNC <br />DESKTOP OS.</h2>
               <p className="text-lg text-muted-foreground font-medium mb-12 max-w-lg">Complete OS-level distraction blocking. No notifications, no alt-tabbing, just pure, unadulterated focus.</p>
               <Button size="xl" className="rounded-2xl h-18 px-12 font-black text-lg bg-white text-black hover:scale-[1.05] transition-all shadow-2xl">
                  REQUEST EARLY ACCESS
               </Button>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/40 p-4">
               <div className="absolute inset-0 bg-primary/5 blur-3xl" />
               <div className="relative h-full w-full rounded-2xl border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-1000">
                  <Monitor className="h-24 w-24 text-primary/20" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

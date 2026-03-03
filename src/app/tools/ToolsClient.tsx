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
import Link from "next/link";
import { useState } from "react";
import { FocuslyModal } from "@/components/ui/FocuslyModal";

interface Tool {
  name: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  status: string;
  link: string;
}

const TOOLS: Tool[] = [
  {
    name: "Neural Timer",
    desc: "AI-optimized Pomodoro focus cycles synchronized with your peak circadian rhythm.",
    icon: Clock,
    color: "text-primary",
    bg: "bg-primary/10",
    status: "v1.2",
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
    status: "v2.0",
    link: "/tools/recall"
  },
  {
    name: "Mock Generator",
    desc: "Instantly create high-accuracy practice exams from your notes and syllabi.",
    icon: Target,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    status: "Beta",
    link: "/tools/exams"
  },
  {
    name: "Sonic Waves",
    desc: "Generative AI background audio designed to lock your brain into alpha-state.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    status: "v1.1",
    link: "/focus"
  },
  {
    name: "Study Architect",
    desc: "Automated curriculum builder based on exam dates and topic difficulty.",
    icon: Layers,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    status: "v2.4",
    link: "/planner"
  },
];

export default function ToolsPage() {
  const [modal, setModal] = useState({ open: false, title: "", message: "", type: "info" as "info" | "success" | "warning" });

  const showFeedback = (title: string, message: string, type: "info" | "success" | "warning" = "info") => {
    setModal({ open: true, title, message, type });
  };

  const handleToolClick = (tool: Tool) => {
    // If link is for a non-existent page, show feedback instead
    if (tool.link.startsWith('/tools/') && tool.status === "Beta") {
      showFeedback(
        "ENCRYPTED PROTOCOL", 
        `The ${tool.name} tool is currently undergoing final neural calibration. Your account has been prioritized for the next deployment wave.`, 
        "info"
      );
      return false;
    }
    return true;
  };

  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary tracking-[0.3em]">Performance Arsenal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          NEURAL <span className="text-primary italic">WORKSHOP</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          Equip yourself with the most advanced neural performance tools ever built for specialized academic focus and deep-work mastery.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass group p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all cursor-pointer h-full group/card shadow-2xl"
          >
             <div>
                <div className="flex justify-between items-start mb-10">
                   <div className={`h-14 w-14 rounded-2xl ${tool.bg} flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-lg`}>
                      <tool.icon className="h-7 w-7" />
                   </div>
                   <div className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 text-muted-foreground group-hover:text-primary transition-colors border border-white/5">
                      {tool.status}
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-muted-foreground text-xs font-semibold leading-relaxed mb-10 uppercase tracking-widest opacity-60">{tool.desc}</p>
             </div>
             
             <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                   <Monitor className="h-4 w-4 text-muted-foreground/40" />
                   <Smartphone className="h-4 w-4 text-muted-foreground/40" />
                </div>
                <Button 
                  variant="link"
                  className="text-[11px] font-black text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform p-0 h-auto"
                  onClick={() => handleToolClick(tool)}
                >
                   {handleToolClick({ ...tool }) ? (
                     <Link href={tool.link} className="flex items-center gap-2">INITIALIZE <ArrowRight className="h-3.5 w-3.5" /></Link>
                   ) : (
                     <div className="flex items-center gap-2">INITIALIZE <ArrowRight className="h-3.5 w-3.5" /></div>
                   )}
                </Button>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <section className="glass rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden group border-white/5 shadow-3xl">
         <div className="absolute top-0 right-0 p-12 text-primary opacity-[0.03] group-hover:scale-110 group-hover:opacity-[0.05] transition-all duration-1000 pointer-events-none">
            <Monitor className="h-96 w-96 shadow-2xl" />
         </div>
         <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-6 text-primary font-black uppercase text-[10px] tracking-[0.3em]">
               <Sparkles className="h-4 w-4 fill-current" /> Early Access Protocol
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Focusly <span className="text-primary italic text-gradient">OS Shell</span></h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium mb-12 leading-relaxed">
              A military-grade OS distraction blocking layer. Eliminates notifications and OS-level interruptions, creating a sanctuary for pure, unadulterated focus flow.
            </p>
            <Button 
                size="xl" 
                className="rounded-2xl px-12 font-black text-sm bg-white text-black hover:bg-neutral-200 transition-all shadow-2xl hover:scale-[1.05] active:scale-95"
                onClick={() => showFeedback("WAITLIST BROADCAST", "Broadcasting your neural ID to the OS Shell alpha queue. Access slot reserved at position: #12,402", "success")}
            >
               Join Waitlist
            </Button>
         </div>
      </section>
      <FocuslyModal 
        isOpen={modal.open} 
        onClose={() => setModal({ ...modal, open: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
}

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

  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Performance Arsenal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Neural <span className="text-primary italic">Workshop</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          Equip yourself with the most advanced neural performance tools ever built for specialized academic focus.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="glass group p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all cursor-pointer h-full"
          >
             <div>
                <div className="flex justify-between items-start mb-8">
                   <div className={`h-12 w-12 rounded-xl ${tool.bg} flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                      <tool.icon className="h-6 w-6" />
                   </div>
                   <div className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-muted-foreground group-hover:text-primary transition-colors">
                      {tool.status}
                   </div>
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-muted-foreground text-xs font-medium leading-relaxed mb-8">{tool.desc}</p>
             </div>
             
             <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                   <Monitor className="h-3.5 w-3.5 text-muted-foreground/30" />
                   <Smartphone className="h-3.5 w-3.5 text-muted-foreground/30" />
                </div>
                <Link href={tool.link} className="text-[11px] font-bold text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                   INITIALIZE <ArrowRight className="h-3.5 w-3.5" />
                </Link>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <section className="glass rounded-[3rem] p-10 md:p-16 relative overflow-hidden group border-white/5">
         <div className="absolute top-0 right-0 p-12 text-primary/5 group-hover:scale-110 transition-transform duration-1000">
            <Monitor className="h-64 w-64" />
         </div>
         <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase text-[10px] tracking-wider">
               <Sparkles className="h-4 w-4 fill-current" /> Early Access
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Focusly <span className="text-primary italic">OS Shell</span></h2>
            <p className="text-sm md:text-base text-muted-foreground font-medium mb-10 leading-relaxed">
               A complete OS-level distraction blocking layer. No notifications, no alt-tabbing, just pure, unadulterated focus flow.
            </p>
            <Button 
                size="lg" 
                className="rounded-xl h-12 px-8 font-bold text-sm bg-white text-black hover:bg-neutral-200 transition-all shadow-xl"
                onClick={() => showFeedback("WAITLIST ACCESS", "Broadcasting your neural ID to the OS Shell alpha queue. Position: #12,402", "success")}
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


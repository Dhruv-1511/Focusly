"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BarChart3, 
  Clock, 
  Trophy, 
  Flame, 
  Target, 
  Plus, 
  ArrowRight,
  Brain,
  Zap,
  CheckCircle2,
  Calendar,
  Sparkles,
  TrendingUp,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FocuslyModal } from "@/components/ui/FocuslyModal";
import { StudyPlan } from "@/types";
import { MOCK_STUDY_PLAN } from "@/data/mock";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { DailyProtocol } from "./components/DailyProtocol";
import { DashboardStats } from "./components/DashboardStats";
import { EnergyPulse } from "./components/EnergyPulse";
import { AchievementsWidget } from "./components/AchievementsWidget";

import { Variants } from "framer-motion";

export default function Dashboard() {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [studyPlan, setStudyPlan] = useState<StudyPlan>(MOCK_STUDY_PLAN);

  useEffect(() => {
    async function fetchPlan() {
      if (session) {
        try {
          const res = await fetch("/api/study-plan");
          const data = await res.json();
          if (data.success && data.data.length > 0) {
            setStudyPlan(data.data[0]);
          }
        } catch (error) {
          console.error("Failed to fetch study plan:", error);
        }
      }
    }
    fetchPlan();
  }, [session]);

  const handleMoodSelect = (emoji: string) => {
    setModalMessage(`Neural baseline calibrated. We've adjusted your cognitive loads to match your current state.`);
    setModalOpen(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      } 
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12 pb-20"
    >
      <header className="relative">
        <div className="absolute -left-4 top-0 h-full w-1 bg-linear-to-b from-primary to-transparent rounded-full opacity-50" />
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Core Neural Link Active</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-none">
          Welcome, <span className="text-gradient drop-shadow-sm">{session?.user?.name?.split(' ')[0] || "Focus"}</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-muted-foreground font-semibold text-lg max-w-2xl leading-relaxed">
          Your cognitive performance is <span className="text-white">12% above baseline</span>. 
          Ready to initiate next high-bandwidth focus protocol?
        </motion.p>
      </header>

      {/* Stats Grid */}
      <DashboardStats stats={studyPlan.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Protocol */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
          <DailyProtocol 
            tasks={studyPlan.daily}
            onRecalibrate={() => {
              setModalMessage("Neural pathways analyzed. System is ready for a full recalibration protocol.");
              setModalOpen(true);
            }}
            onTaskAction={(msg) => {
              setModalMessage(msg.includes("Phase complete") ? msg + ". Neural XP harvested." : `Accessing deep dive protocol for: ${msg}. Digital isolation initialized.`);
              setModalOpen(true);
            }}
            onInitiateFlow={() => {
              setModalMessage("Neural flow state initiated. All background protocols suspended for maximum throughput.");
              setModalOpen(true);
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <Link href="/problems" className="block">
               <ToolActionCard 
                 title="SMART RECALL" 
                 desc="Physics Core Protocol" 
                 icon={Brain} 
                 color="primary"
               />
             </Link>
             <Link href="/focus" className="block">
               <ToolActionCard 
                 title="NEURAL PRACTICE" 
                 desc="Genetics Baseline Test" 
                 icon={Target} 
                 color="secondary"
               />
             </Link>
          </div>
        </motion.div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-8">
           <EnergyPulse onMoodSelect={handleMoodSelect} />
           <AchievementsWidget />
        </div>
      </div>
      <FocuslyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="NEURAL SYNC"
        message={modalMessage}
        type="info"
      />
    </motion.div>
  );
}

interface ToolActionCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
  color: "primary" | "secondary";
}

function ToolActionCard({ title, desc, icon: Icon, color }: ToolActionCardProps) {
  return (
    <div className="glass p-6 rounded-[2rem] flex items-center gap-5 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer group border-white/5 shadow-xl">
      <div className={cn(
        "h-14 w-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl shadow-lg", 
        color === 'primary' ? "text-primary bg-primary/10 shadow-primary/5" : "text-secondary bg-secondary/10 shadow-secondary/5"
      )}>
        <Icon className="h-7 w-7" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-black text-white uppercase tracking-wider leading-none mb-1.5">{title}</p>
        <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest">{desc}</p>
      </div>
      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
        <ArrowRight className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}









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
import { MOCK_STUDY_PLAN } from "@/data/mock";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

import { Variants } from "framer-motion";

export default function Dashboard() {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [studyPlan, setStudyPlan] = useState<any>(MOCK_STUDY_PLAN);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Clock} 
          label="Focus Hours" 
          value={`${studyPlan.stats.hoursStudied}h`} 
          sub="+12% vs week avg"
          color="primary"
          delay={1}
        />
        <StatCard 
          icon={Flame} 
          label="Focus Streak" 
          value={`${studyPlan.stats.focusStreak}`} 
          sub="Days active"
          color="secondary"
          delay={2}
        />
        <StatCard 
          icon={Trophy} 
          label="Total XP" 
          value={`${studyPlan.stats.xp.toLocaleString()}`} 
          sub="Rank: Pro Elite"
          color="primary"
          delay={3}
        />
        <StatCard 
          icon={Activity} 
          label="Cognitive Load" 
          value="Optimal" 
          sub="Ready for deep work"
          color="secondary"
          delay={4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Protocol */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
          <section className="glass-card p-10! relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-2">
                  Daily Protocol
                </h2>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-black uppercase tracking-widest">
                   <Calendar className="h-3.5 w-3.5 text-primary" /> Phase: Peak Performance
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-10 px-5 rounded-xl text-xs font-black uppercase tracking-widest gap-2">
                <Plus className="h-3.5 w-3.5" /> RECALIBRATE
              </Button>
            </div>
            
            <div className="space-y-3 relative z-10">
              {studyPlan.daily.map((task: any, i: number) => (
                <div key={i} className="flex items-center gap-6 p-5 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all cursor-pointer group/item">
                  <div className="text-xs font-black text-muted-foreground/50 w-12 tabular-nums">{task.time}</div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-white flex items-center gap-3">
                       {task.task}
                       {i === 0 && (
                         <span className="flex items-center gap-1.5 text-[9px] font-black bg-secondary/10 text-secondary px-2.5 py-1 rounded-full border border-secondary/20 uppercase tracking-tighter">
                           SYNCED
                         </span>
                       )}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1 font-black uppercase tracking-widest flex items-center gap-2">
                       <span className="h-1 w-1 rounded-full bg-primary" /> {task.type}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-secondary/10 hover:text-secondary border border-transparent hover:border-secondary/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="glow" size="xl" className="w-full mt-10 h-16 rounded-[2rem] font-black text-lg gap-3">
               INITIATE NEURAL FLOW <Zap className="h-5 w-5 fill-current" />
            </Button>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <ToolActionCard 
               title="SMART RECALL" 
               desc="Physics Core Protocol" 
               icon={Brain} 
               color="primary"
             />
             <ToolActionCard 
               title="NEURAL PRACTICE" 
               desc="Genetics Baseline Test" 
               icon={Target} 
               color="secondary"
             />
          </div>
        </motion.div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-8">
           <motion.div variants={itemVariants} className="glass-card p-8!">
              <h3 className="text-xl font-black mb-2 flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" /> Energy Pulse
              </h3>
              <p className="text-xs text-muted-foreground mb-8 font-black uppercase tracking-widest leading-relaxed">System feedback for AI optimization.</p>
              
              <div className="grid grid-cols-4 gap-3 mb-10">
                 {['😊', '😐', '😔', '🤯'].map(emoji => (
                   <button 
                    key={emoji} 
                    onClick={() => handleMoodSelect(emoji)}
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

           <motion.div variants={itemVariants} className="glass-card p-8! overflow-hidden relative">
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

function StatCard({ icon: Icon, label, value, sub, color, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, type: "spring", damping: 12 }}
      className="glass-card p-7! group hover:translate-y-[-4px]"
    >
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl", 
        color === 'primary' ? "text-primary bg-primary/10 border-primary/20 shadow-primary/10" : "text-secondary bg-secondary/10 border-secondary/20 shadow-secondary/10"
      )}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] mb-2">{label}</p>
        <p className="text-4xl font-black text-white tracking-tighter tabular-nums mb-3">{value}</p>
        <div className="flex items-center gap-2">
           <div className={cn("flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter", 
             color === 'primary' ? "bg-primary/10 text-primary border border-primary/20" : "bg-secondary/10 text-secondary border border-secondary/20")}>
              <TrendingUp className="h-2.5 w-2.5" /> {sub}
           </div>
        </div>
      </div>
    </motion.div>
  );
}

function ToolActionCard({ title, desc, icon: Icon, color }: any) {
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









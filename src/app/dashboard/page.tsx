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
    setModalMessage(`We've noted that you're feeling ${emoji} today. Focusly is adjusting your focus sessions to match your current energy levels.`);
    setModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto space-y-12"
    >
      <header className="relative">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Activity className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Neural Performance Dashboard</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] uppercase italic">
          COMMAND <br />
          <span className="text-gradient">CENTER.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">Welcome back, <span className="text-white">{session?.user?.name || "Focus User"}</span>. Your neural progress is trending upwards.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Clock} 
          label="Focus Hours" 
          value={`${studyPlan.stats.hoursStudied}h`} 
          sub="+12% this week"
          color="primary"
          delay={0}
        />
        <StatCard 
          icon={Flame} 
          label="Current Streak" 
          value={`${studyPlan.stats.focusStreak}`} 
          sub="Days active"
          color="orange"
          delay={1}
        />
        <StatCard 
          icon={Trophy} 
          label="Total XP" 
          value={`${studyPlan.stats.xp.toLocaleString()}`} 
          sub="Rank: Pro Squad"
          color="indigo"
          delay={2}
        />
        <StatCard 
          icon={Target} 
          label="Completion" 
          value="85%" 
          sub="Daily goal"
          color="emerald"
          delay={3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Schedule */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
          <section className="glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
               <Calendar className="h-40 w-40" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 relative z-10">
              <div>
                <h2 className="text-3xl font-black flex items-center gap-3 uppercase tracking-tighter italic">
                  <Brain className="h-7 w-7 text-primary" /> Today's Protocol
                </h2>
                <div className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mt-1">Synchronized with your peak performance hours</div>
              </div>
              <Button size="sm" variant="outline" className="gap-2 rounded-xl h-10 px-4 border-white/10 hover:bg-white/5 font-black uppercase text-[10px] tracking-widest">
                <Plus className="h-3.5 w-3.5" /> Modify Plan
              </Button>
            </div>
            
            <div className="space-y-3 relative z-10">
              {studyPlan.daily.map((task: any, i: number) => (
                <div key={i} className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5 relative overflow-hidden">
                  <div className="text-xs font-black text-primary sm:w-24 tracking-widest">{task.time}</div>
                  <div className="flex-1">
                    <div className="font-bold text-white flex items-center gap-3">
                       {task.task}
                       {i === 0 && (
                         <span className="flex items-center gap-1.5 text-[8px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full uppercase tracking-widest font-black border border-emerald-500/20">
                           <CheckCircle2 className="h-2.5 w-2.5" /> Completed
                         </span>
                       )}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1.5 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                      Session Type: {task.type}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all transform origin-right">
                    <Button size="icon" variant="ghost" className="h-10 w-10 text-emerald-400 hover:bg-emerald-400/10 rounded-xl"><CheckCircle2 className="h-4.5 w-4.5" /></Button>
                    <Button size="icon" variant="ghost" className="h-10 w-10 text-primary hover:bg-primary/10 rounded-xl"><ArrowRight className="h-4.5 w-4.5" /></Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="glow" size="xl" className="w-full mt-10 rounded-2xl py-8 font-black text-lg text-white hover:scale-[1.01] active:scale-95 shadow-2xl transition-all h-auto group">
               INITIALIZE FOCUS SESSION <Zap className="ml-2 h-5 w-5 fill-current group-hover:scale-125 transition-transform" />
            </Button>
          </section>

          {/* Quick Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <ToolCard 
               title="Smart Recall" 
               desc="Neural review: Physics Notes" 
               icon={Zap} 
               color="bg-orange-500" 
               accent="orange"
             />
             <ToolCard 
               title="Mock Generator" 
               desc="Biology Practice 0.4" 
               icon={Target} 
               color="bg-blue-500" 
               accent="blue"
             />
          </div>
        </motion.div>

        {/* Sidebar widgets */}
        <div className="lg:col-span-4 space-y-8">
           {/* Mental Health Widget */}
           <motion.div variants={itemVariants} className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 blur-[60px] rounded-full group-hover:blur-[80px] transition-all" />
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 uppercase tracking-tighter italic">
                <Sparkles className="h-5 w-5 text-primary" /> Energy Pulse
              </h3>
              <p className="text-sm text-muted-foreground mb-8 font-medium leading-relaxed">Log your current mental state for AI plan optimization.</p>
              
              <div className="grid grid-cols-4 gap-3 mb-10">
                 {['😊', '😐', '😔', '🤯'].map(emoji => (
                   <button 
                    key={emoji} 
                    onClick={() => handleMoodSelect(emoji)}
                    className="flex flex-col items-center justify-center h-16 rounded-2xl bg-white/5 hover:bg-white/10 text-2xl transition-all border border-white/5 hover:border-white/10 hover:-translate-y-1 active:scale-95"
                   >
                     {emoji}
                   </button>
                 ))}
              </div>

              <div className="p-5 bg-primary/10 rounded-2xl border border-primary/20 relative overflow-hidden group/tip">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/tip:opacity-20 transition-opacity">
                    <TrendingUp className="h-8 w-8 text-primary" />
                 </div>
                 <div className="text-[9px] uppercase font-black tracking-[0.2em] text-primary mb-2 flex items-center gap-1.5">
                    <Brain className="h-3 w-3" /> AI Insight
                 </div>
                 <div className="text-sm font-bold text-white leading-snug">"Your concentration peaks in 15 mins. Ready for deep work?"</div>
              </div>
           </motion.div>

           {/* Badges / Rewards */}
           <motion.div variants={itemVariants} className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-black uppercase tracking-[0.25em] text-muted-foreground">Neural Badges</h3>
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div className="flex flex-wrap gap-4">
                 {studyPlan.stats.badges.map((badge: string) => (
                   <div key={badge} className="group relative">
                      <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl grayscale group-hover:grayscale-0 transition-all cursor-help border border-white/5 hover:border-primary/50 shadow-sm hover:shadow-primary/20">
                        🏅
                      </div>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap font-black transition-all shadow-xl pointer-events-none uppercase tracking-widest z-20">
                        {badge}
                      </div>
                   </div>
                 ))}
                 <Link href="/rewards" className="h-14 w-14 rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:border-white/40 transition-all">
                    <Plus className="h-5 w-5" />
                 </Link>
              </div>
              <Button variant="link" className="p-0 mt-8 h-auto text-primary font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors" asChild>
                <Link href="/rewards">ACCESS REWARDS VAULT</Link>
              </Button>
           </motion.div>
        </div>
      </div>
      <FocuslyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Mood Logged"
        message={modalMessage}
        type="info"
      />
    </motion.div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, delay }: any) {
  const colors: any = {
    primary: "from-primary/20",
    orange: "from-orange-500/20",
    indigo: "from-indigo-500/20",
    emerald: "from-emerald-500/20"
  };

  const iconColors: any = {
    primary: "text-primary",
    orange: "text-orange-500",
    indigo: "text-indigo-500",
    emerald: "text-emerald-500"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "glass-card p-8 rounded-4xl flex flex-col justify-between group transition-all duration-500 border-white/5 hover:border-white/10 shadow-2xl overflow-hidden relative"
      )}
    >
      <div className={cn("absolute inset-0 bg-linear-to-br transition-opacity opacity-0 group-hover:opacity-100 -z-10", colors[color])} />
      
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/5 group-hover:scale-110 group-hover:border-white/10 transition-all duration-500", iconColors[color])}>
        <Icon className="h-7 w-7" />
      </div>
      
      <div>
        <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-2">{label}</div>
        <div className="text-4xl font-black text-white tracking-tighter italic">{value}</div>
        <div className="text-[10px] text-muted-foreground mt-3 font-black uppercase tracking-widest flex items-center gap-2">
          <div className={cn("h-1 w-1 rounded-full", iconColors[color].replace('text-', 'bg-'))} />
          {sub}
        </div>
      </div>
    </motion.div>
  );
}

function ToolCard({ title, desc, icon: Icon, color, accent }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass-card p-8 rounded-4xl flex items-center gap-6 hover:border-white/20 transition-all cursor-pointer group relative overflow-hidden"
    >
      <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center text-white transition-all duration-500 bg-white/5 border border-white/5 group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_20px_rgba(129,140,248,0.5)]")}>
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <div className="text-lg font-black uppercase tracking-tight italic">{title}</div>
        <div className="text-xs text-muted-foreground font-medium mt-1">{desc}</div>
      </div>
      <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
    </motion.div>
  );
}








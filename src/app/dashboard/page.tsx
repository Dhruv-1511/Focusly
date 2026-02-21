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
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-10"
    >
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">System Online</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Welcome back, <span className="text-primary">{session?.user?.name?.split(' ')[0] || "Focus"}</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl">
          Your neural progress is trending upwards. Ready to dive into your next focus session?
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          icon={Clock} 
          label="Focus Hours" 
          value={`${studyPlan.stats.hoursStudied}h`} 
          sub="+12% from last week"
          color="blue"
          delay={1}
        />
        <StatCard 
          icon={Flame} 
          label="Focus Streak" 
          value={`${studyPlan.stats.focusStreak}`} 
          sub="Days active"
          color="orange"
          delay={2}
        />
        <StatCard 
          icon={Trophy} 
          label="Total XP" 
          value={`${studyPlan.stats.xp.toLocaleString()}`} 
          sub="Rank: Pro Squad"
          color="indigo"
          delay={3}
        />
        <StatCard 
          icon={Target} 
          label="Daily Goal" 
          value="85%" 
          sub="Task completion"
          color="emerald"
          delay={4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Protocol */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-6">
          <section className="glass p-8 rounded-3xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-1">
                  Today's Protocol
                </h2>
                <p className="text-xs text-muted-foreground font-medium">Synchronized with your peak performance hours</p>
              </div>
              <Button size="sm" variant="ghost" className="h-8 text-xs font-semibold gap-2 rounded-lg hover:bg-white/5 border border-white/5">
                <Plus className="h-3 w-3" /> Edit
              </Button>
            </div>
            
            <div className="space-y-4">
              {studyPlan.daily.map((task: any, i: number) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group">
                  <div className="text-xs font-bold text-muted-foreground w-16 pt-1">{task.time}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white flex items-center gap-3">
                       {task.task}
                       {i === 0 && (
                         <span className="flex items-center gap-1.5 text-[8px] font-bold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full border border-secondary/20">
                           DONE
                         </span>
                       )}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1 font-medium">{task.type}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-secondary/10 hover:text-secondary">
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="w-full mt-8 h-14 rounded-2xl font-bold text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 gap-2">
               START FOCUS SESSION <Zap className="h-4 w-4 fill-current" />
            </Button>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <ToolActionCard 
               title="Smart Recall" 
               desc="Review Physics Notes" 
               icon={Brain} 
               color="blue"
             />
             <ToolActionCard 
               title="AI Practice" 
               desc="Bio-Genetics Quiz" 
               icon={Target} 
               color="emerald"
             />
          </div>
        </motion.div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
           <motion.div variants={itemVariants} className="glass p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Energy Pulse
              </h3>
              <p className="text-xs text-muted-foreground mb-6 font-medium">Log your current mental state for AI plan optimization.</p>
              
              <div className="grid grid-cols-4 gap-2 mb-8">
                 {['😊', '😐', '😔', '🤯'].map(emoji => (
                   <button 
                    key={emoji} 
                    onClick={() => handleMoodSelect(emoji)}
                    className="aspect-square rounded-xl bg-white/5 hover:bg-white/10 text-xl transition-all border border-white/5 hover:border-white/10 flex items-center justify-center"
                   >
                     {emoji}
                   </button>
                 ))}
              </div>

              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
                 <div className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" /> AI Suggestion
                 </div>
                 <p className="text-xs font-semibold text-white leading-relaxed">
                   "Your focus peaks in 15 mins. Optimal time for active recall."
                 </p>
              </div>
           </motion.div>

           <motion.div variants={itemVariants} className="glass p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Achievements</h3>
                <Link href="/rewards" className="text-[10px] font-bold text-primary hover:underline">View All</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                 {studyPlan.stats.badges.slice(0, 4).map((badge: string) => (
                   <div key={badge} className="h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                      🏅
                   </div>
                 ))}
                 <div className="h-12 w-12 rounded-xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 transition-colors">
                    <Plus className="h-4 w-4" />
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
      <FocuslyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Status Updated"
        message={modalMessage}
        type="info"
      />
    </motion.div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, delay }: any) {
  const colorMap: any = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    indigo: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.05 }}
      className="glass p-6 rounded-3xl border-white/5 hover:border-white/10 transition-all group"
    >
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-6 border", colorMap[color])}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
        <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        <p className="text-[10px] text-muted-foreground mt-2 font-medium flex items-center gap-1.5">
          <span className={cn("h-1 w-1 rounded-full", color === 'blue' ? 'bg-blue-500' : color === 'orange' ? 'bg-orange-500' : color === 'indigo' ? 'bg-indigo-500' : 'bg-secondary')} />
          {sub}
        </p>
      </div>
    </motion.div>
  );
}

function ToolActionCard({ title, desc, icon: Icon, color }: any) {
  const colorMap: any = {
    blue: "text-blue-500 bg-blue-500/10",
    emerald: "text-secondary bg-secondary/10"
  };

  return (
    <div className="glass p-5 rounded-2xl flex items-center gap-4 hover:border-white/10 transition-all cursor-pointer group">
      <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center transition-all", colorMap[color])}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="text-[11px] text-muted-foreground font-medium">{desc}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </div>
  );
}









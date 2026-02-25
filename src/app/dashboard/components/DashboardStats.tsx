"use client";

import { motion } from "framer-motion";
import { Clock, Flame, Trophy, Activity, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { StudyPlan } from "@/types";

interface DashboardStatsProps {
  stats: StudyPlan['stats'];
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        icon={Clock} 
        label="Focus Hours" 
        value={`${stats.hoursStudied}h`} 
        sub="+12% vs week avg"
        color="primary"
        delay={1}
      />
      <StatCard 
        icon={Flame} 
        label="Focus Streak" 
        value={`${stats.focusStreak}`} 
        sub="Days active"
        color="secondary"
        delay={2}
      />
      <StatCard 
        icon={Trophy} 
        label="Total XP" 
        value={`${stats.xp.toLocaleString()}`} 
        sub={`Rank: LVL ${stats.level}`}
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

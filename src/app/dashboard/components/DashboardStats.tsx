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
    <div className="space-y-8">
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-8! border-white/5 relative overflow-hidden group shadow-3xl"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
           <Activity className="h-32 w-32 text-primary" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Neural Activity Mesh</h3>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest leading-relaxed">Cognitive density across the last 30 circadian cycles.</p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
             <span>Low Density</span>
             <div className="flex gap-1.5">
                {[0.1, 0.3, 0.6, 0.9].map((o, i) => (
                  <div key={i} className="h-3 w-3 rounded-sm bg-primary" style={{ opacity: o }} />
                ))}
             </div>
             <span>Peak Flow</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-between">
           {Array.from({ length: 30 }).map((_, i) => {
             const opacity = Math.random() > 0.3 ? Math.random() * 0.8 + 0.2 : 0.05;
             return (
               <motion.div 
                 key={i}
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.6 + (i * 0.02) }}
                 className="relative group/cell"
               >
                  <div 
                    className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    style={{ opacity }}
                  />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest opacity-0 group-hover/cell:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl z-20">
                    Cycle {i + 1}: {(opacity * 100).toFixed(0)}% Flow
                  </div>
               </motion.div>
             );
           })}
        </div>
      </motion.div>
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

"use client";

import { motion } from "framer-motion";
import { Clock, Flame, Trophy, Activity, TrendingUp, Sparkles } from "lucide-react";
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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden group shadow-3xl"
      >
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
           <Activity className="h-48 w-48 text-primary" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <Sparkles className="h-4 w-4 text-primary fill-current" />
               <h3 className="text-xl font-bold tracking-tight">NEURAL ACTIVITY MESH</h3>
            </div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest leading-relaxed">Cognitive density tracking across latest circadian cycles.</p>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 bg-white/3 px-4 py-2 rounded-xl border border-white/5">
             <span>Low Density</span>
             <div className="flex gap-1.5">
                {[0.1, 0.3, 0.6, 0.9].map((o, i) => (
                  <div key={i} className="h-3 w-3 rounded-sm bg-primary" style={{ opacity: o }} />
                ))}
             </div>
             <span>Peak Flow</span>
          </div>
        </div>

        <div className="relative z-10 p-2 bg-black/20 rounded-2xl border border-white/5">
          <div className="flex flex-wrap gap-2 justify-between">
            {Array.from({ length: 28 }).map((_, i) => {
              const dayOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][i % 7];
              // Use a stable calculation based on index
              const pseudoRandomOpacity = ((i * 17 + 23) % 100) / 100;
              const opacity = pseudoRandomOpacity > 0.3 ? pseudoRandomOpacity * 0.8 + 0.2 : 0.05;
              return (
                <motion.div 
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (i * 0.01), type: "spring", stiffness: 200 }}
                  className="relative group/cell"
                >
                   <div 
                     className={cn(
                       "h-9 w-9 md:h-11 md:w-11 rounded-lg bg-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(129,140,248,0.3)] cursor-help border border-white/5",
                       opacity < 0.2 ? "bg-white/5" : ""
                     )}
                     style={{ opacity: opacity < 0.2 ? 1 : opacity }}
                   />
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider opacity-0 group-hover/cell:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-3xl z-30 transform -translate-y-2 group-hover/cell:translate-y-0">
                     <div className="text-primary text-[8px] mb-0.5">{dayOfWeek} • CYCLE {Math.floor(i/7) + 1}</div>
                     VAL: {(opacity * 100).toFixed(0)}% FLOW
                   </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.05, type: "spring", damping: 15 }}
      className="glass p-7 rounded-[2rem] border-white/5 group hover:border-white/10 transition-all duration-500 hover:translate-y-[-4px] flex flex-col justify-between"
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl", 
        color === 'primary' ? "text-primary bg-primary/10 border-primary/20 shadow-primary/10" : "text-secondary bg-secondary/10 border-secondary/20 shadow-secondary/10"
      )}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] mb-2">{label}</p>
        <p className="text-4xl font-bold text-white tracking-tighter tabular-nums mb-3 leading-none">{value}</p>
        <div className="flex items-center gap-2">
           <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border", 
             color === 'primary' ? "bg-primary/10 text-primary border-primary/20" : "bg-secondary/10 text-secondary border-secondary/20")}>
              <TrendingUp className="h-2.5 w-2.5" /> {sub}
           </div>
        </div>
      </div>
    </motion.div>
  );
}

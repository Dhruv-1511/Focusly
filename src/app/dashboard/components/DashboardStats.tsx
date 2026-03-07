"use client";

import { motion } from "framer-motion";
import { Clock, Flame, Trophy, Activity, TrendingUp, Sparkles, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { StudyPlan } from "@/types";

interface DashboardStatsProps {
  stats: StudyPlan['stats'];
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Clock} 
          label="Focus Hours" 
          value={`${stats.hoursStudied}h`} 
          sub="+12% VS AVG"
          color="primary"
          delay={1}
        />
        <StatCard 
          icon={Flame} 
          label="Current Streak" 
          value={`${stats.focusStreak}`} 
          sub="DAYS ACTIVE"
          color="secondary"
          delay={2}
        />
        <StatCard 
          icon={Trophy} 
          label="Cognitive XP" 
          value={`${stats.xp.toLocaleString()}`} 
          sub={`LVL ${stats.level} ELITE`}
          color="primary"
          delay={3}
        />
        <StatCard 
          icon={Activity} 
          label="Brain Load" 
          value="Optimal" 
          sub="FLOW READY"
          color="secondary"
          delay={4}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden group shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-[2s]">
           <Brain className="h-64 w-64 text-primary" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
               <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
               <h3 className="text-2xl font-black tracking-tight uppercase">Neural Activity Mesh</h3>
            </div>
            <p className="text-muted-foreground/60 text-[10px] font-bold uppercase tracking-[0.25em] leading-relaxed">Real-time cognitive density tracking across circadian windows.</p>
          </div>
          <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 bg-white/2 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
             <span>Low Bandwidth</span>
             <div className="flex gap-1.5">
                {[0.1, 0.25, 0.5, 0.75, 1].map((o, i) => (
                   <div key={i} className="h-3.5 w-3.5 rounded-sm bg-primary border border-white/5" style={{ opacity: o }} />
                ))}
             </div>
             <span className="text-primary/60">Peak Flow</span>
          </div>
        </div>

        <div className="relative z-10 p-6 bg-black/20 rounded-[2rem] border border-white/5 shadow-inner">
          <div className="grid grid-cols-7 sm:grid-cols-14 md:grid-cols-28 gap-3">
            {Array.from({ length: 28 }).map((_, i) => {
              const dayOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][i % 7];
              const pseudoRandomOpacity = ((i * 13 + 37) % 100) / 100;
              const opacity = pseudoRandomOpacity > 0.2 ? pseudoRandomOpacity * 0.8 + 0.2 : 0.08;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (i * 0.01), type: "spring", stiffness: 150, damping: 12 }}
                  className="relative group/cell"
                >
                   <div 
                     className={cn(
                       "aspect-square w-full rounded-md transition-all duration-500 hover:scale-125 hover:z-20 cursor-crosshair border border-white/[0.02]",
                       opacity < 0.2 ? "bg-white/5" : "bg-primary shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                     )}
                     style={{ opacity: opacity < 0.2 ? 1 : opacity }}
                   />
                   <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/cell:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-3xl z-30 transform -translate-y-2 group-hover/cell:translate-y-0 border border-black/10">
                     <div className="text-primary text-[8px] mb-1 leading-none">{dayOfWeek} • WINDOW {i+1}</div>
                     DENSITY: {(opacity * 100).toFixed(0)}%
                   </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em] relative z-10">
           <span>00:00 - Alpha Period</span>
           <span>12:00 - Beta Peak</span>
           <span>23:59 - Delta Recovery</span>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.08, type: "spring", damping: 18, stiffness: 100 }}
      className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-primary/20 transition-all duration-700 hover:translate-y-[-8px] flex flex-col justify-between overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
         <Icon className="h-20 w-20" />
      </div>

      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]", 
        color === 'primary' ? "text-primary bg-primary/10 border-primary/20 shadow-primary/5" : "text-secondary bg-secondary/10 border-secondary/20 shadow-secondary/5"
      )}>
        <Icon className="h-7 w-7" />
      </div>

      <div>
        <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.25em] mb-2.5">{label}</p>
        <p className="text-5xl font-black text-white tracking-tighter tabular-nums mb-5 leading-none">{value}</p>
        <div className="flex items-center">
           <div className={cn("flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-md", 
             color === 'primary' ? "bg-primary/5 text-primary border-primary/10" : "bg-secondary/5 text-secondary border-secondary/10")}>
              <TrendingUp className="h-3 w-3" /> {sub}
           </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Plus, Calendar, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudyPlan } from "@/types";

interface DailyProtocolProps {
  tasks: StudyPlan['daily'];
  onRecalibrate: () => void;
  onTaskAction: (task: string) => void;
  onInitiateFlow: () => void;
}

export function DailyProtocol({ tasks, onRecalibrate, onTaskAction, onInitiateFlow }: DailyProtocolProps) {
  return (
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
        <Button 
          size="sm" 
          variant="outline" 
          className="h-10 px-5 rounded-xl text-xs font-black uppercase tracking-widest gap-2"
          onClick={onRecalibrate}
        >
          <Plus className="h-3.5 w-3.5" /> RECALIBRATE
        </Button>
      </div>
      
      <div className="space-y-3 relative z-10">
        {tasks.map((task, i) => (
          <div 
            key={i} 
            onClick={() => onTaskAction(task.task)}
            className="flex items-center gap-6 p-5 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all cursor-pointer group/item"
          >
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
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-10 w-10 rounded-xl hover:bg-secondary/10 hover:text-secondary border border-transparent hover:border-secondary/20"
                onClick={(e) => {
                  e.stopPropagation();
                  onTaskAction(`Phase complete: ${task.task}`);
                }}
              >
                <CheckCircle2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="glow" 
        size="xl" 
        className="w-full mt-10 h-16 rounded-[2rem] font-black text-lg gap-3"
        onClick={onInitiateFlow}
      >
         INITIATE NEURAL FLOW <Zap className="h-5 w-5 fill-current" />
      </Button>
    </section>
  );
}

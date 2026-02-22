"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Play, Pause, RotateCcw, Zap, Brain, Shield } from "lucide-react";
import { FocuslyModal } from "./FocuslyModal";

export function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"focus" | "break">("focus");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", message: "", type: "info" as any });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleTimerComplete = () => {
    setIsActive(false);
    if (mode === "focus") {
      setModalData({
        title: "NEURAL SYNC COMPLETE",
        message: "Session processed. Cognitive reserves reaching threshold. Recovery protocol recommended.",
        type: "success"
      });
      setModalOpen(true);
      setMode("break");
      setTimeLeft(5 * 60);
    } else {
      setModalData({
        title: "RECOVERY COMPLETE",
        message: "Cognitive baseline restored. Ready for high-bandwidth focus session.",
        type: "info"
      });
      setModalOpen(true);
      setMode("focus");
      setTimeLeft(25 * 60);
    }
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "focus" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const totalTime = mode === "focus" ? 25 * 60 : 5 * 60;
  const progress = (timeLeft / totalTime) * 100;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-96 w-96 mb-12 flex items-center justify-center">
        {/* Progress Circle Background */}
        <div className="absolute inset-0 rounded-full border-10 border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
        
        {/* Animated Progress SVG */}
        <svg className="absolute inset-0 h-full w-full -rotate-90 drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">
          <motion.circle
            cx="192"
            cy="192"
            r="184"
            className={cn(
               "fill-none transition-colors duration-500",
               mode === 'focus' ? "stroke-primary" : "stroke-secondary"
            )}
            strokeWidth="12"
            strokeDasharray="1156"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 1156 - (1156 * progress) / 100 }}
            transition={{ duration: 0.5, ease: "linear" }}
          />
        </svg>

        {/* Dynamic Glow */}
        <div className={cn(
           "absolute inset-0 rounded-full blur-[80px] opacity-30 animate-pulse transition-colors duration-1000",
           mode === 'focus' ? "bg-primary/40" : "bg-secondary/40"
        )} />

        {/* Time Display */}
        <div className="relative text-center z-10">
          <motion.div 
            key={timeLeft}
            initial={{ scale: 0.98, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-8xl font-black text-white tracking-tighter tabular-nums drop-shadow-2xl"
          >
            {formatTime(timeLeft)}
          </motion.div>
          <div className="flex flex-col gap-1 mt-4">
             <div className={cn(
                "text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 bg-clip-text text-transparent bg-linear-to-r",
                mode === 'focus' ? "from-primary to-indigo-400" : "from-secondary to-emerald-400"
             )}>
               {mode === "focus" ? "NEURAL LINK ACTIVE" : "RECOVERY PROTOCOL"}
             </div>
             <div className="h-1 w-12 bg-white/10 rounded-full mx-auto overflow-hidden">
                <motion.div 
                   className={cn("h-full", mode === 'focus' ? "bg-primary" : "bg-secondary")}
                   animate={{ width: `${progress}%` }}
                />
             </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 relative z-10">
        <Button 
          size="icon" 
          variant="outline" 
          onClick={resetTimer}
          className="h-16 w-16 rounded-3xl border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 group transition-all"
        >
          <RotateCcw className="h-6 w-6 text-muted-foreground group-hover:text-white group-hover:-rotate-45 transition-all" />
        </Button>
        <Button 
          size="xl" 
          onClick={toggleTimer}
          className={cn(
             "h-24 px-16 rounded-3xl font-black text-2xl transition-all shadow-2xl active:scale-90 border border-white/20",
             isActive ? "bg-white/5 text-white hover:bg-white/10" : "bg-white text-black hover:scale-105"
          )}
        >
          {isActive ? <Pause className="h-10 w-10 fill-current" /> : <Play className="h-10 w-10 fill-current translate-x-1" />}
        </Button>
        <Button 
          size="icon" 
          variant="outline" 
          className="h-16 w-16 rounded-3xl border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 group transition-all"
        >
          <Shield className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-all" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-20 w-full max-w-lg">
        <div className="glass-card p-8! text-center group cursor-pointer hover:border-primary/30 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
          <Brain className="h-7 w-7 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-2">Protocol Type</div>
          <div className="text-base font-black text-white uppercase tracking-tight">Deep Work 2.0</div>
        </div>
        <div className="glass-card p-8! text-center group cursor-pointer hover:border-secondary/30 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary/20" />
          <Zap className="h-7 w-7 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-2">Output Projected</div>
          <div className="text-base font-black text-white uppercase tracking-tight">+250 Focus XP</div>
        </div>
      </div>

      <FocuslyModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        message={modalData.message}
        type={modalData.type}
        confirmLabel={mode === 'break' ? "Start Break" : "Start Focus"}
      />
    </div>
  );
}

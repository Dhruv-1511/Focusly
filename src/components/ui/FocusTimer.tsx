"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { Play, Pause, RotateCcw, Zap, Brain, Shield } from "lucide-react";

export function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"focus" | "break">("focus");
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
      alert("Focus session complete! Take a break.");
      setMode("break");
      setTimeLeft(5 * 60);
    } else {
      alert("Break complete! Ready to focus?");
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

  const progress = (timeLeft / (mode === "focus" ? 25 * 60 : 5 * 60)) * 100;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-80 w-80 mb-12 flex items-center justify-center">
        {/* Progress Circle */}
        <svg className="absolute inset-0 h-full w-full -rotate-90">
          <circle
            cx="160"
            cy="160"
            r="150"
            className="stroke-white/5 fill-none"
            strokeWidth="8"
          />
          <motion.circle
            cx="160"
            cy="160"
            r="150"
            className="stroke-primary fill-none"
            strokeWidth="8"
            strokeDasharray="942"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 942 - (942 * progress) / 100 }}
            transition={{ duration: 0.5, ease: "linear" }}
          />
        </svg>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px] opacity-20 animate-pulse" />

        {/* Time Display */}
        <div className="relative text-center">
          <motion.div 
            key={timeLeft}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl font-black text-white tracking-tighter"
          >
            {formatTime(timeLeft)}
          </motion.div>
          <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">
            {mode === "focus" ? "NEURAL SYNC ACTIVE" : "RECOVERY MODE"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Button 
          size="icon" 
          variant="outline" 
          onClick={resetTimer}
          className="h-14 w-14 rounded-2xl border-white/10 hover:bg-white/5"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button 
          size="xl" 
          onClick={toggleTimer}
          className="h-20 px-12 rounded-3xl bg-white text-black font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
        >
          {isActive ? <Pause className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current translate-x-1" />}
        </Button>
        <Button 
          size="icon" 
          variant="outline" 
          className="h-14 w-14 rounded-2xl border-white/10 hover:bg-white/5"
        >
          <Shield className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-16 w-full max-w-md">
        <div className="glass-card p-6 rounded-4xl text-center group cursor-pointer hover:border-primary/20 transition-all">
          <Brain className="h-6 w-6 text-primary mx-auto mb-3" />
          <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Session Type</div>
          <div className="text-sm font-black text-white uppercase tracking-tight">Deep Work</div>
        </div>
        <div className="glass-card p-6 rounded-4xl text-center group cursor-pointer hover:border-secondary/20 transition-all">
          <Zap className="h-6 w-6 text-secondary mx-auto mb-3" />
          <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Target Gain</div>
          <div className="text-sm font-black text-white uppercase tracking-tight">+150 XP</div>
        </div>
      </div>
    </div>
  );
}

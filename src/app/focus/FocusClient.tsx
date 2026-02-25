"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Zap, 
  ShieldAlert, 
  Music, 
  HeartPulse, 
  Coffee,
  BellOff,
  Moon,
  Timer,
  Activity,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FocusPage() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("Focus"); // Focus, Break
  const [activeTrack, setActiveTrack] = useState("Deep Space Lo-Fi");

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  const setTimerMode = (m: string, time: number) => {
    setMode(m);
    setMinutes(time);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <header className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Neural Flow State Active</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Focus <span className="text-primary italic">Zone</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl mx-auto">
          Digital isolation initialized. Your deep work session is waiting.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8">
          <section className="glass rounded-[3rem] p-12 md:p-16 flex flex-col items-center justify-center relative overflow-hidden group border-white/5 h-full">
             <AnimatePresence>
               {isActive && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1.2 }}
                   exit={{ opacity: 0 }}
                   transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
                   className="absolute inset-0 bg-primary/2 rounded-full pointer-events-none blur-3xl" 
                 />
               )}
             </AnimatePresence>

             <div className="flex gap-2 mb-12 p-1 bg-white/5 rounded-2xl border border-white/5 relative z-10">
                <button 
                   onClick={() => setTimerMode("Focus", 25)}
                   className={cn(
                     "px-6 py-2.5 rounded-xl font-bold text-xs transition-all",
                     mode === "Focus" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"
                   )}
                >
                   Deep Work
                </button>
                <button 
                   onClick={() => setTimerMode("Break", 5)}
                   className={cn(
                     "px-6 py-2.5 rounded-xl font-bold text-xs transition-all",
                     mode === "Break" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"
                   )}
                >
                   Cooldown
                </button>
             </div>

             <div className="relative mb-12 z-10">
               <div className="text-8xl md:text-[10rem] font-bold tracking-tighter tabular-nums text-white flex items-baseline leading-none">
                  {String(minutes).padStart(2, '0')}<span className={cn("text-primary/40", isActive && "animate-pulse")}>:</span>{String(seconds).padStart(2, '0')}
               </div>
             </div>

             <div className="flex items-center gap-6 relative z-10">
                <Button 
                   onClick={toggleTimer}
                   size="xl"
                   className={cn(
                     "h-16 px-10 rounded-2xl font-bold text-base transition-all shadow-xl",
                     isActive ? "bg-white/10 text-white hover:bg-white/20" : "bg-primary text-white hover:bg-primary/90"
                   )}
                >
                   {isActive ? (
                     <><Pause className="mr-2 h-5 w-5 fill-current" /> Pause</>
                   ) : (
                     <><Play className="mr-2 h-5 w-5 fill-current" /> Initialize</>
                   )}
                </Button>
                <Button 
                   onClick={resetTimer}
                   variant="ghost"
                   className="h-16 w-16 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group"
                >
                   <RotateCcw className="h-5 w-5 text-muted-foreground group-hover:text-white group-hover:rotate-180 transition-transform duration-500" />
                </Button>
             </div>

             <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50 relative z-10">
                <div className="flex items-center gap-2">
                   <BellOff className="h-3.5 w-3.5" /> DISTRACTION LOCK
                </div>
                <div className="h-1 w-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2">
                   <ShieldAlert className="h-3.5 w-3.5" /> NEURAL SHIELD
                </div>
                <div className="h-1 w-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2">
                   <Activity className="h-3.5 w-3.5" /> FLOW SYNC
                </div>
             </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                 <Music className="h-5 w-5 text-primary" /> Ambient Station
              </h3>
              <div className="space-y-2">
                 <AmbientTrack 
                   icon={Moon} 
                   name="Deep Space Lo-Fi" 
                   active={activeTrack === "Deep Space Lo-Fi"} 
                   onClick={() => setActiveTrack("Deep Space Lo-Fi")}
                 />
                 <AmbientTrack 
                   icon={Zap} 
                   name="Static Thunder" 
                   active={activeTrack === "Static Thunder"}
                   onClick={() => setActiveTrack("Static Thunder")}
                 />
                 <AmbientTrack 
                   icon={HeartPulse} 
                   name="Alpha Waves" 
                   active={activeTrack === "Alpha Waves"}
                   onClick={() => setActiveTrack("Alpha Waves")}
                 />
                 <AmbientTrack 
                   icon={Coffee} 
                   name="Cozy Cafe" 
                   active={activeTrack === "Cozy Cafe"}
                   onClick={() => setActiveTrack("Cozy Cafe")}
                 />
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                 <div className="flex items-center justify-between mb-3 text-[10px] font-bold text-muted-foreground">
                    <span className="uppercase tracking-wider">Atmospheric Intensity</span>
                    <span className="text-primary font-bold">45%</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[45%]" />
                 </div>
              </div>
           </div>

           <div className="glass p-8 rounded-3xl relative overflow-hidden flex flex-col h-full">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" /> Flow Harvest
              </h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Flow Quality</span>
                    <span className="text-lg font-bold text-white tracking-tight">Optimal</span>
                 </div>
                 <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Potential Gain</span>
                    <span className="text-lg font-bold text-primary tracking-tight">+250 XP</span>
                 </div>
              </div>
              <div className="mt-10 flex-1 flex items-end gap-1 px-1">
                 {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                   <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative h-24">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                        className="absolute bottom-0 inset-x-0 bg-primary/20 group-hover:bg-primary/40 transition-colors rounded-t-xl"
                      />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function AmbientTrack({ icon: Icon, name, active = false, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 p-3 rounded-xl border transition-all",
        active ? "bg-primary/10 border-primary/20" : "bg-white/5 border-transparent hover:bg-white/10"
      )}
    >
       <div className={cn(
         "h-10 w-10 rounded-lg flex items-center justify-center transition-all",
         active ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"
       )}>
          <Icon className="h-4 w-4" />
       </div>
       <span className={cn(
         "font-bold text-xs tracking-tight",
         active ? "text-white" : "text-muted-foreground"
       )}>{name}</span>
       {active && (
         <div className="ml-auto flex gap-0.5">
            {[1,2,3].map(i => (
              <motion.div 
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                className="w-0.5 bg-primary" 
              />
            ))}
         </div>
       )}
    </button>
  );
}



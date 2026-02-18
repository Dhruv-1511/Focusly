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
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-120px)] space-y-12">
      <header className="relative">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Timer className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Neural Flow State Active</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] uppercase italic text-white">
          FOCUS <br />
          <span className="text-gradient">ZONE.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">Digital isolation initialized. Your deep work session is waiting.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        <div className="lg:col-span-8 flex flex-col">
          <section className="glass-card rounded-[3rem] p-12 md:p-20 flex-1 flex flex-col items-center justify-center relative overflow-hidden group border-white/5">
             {/* Dynamic Background Pulse */}
             <AnimatePresence>
               {isActive && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1.2 }}
                   exit={{ opacity: 0 }}
                   transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
                   className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none blur-3xl" 
                 />
               )}
             </AnimatePresence>

             <div className="flex gap-3 mb-16 relative z-10 bg-white/5 p-1.5 rounded-2xl border border-white/5">
                <button 
                   onClick={() => setTimerMode("Focus", 25)}
                   className={cn(
                     "px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all",
                     mode === "Focus" ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:text-white"
                   )}
                >
                   Deep Work
                </button>
                <button 
                   onClick={() => setTimerMode("Break", 5)}
                   className={cn(
                     "px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all",
                     mode === "Break" ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:text-white"
                   )}
                >
                   Cooldown
                </button>
             </div>

             <div className="relative mb-16 group/timer">
               <motion.div 
                 animate={isActive ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.2 }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute inset-x-0 -bottom-8 h-1 bg-primary blur-md"
               />
               <div className="text-9xl md:text-[15rem] font-black tracking-tighter tabular-nums relative z-10 text-white flex items-baseline leading-none italic">
                  {String(minutes).padStart(2, '0')}<span className="text-primary animate-pulse">:</span>{String(seconds).padStart(2, '0')}
               </div>
             </div>

             <div className="flex gap-6 relative z-10">
                <Button 
                   onClick={toggleTimer}
                   variant={isActive ? "outline" : "glow"}
                   className={cn(
                     "h-20 px-12 rounded-2xl font-black text-xl transition-all group border-none shadow-2xl",
                     isActive ? "bg-white/10 text-white hover:bg-white/20" : "text-white"
                   )}
                >
                   {isActive ? (
                     <><Pause className="mr-3 h-6 w-6 fill-current" /> PAUSE SESSION</>
                   ) : (
                     <><Play className="mr-3 h-6 w-6 fill-current" /> INITIATE FLOW</>
                   )}
                </Button>
                <Button 
                   onClick={resetTimer}
                   variant="outline"
                   className="h-20 w-20 rounded-2xl border-white/10 hover:bg-white/5 transition-all group"
                >
                   <RotateCcw className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                </Button>
             </div>

             <div className="mt-20 flex flex-wrap justify-center gap-8 text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground relative z-10">
                <div className="flex items-center gap-2.5 group/stat">
                   <BellOff className="h-3.5 w-3.5 group-hover/stat:text-white transition-colors" /> NO DISTRACTIONS
                </div>
                <div className="hidden sm:block h-1 w-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2.5 group/stat">
                   <ShieldAlert className="h-3.5 w-3.5 text-orange-500 group-focus:animate-ping" /> SHIELD ACTIVE
                </div>
                <div className="hidden sm:block h-1 w-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2.5 group/stat">
                   <Activity className="h-3.5 w-3.5 text-emerald-500" /> NEURAL SYNC
                </div>
             </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
           {/* Ambient Station */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/10 blur-[60px] rounded-full group-hover:blur-[80px] transition-all" />
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                 <Music className="h-5 w-5 text-primary" /> SONIC WAVES
              </h3>
              <div className="space-y-3">
                 <AmbientTrack icon={Moon} name="Deep Space Lo-Fi" active={true} />
                 <AmbientTrack icon={Zap} name="Electric Thunder" />
                 <AmbientTrack icon={HeartPulse} name="Alpha Waves 432Hz" />
                 <AmbientTrack icon={Coffee} name="Cozy Rain Cafe" />
              </div>
              <div className="mt-10 pt-8 border-t border-white/5">
                 <div className="flex items-center justify-between mb-3 text-[9px] font-black uppercase tracking-widest">
                    <span className="text-muted-foreground">Output Intensity</span>
                    <span className="text-primary">45%</span>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(129,140,248,0.5)] w-[45%]" />
                 </div>
              </div>
           </div>

           {/* Stats Widget */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group bg-primary/5">
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                  <Layers className="h-5 w-5 text-primary" /> HARVEST
                </h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">FLOW QUALITY</div>
                      <div className="text-2xl font-black text-white italic uppercase tracking-tighter">OPTIMAL</div>
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">EST. REWARD</div>
                      <div className="text-2xl font-black text-primary italic uppercase tracking-tighter">+250 XP</div>
                   </div>
                </div>
                <div className="mt-12 h-24 flex items-end gap-1.5">
                   {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-white/5 rounded-lg relative overflow-hidden h-full">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 1 }}
                          className="absolute bottom-0 inset-x-0 bg-primary/40 group-hover:bg-primary transition-colors"
                        />
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function AmbientTrack({ icon: Icon, name, active = false }: any) {
  return (
    <button 
      className={cn(
        "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all group/track",
        active ? "bg-primary/20 border-primary/20" : "bg-white/5 border-transparent hover:bg-white/10"
      )}
    >
       <div className={cn(
         "h-12 w-12 rounded-xl flex items-center justify-center transition-all",
         active ? "bg-primary text-black" : "bg-white/5 text-muted-foreground group-hover/track:text-white"
       )}>
          <Icon className="h-5 w-5 fill-current" />
       </div>
       <span className={cn(
         "font-black text-[10px] uppercase tracking-widest",
         active ? "text-white" : "text-muted-foreground group-hover/track:text-white"
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

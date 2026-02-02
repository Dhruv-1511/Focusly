"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-64px)]">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Focus Zone</h1>
        <p className="text-muted-foreground">Destroy distractions. Enter deep work mode.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 flex-1">
        <div className="lg:col-span-2 flex flex-col">
          <section className="bg-card rounded-lg border p-12 md:p-20 flex-1 flex flex-col items-center justify-center relative shadow-xl overflow-hidden group">
             {/* Background Pulse */}
             {isActive && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1.2 }}
                 transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
                 className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none" 
               />
             )}

             <div className="flex gap-4 mb-12 relative z-10">
                <Button 
                   variant={mode === "Focus" ? "secondary" : "ghost"}
                   onClick={() => setTimerMode("Focus", 25)}
                   className="rounded-lg px-6 font-bold"
                >
                   Deep Work
                </Button>
                <Button 
                   variant={mode === "Break" ? "secondary" : "ghost"}
                   onClick={() => setTimerMode("Break", 5)}
                   className="rounded-lg px-6 font-bold"
                >
                   Short Break
                </Button>
             </div>

             <div className="text-9xl md:text-[12rem] font-bold tracking-tighter tabular-nums mb-12 relative z-10 text-foreground flex items-baseline">
                {String(minutes).padStart(2, '0')}<span className="text-primary">:</span>{String(seconds).padStart(2, '0')}
             </div>

             <div className="flex gap-6 relative z-10">
                <Button 
                   onClick={toggleTimer}
                   size="xl"
                   variant="secondary"
                   className="shadow-xl hover:shadow-secondary/20 scale-100 hover:scale-[1.05] transition-all flex gap-3 items-center"
                >
                   {isActive ? <Pause className="h-6 w-6 fill-primary" /> : <Play className="h-6 w-6 fill-primary" />}
                   {isActive ? "Pause Session" : "Start Focus Session"}
                </Button>
                <Button 
                   onClick={resetTimer}
                   size="xl"
                   variant="outline"
                   className="w-14 h-14 p-0 rounded-lg border-2"
                >
                   <RotateCcw className="h-6 w-6" />
                </Button>
             </div>

             <div className="mt-16 flex items-center gap-6 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground relative z-10">
                <div className="flex items-center gap-2">
                   <BellOff className="h-4 w-4" /> Notifications Off
                </div>
                <div className="h-1 w-1 rounded-lg bg-muted-foreground" />
                <div className="flex items-center gap-2">
                   <ShieldAlert className="h-4 w-4 text-orange-500" /> Site Blocker Active
                </div>
             </div>
          </section>
        </div>

        <div className="space-y-8">
           {/* Ambient Station */}
           <div className="bg-card rounded-lg border p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Music className="h-5 w-5 text-primary" /> Ambient Sound
              </h3>
              <div className="space-y-3">
                 <AmbientTrack icon={Moon} name="Deep Space Lo-Fi" active={true} />
                 <AmbientTrack icon={Zap} name="Electric Thunder" />
                 <AmbientTrack icon={HeartPulse} name="Alpha Waves 432Hz" />
                 <AmbientTrack icon={Coffee} name="Cozy Rain Cafe" />
              </div>
              <div className="mt-8 pt-6 border-t">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Volume</span>
                    <span className="text-xs font-bold">45%</span>
                 </div>
                 <div className="h-2 w-full bg-muted rounded-lg overflow-hidden">
                    <div className="h-full bg-primary w-[45%]" />
                 </div>
              </div>
           </div>

           {/* Stats Widget */}
           <div className="bg-primary rounded-lg p-8 text-primary-foreground relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">Session Stats</h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-end">
                      <div className="text-xs font-bold text-primary-foreground/50 uppercase tracking-widest">Focus Level</div>
                      <div className="text-2xl font-bold text-white">High</div>
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="text-xs font-bold text-primary-foreground/50 uppercase tracking-widest">Est. XP Reward</div>
                      <div className="text-2xl font-bold text-white">+250 XP</div>
                   </div>
                </div>
                <div className="mt-10 h-32 flex items-end gap-2">
                   {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-white/20 rounded-t-md relative group">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          className="absolute bottom-0 inset-x-0 bg-white rounded-t-md"
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
    <Button 
      variant={active ? "secondary" : "ghost"}
      className={cn(
        "w-full flex items-center justify-start gap-4 p-4 h-auto rounded-lg border transition-all",
        active ? "border-primary bg-primary/10" : "bg-muted/30 border-transparent"
      )}
    >
       <div className={cn(
         "h-10 w-10 rounded-lg flex items-center justify-center",
         active ? "bg-primary text-white" : "bg-card border shadow-sm text-muted-foreground"
       )}>
          <Icon className="h-5 w-5" />
       </div>
       <span className="font-bold text-sm">{name}</span>
       {active && <div className="ml-auto h-2 w-2 rounded-lg bg-primary animate-pulse" />}
    </Button>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}








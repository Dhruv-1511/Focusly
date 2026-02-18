"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Plus, 
  Trash2, 
  Sparkles, 
  Clock, 
  BookOpen, 
  CalendarDays,
  CheckCircle2,
  RefreshCw,
  Target,
  ArrowRight,
  TrendingUp,
  Brain,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PlannerPage() {
  const [step, setStep] = useState(1);
  const [subjects, setSubjects] = useState(["Mathematics", "Physics"]);
  const [loading, setLoading] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  const generatePlan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPlan(true);
      setStep(3);
    }, 2000);
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-5xl mx-auto space-y-12">
      <header className="relative">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Calendar className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Neural Schedule Optimizer</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] uppercase italic text-white">
          THE <br />
          <span className="text-gradient">PLANNER.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">Stop worrying about 'what' to study. Let Focusly architect your progress.</p>
      </header>

      <div className="glass-card rounded-[3rem] border-white/5 p-8 sm:p-16 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
           <TrendingUp className="h-64 w-64 text-primary" />
        </div>
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-6 mb-12">
                 <div className="h-16 w-16 rounded-2xl bg-primary text-black flex items-center justify-center text-4xl font-black italic shadow-2xl shadow-primary/20">1</div>
                 <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Subject Selection</h2>
                    <p className="text-muted-foreground text-sm font-medium">Which neural pathways are we strengthening today?</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {subjects.map((sub, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all"
                  >
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-black uppercase text-xs tracking-widest flex-1">{sub}</span>
                    <button 
                      onClick={() => setSubjects(subjects.filter((_, idx) => idx !== i))} 
                      className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
                <button 
                  onClick={() => setSubjects([...subjects, "New Subject"])}
                  className="flex items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all font-black uppercase text-[10px] tracking-widest"
                >
                  <Plus className="h-4 w-4" /> Add Subject
                </button>
              </div>
              <Button onClick={() => setStep(2)} size="xl" className="w-full h-18 rounded-2xl font-black text-lg bg-white text-black hover:scale-[1.01] transition-all">
                NEXT PROTOCOL <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative z-10"
            >
               <div className="flex items-center gap-6 mb-12">
                 <div className="h-16 w-16 rounded-2xl bg-primary text-black flex items-center justify-center text-4xl font-black italic shadow-2xl shadow-primary/20">2</div>
                 <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Temporal Configuration</h2>
                    <p className="text-muted-foreground text-sm font-medium">Define your constraints for AI throughput optimization.</p>
                 </div>
              </div>

              <div className="space-y-8 mb-16">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Deadlines</label>
                       <input type="date" className="w-full h-16 px-6 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-primary/50 font-black uppercase tracking-widest text-xs transition-all" defaultValue="2026-06-15" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Intensity Level</label>
                       <select className="w-full h-16 px-6 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-primary/50 font-black uppercase tracking-widest text-xs transition-all appearance-none cursor-pointer">
                          <option>Standard (2 hrs)</option>
                          <option selected>Advanced (4 hrs)</option>
                          <option>Professional (6 hrs)</option>
                          <option>Elite (8+ hrs)</option>
                       </select>
                    </div>
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Weak Synapses (List topics)</label>
                    <textarea 
                      placeholder="Calculus (Derivatives)&#10;Quantum Physics&#10;Organic Chemistry"
                      className="w-full h-40 p-6 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-primary/50 font-black tracking-widest text-xs resize-none transition-all"
                    ></textarea>
                 </div>
              </div>

              <div className="flex gap-4">
                 <Button variant="ghost" onClick={() => setStep(1)} className="h-18 px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest text-muted-foreground hover:text-white">BACK</Button>
                 <Button onClick={generatePlan} disabled={loading} className="flex-1 h-18 rounded-2xl font-black text-lg bg-primary text-white hover:scale-[1.01] transition-all flex items-center justify-center gap-3 border-none">
                    {loading ? <RefreshCw className="h-6 w-6 animate-spin" /> : <Sparkles className="h-6 w-6 fill-current" />}
                    {loading ? "ARCHITECTING PLAN..." : "GENERATE PROTOCOL"}
                 </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
               key="step3"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative z-10"
            >
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 border-b border-white/5 pb-10">
                  <div>
                    <div className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                       <ShieldCheck className="h-3 w-3" /> STATUS: OPTIMIZED
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">Your Neural Map</h2>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setStep(1)} className="h-10 px-5 rounded-xl border-white/10 hover:bg-white/5 font-black uppercase text-[10px] tracking-widest gap-2">
                    <RefreshCw className="h-3.5 w-3.5" /> RE-CALIBRATE
                  </Button>
               </div>
               
               <div className="space-y-12">
                  <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-8 flex items-center gap-4">
                       <div className="h-px bg-primary flex-1" />
                       <span className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" /> DAILY PROTOCOL</span>
                       <div className="h-px bg-primary flex-1" />
                    </h3>
                    <div className="space-y-3">
                       <PlanItem time="08:00 AM" task="Deep Work: Calculus (Weak Spot)" accent="bg-destructive" />
                       <PlanItem time="10:00 AM" task="Pomodoro Break (Light Walk)" accent="bg-secondary" />
                       <PlanItem time="10:30 AM" task="Active Recall: Physics Formulas" accent="bg-primary" />
                       <PlanItem time="12:00 PM" task="Quick Quiz: Thermodynamics" accent="bg-orange-500" />
                    </div>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 flex items-center gap-3">
                           <CalendarDays className="h-4 w-4 text-primary" /> Key Milestones
                        </h3>
                        <div className="space-y-2">
                           <Milestone label="Mock Test 1" date="June 2nd" type="Practice" />
                           <Milestone label="Final Revision" date="June 12th" type="Review" />
                           <Milestone label="EXAM DAY" date="June 15th" type="Event" highlighted />
                        </div>
                     </section>

                     <div className="p-10 bg-linear-to-br from-primary to-indigo-600 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-white/10 opacity-50 group-hover:rotate-6 transition-transform">
                           <Brain className="h-24 w-24" />
                        </div>
                        <h4 className="font-black text-xl mb-6 flex items-center gap-3 uppercase tracking-tighter italic">
                           <Sparkles className="h-6 w-6 fill-current" /> AI Insights
                        </h4>
                        <div className="space-y-5">
                           <div className="flex gap-4">
                              <CheckCircle2 className="h-5 w-5 shrink-0" />
                              <p className="text-sm font-medium leading-relaxed">Prioritize Calculus at 08:00 AM. Brain plasticity is max during this window.</p>
                           </div>
                           <div className="flex gap-4">
                              <CheckCircle2 className="h-5 w-5 shrink-0" />
                              <p className="text-sm font-medium leading-relaxed">Physics retention will increase 15% if reviewed before 10 PM tonight.</p>
                           </div>
                        </div>
                        <Button className="w-full mt-10 h-16 rounded-2xl bg-white text-primary hover:bg-white hover:scale-[1.02] shadow-xl font-black uppercase text-[10px] tracking-widest transition-all">
                           EXPORT PROTOCOL TO CALENDAR
                        </Button>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function PlanItem({ time, task, accent }: any) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-all group relative overflow-hidden"
    >
       <div className={cn("absolute left-0 top-0 bottom-0 w-1", accent)} />
       <div className="text-[10px] font-black text-primary w-20 tracking-widest">{time}</div>
       <div className="font-black uppercase text-xs tracking-tighter flex-1">{task}</div>
       <Button size="icon" variant="ghost" className="h-10 w-10 text-muted-foreground hover:text-white opacity-0 group-hover:opacity-100 rounded-xl transition-all">
          <ArrowRight className="h-4 w-4" />
       </Button>
    </motion.div>
  );
}

function Milestone({ label, date, type, highlighted = false }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-6 rounded-2xl transition-all",
      highlighted ? "bg-primary/10 border border-primary/20 shadow-lg" : "border-b border-white/5 hover:bg-white/5"
    )}>
       <div>
          <div className="text-xs font-black uppercase tracking-tight">{label}</div>
          <div className="text-[9px] text-muted-foreground uppercase font-black tracking-widest mt-1">{type}</div>
       </div>
       <div className={cn("text-xs font-black uppercase tracking-widest", highlighted ? "text-primary" : "text-white")}>{date}</div>
    </div>
  );
}






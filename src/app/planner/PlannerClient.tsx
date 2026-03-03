"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  Sparkles, 
  Clock, 
  BookOpen, 
  CalendarDays,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  TrendingUp,
  Brain,
  ShieldCheck,
  Save,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FocuslyModal } from "@/components/ui/FocuslyModal";
import { IStudyTask } from "@/models/StudyPlan";

export default function PlannerPage() {
  const [step, setStep] = useState(1);
  const [subjects, setSubjects] = useState(["Mathematics", "Physics"]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<IStudyTask[]>([]);
  const [modal, setModal] = useState({ open: false, title: "", message: "", type: "info" as "info" | "success" | "warning" });

  const showFeedback = (title: string, message: string, type: "info" | "success" | "warning" = "info") => {
    setModal({ open: true, title, message, type });
  };

  const generatePlan = () => {
    setLoading(true);
    // Simulate complex AI processing
    setTimeout(() => {
      const mockPlan: IStudyTask[] = [
        { time: "08:00 AM", task: `Deep Work: ${subjects[0] || 'Core Subject'} (Review)`, type: "Focus" },
        { time: "10:00 AM", task: `Active Recall: ${subjects[1] || 'Secondary Subject'} Concepts`, type: "Focus" },
        { time: "11:30 AM", task: "Neural Cooldown & Hydration", type: "Break" },
        { time: "02:00 PM", task: "Mock Assessment: Full Battery", type: "Mock" },
        { time: "04:30 PM", task: "Pattern Recognition & Revision", type: "Revision" },
      ];
      setGeneratedPlan(mockPlan);
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const saveToDatabase = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/study-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toISOString().split('T')[0],
          daily: generatedPlan
        })
      });

      const data = await res.json();
      if (data.success) {
        showFeedback("SYNC COMPLETE", "Your neural optimization protocol has been recorded to the central database.", "success");
      } else {
        throw new Error(data.error || "Failed to save protocol");
      }
    } catch (error) {
      showFeedback("SYNC FAILURE", (error as Error).message, "warning");
    } finally {
      setSaving(false);
    }
  };

  const steps = [
    { number: 1, name: "Subjects" },
    { number: 2, name: "Calibrate" },
    { number: 3, name: "Optimize" }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Schedule Engine</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Optimization <span className="text-primary italic">Protocol</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          Stop worrying about 'what' to study. Let Focusly architect your neural progress map based on your cognitive load.
        </p>
      </header>

      {/* Step Progress Indicator */}
      <div className="flex items-center justify-between max-w-xs mx-auto mb-8 px-4 relative">
         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 -z-10" />
         <div 
           className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 -z-10 transition-all duration-500 ease-out" 
           style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
         />
         {steps.map((s) => (
            <div key={s.number} className="flex flex-col items-center gap-2">
               <div className={cn(
                 "h-10 w-10 rounded-full flex items-center justify-center font-black text-xs transition-all duration-500",
                 step >= s.number 
                   ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" 
                   : "bg-card border border-white/10 text-muted-foreground"
               )}>
                  {step > s.number ? <CheckCircle2 className="h-5 w-5" /> : s.number}
               </div>
               <span className={cn(
                 "text-[9px] font-black uppercase tracking-widest transition-colors duration-500",
                 step >= s.number ? "text-primary" : "text-muted-foreground/60"
               )}>
                  {s.name}
               </span>
            </div>
         ))}
      </div>

      <div className="glass rounded-[2rem] border-white/5 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <TrendingUp className="h-48 w-48 text-primary" />
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
              <div className="flex items-center gap-5 mb-10">
                 <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">1</div>
                 <div>
                    <h2 className="text-2xl font-bold">Subject Selection</h2>
                    <p className="text-muted-foreground text-xs font-medium">Which neural pathways are we strengthening today?</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {subjects.map((sub, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all"
                  >
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-sm flex-1">{sub}</span>
                    <button 
                      onClick={() => setSubjects(subjects.filter((_, idx) => idx !== i))} 
                      className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                ))}
                <button 
                  onClick={() => setSubjects([...subjects, "New Subject"])}
                  className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all font-bold text-[11px] uppercase tracking-wide"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Subject
                </button>
              </div>
              <Button onClick={() => setStep(2)} className="w-full h-14 rounded-2xl font-bold text-base bg-white text-black hover:bg-neutral-200 transition-all">
                Next <ArrowRight className="ml-2 h-4 w-4" />
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
               <div className="flex items-center gap-5 mb-10">
                 <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">2</div>
                 <div>
                    <h2 className="text-2xl font-bold">Configuration</h2>
                    <p className="text-muted-foreground text-xs font-medium">Define your constraints for AI throughput optimization.</p>
                 </div>
              </div>

              <div className="space-y-6 mb-10">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Deadline</label>
                       <input type="date" className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white outline-none focus:border-primary/50 font-semibold text-sm transition-all" defaultValue="2026-06-15" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Intensity</label>
                       <select className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white outline-none focus:border-primary/50 font-semibold text-sm transition-all appearance-none cursor-pointer">
                          <option>Standard (2 hrs)</option>
                          <option defaultValue="Advanced (4 hrs)">Advanced (4 hrs)</option>
                          <option>Professional (6 hrs)</option>
                          <option>Elite (8+ hrs)</option>
                       </select>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Knowledge Gaps</label>
                    <textarea 
                      placeholder="List topics you find challenging (e.g. Organic Chemistry, Calculus Derivatives)"
                      className="w-full h-32 p-4 rounded-xl border border-white/10 bg-white/5 text-white outline-none focus:border-primary/50 font-medium text-sm resize-none transition-all placeholder:text-muted-foreground/40"
                    ></textarea>
                 </div>
              </div>

              <div className="flex gap-4">
                 <Button variant="ghost" onClick={() => setStep(1)} className="h-14 px-8 rounded-2xl font-bold text-xs uppercase tracking-widest text-muted-foreground hover:text-white">Back</Button>
                 <Button onClick={generatePlan} disabled={loading} className="flex-1 h-14 rounded-2xl font-bold text-base bg-primary text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    {loading ? <RefreshCw className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5 fill-current" />}
                    {loading ? "Generating..." : "Finalize Protocol"}
                 </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
               key="step3"
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative z-10"
            >
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6 pb-8 border-b border-white/5">
                  <div>
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-wider mb-2 flex items-center gap-2">
                       <ShieldCheck className="h-3 w-3" /> Status: Optimized
                    </div>
                    <h2 className="text-3xl font-bold">Neural Schedule</h2>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="h-9 px-4 rounded-lg border border-white/5 hover:bg-white/5 font-bold text-[10px] tracking-wider gap-2">
                      <RefreshCw className="h-3 w-3" /> Re-Calibrate
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={saveToDatabase} 
                      disabled={saving}
                      className="h-9 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[10px] tracking-wider gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      {saving ? <Loader2 className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                      Sync Protocol
                    </Button>
                  </div>
               </div>
               
               <div className="space-y-10">
                  <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-4">
                       <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Daily Schedule</span>
                       <div className="h-px bg-white/5 flex-1" />
                    </h3>
                    <div className="space-y-2">
                       {generatedPlan.map((item, idx) => (
                          <PlanItem 
                            key={idx}
                            time={item.time} 
                            task={item.task} 
                            type={item.type}
                            color={item.type === 'Focus' ? 'bg-primary' : item.type === 'Break' ? 'bg-secondary' : item.type === 'Revision' ? 'bg-emerald-500' : 'bg-red-500'} 
                            onClick={() => showFeedback("PROTOCOL INITIATED", `Commencing ${item.task} session. Digital isolation active.`, "success")} 
                          />
                       ))}
                    </div>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                           <CalendarDays className="h-4 w-4 text-primary" /> Milestones
                        </h3>
                        <div className="space-y-px glass rounded-2xl overflow-hidden">
                           <Milestone label="Mock Assessment" date="Jun 02" type="Practice" />
                           <Milestone label="Final Revision" date="Jun 12" type="Review" />
                           <Milestone label="Exam Protocol" date="Jun 15" type="Critical" highlighted />
                        </div>
                     </section>

                     <div className="p-8 bg-primary/10 rounded-3xl border border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 text-primary/5 group-hover:scale-110 transition-transform">
                           <Brain className="h-20 w-20" />
                        </div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                           AI Guidance
                        </h4>
                        <div className="space-y-4">
                           <div className="flex gap-3">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <p className="text-xs font-semibold text-white/80 leading-relaxed">Prioritize the morning focus window. Brain plasticity is max during this cycle.</p>
                           </div>
                           <div className="flex gap-3">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <p className="text-xs font-semibold text-white/80 leading-relaxed">Subject retention will increase 15% if reviewed before 10 PM tonight.</p>
                           </div>
                        </div>
                        <Button 
                          className="w-full mt-8 h-12 rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold text-xs"
                          onClick={() => showFeedback("SYNC SUCCESS", "Neural schedule has been broadcast to all your linked calendar protocols.", "success")}
                        >
                           Sync to Calendar
                        </Button>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <FocuslyModal 
        isOpen={modal.open} 
        onClose={() => setModal({ ...modal, open: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
}

interface PlanItemProps {
  time: string;
  task: string;
  type: string;
  color: string;
  onClick: () => void;
}

function PlanItem({ time, task, color, onClick }: PlanItemProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-transparent hover:border-white/5 transition-all group relative overflow-hidden cursor-pointer"
    >
       <div className={cn("absolute left-0 top-0 bottom-0 w-1", color)} />
       <div className="text-[11px] font-bold text-muted-foreground w-20">{time}</div>
       <div className="font-semibold text-sm flex-1">{task}</div>
       <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all pr-2" />
    </motion.div>
  );
}

function Milestone({ label, date, type, highlighted = false }: { label: string, date: string, type: string, highlighted?: boolean }) {
  return (
    <div className={cn(
      "flex items-center justify-between p-4 px-6 transition-all",
      highlighted ? "bg-primary text-white" : "hover:bg-white/5 border-b border-white/5 last:border-0"
    )}>
       <div>
          <div className="text-sm font-bold">{label}</div>
          <div className={cn("text-[9px] font-bold uppercase tracking-wider", highlighted ? "text-white/70" : "text-muted-foreground")}>{type}</div>
       </div>
       <div className="text-[11px] font-bold">{date}</div>
    </div>
  );
}

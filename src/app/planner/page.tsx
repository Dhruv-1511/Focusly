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
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">AI Study Planner</h1>
        <p className="text-muted-foreground">Stop worrying about 'what' to study. Just follow the plan.</p>
      </header>

      <div className="bg-card rounded-lg border shadow-sm p-8 md:p-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <span className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">1</span>
                 What subjects are you focusing on?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {subjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border group">
                    <span className="font-bold flex-1">{sub}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setSubjects(subjects.filter((_, idx) => idx !== i))} 
                      className="text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button 
                  variant="outline"
                  onClick={() => setSubjects([...subjects, "New Subject"])}
                  className="h-auto py-4 rounded-lg border-2 border-dashed border-muted text-muted-foreground hover:border-primary hover:text-primary transition-all font-bold text-sm bg-transparent"
                >
                  <Plus className="h-4 w-4" /> Add Subject
                </Button>
              </div>
              <Button onClick={() => setStep(2)} size="xl" className="w-full">
                Continue to Dates & Strength
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
               <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <span className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">2</span>
                 Exam details & Time availability
              </h2>
              <div className="space-y-6 mb-12">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                       <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Exam Date</label>
                       <input type="date" className="w-full h-14 px-4 rounded-lg border bg-muted/20 outline-none focus:ring-2 focus:ring-primary font-bold" defaultValue="2026-06-15" />
                    </div>
                    <div>
                       <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Daily Study Hours</label>
                       <select className="w-full h-14 px-4 rounded-lg border bg-muted/20 outline-none focus:ring-2 focus:ring-primary font-bold">
                          <option>2 Hours</option>
                          <option selected>4 Hours</option>
                          <option>6 Hours</option>
                          <option>Hardcore (8+ hrs)</option>
                       </select>
                    </div>
                 </div>
                 <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Weak Topics (One per line)</label>
                    <textarea 
                      placeholder="Calculus (Derivatives)&#10;Quantum Physics&#10;Organic Chemistry"
                      className="w-full h-32 p-4 rounded-lg border bg-muted/20 outline-none focus:ring-2 focus:ring-primary font-bold resize-none"
                    ></textarea>
                 </div>
              </div>
              <div className="flex gap-4">
                 <Button variant="ghost" size="lg" onClick={() => setStep(1)} className="font-bold">Back</Button>
                 <Button onClick={generatePlan} disabled={loading} size="xl" variant="secondary" className="flex-1 flex items-center justify-center gap-3">
                    {loading ? <RefreshCw className="h-6 w-6 animate-spin" /> : <Sparkles className="h-6 w-6 fill-primary" />}
                    {loading ? "Analyzing Syllabus..." : "Generate My Plan"}
                 </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
               key="step3"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
            >
               <div className="flex items-center justify-between mb-8 border-b pb-6">
                  <div>
                    <div className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-1">Status: Optimized</div>
                    <h2 className="text-3xl font-bold">Your Dynamic Plan</h2>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setStep(1)} className="gap-2 font-bold mb-auto">
                    <RefreshCw className="h-4 w-4" /> Reset
                  </Button>
               </div>
               
               <div className="space-y-8">
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                       <Clock className="h-4 w-4 text-primary" /> Daily Schedule (Next 24h)
                    </h3>
                    <div className="space-y-3">
                       <PlanItem time="08:00 AM" task="Deep Focus: Calculus (Weak Spot)" color="bg-red-500" />
                       <PlanItem time="10:00 AM" task="Pomodoro Break (Light Walk)" color="bg-green-500" />
                       <PlanItem time="10:30 AM" task="Active Recall: Physics Formulas" color="bg-blue-500" />
                       <PlanItem time="12:00 PM" task="Quick Quiz: Thermodynamics" color="bg-orange-500" />
                    </div>
                  </section>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t">
                     <section>
                       <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-purple-600" /> Key Milestones
                       </h3>
                       <div className="space-y-4">
                          <Milestone label="Mock Test 1" date="June 2nd" type="Practice" />
                          <Milestone label="Final Revision" date="June 12th" type="Review" />
                          <Milestone label="EXAM DAY" date="June 15th" type="Event" />
                       </div>
                     </section>
                     <div className="p-8 bg-primary rounded-lg text-primary-foreground">
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                           <Sparkles className="h-5 w-5" /> AI Strategy Tips
                        </h4>
                        <ul className="text-sm space-y-4 text-primary-foreground/90 font-medium">
                           <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Focus on Calculus early morning when brain power is max.</li>
                           <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Your Physics retention is 20% higher in the evening.</li>
                        </ul>
                        <Button variant="secondary" className="w-full mt-8 bg-white text-primary hover:bg-white/90">Save Plan to Calendar</Button>
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

function PlanItem({ time, task, color }: any) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-all group">
       <div className="text-xs font-bold text-muted-foreground w-16">{time}</div>
       <div className={`h-2 w-2 rounded-lg ${color}`} />
       <div className="font-bold flex-1">{task}</div>
       <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100"><Plus className="h-4 w-4" /></Button>
    </div>
  );
}

function Milestone({ label, date, type }: any) {
  return (
    <div className="flex items-center justify-between p-3 border-b last:border-0 border-dashed">
       <div>
          <div className="text-sm font-bold">{label}</div>
          <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{type}</div>
       </div>
       <div className="text-sm font-bold text-primary">{date}</div>
    </div>
  );
}





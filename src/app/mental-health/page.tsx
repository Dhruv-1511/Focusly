"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Wind, 
  Brain, 
  Moon, 
  Sparkles, 
  AlertTriangle,
  Smile,
  Frown,
  Meh,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MentalHealthPage() {
  const handleSOS = () => {
    console.log("SOS Mode Activated - Calm sequence starting...");
    alert("SOS Mode Activated: Please take a deep breath. 4 seconds inhale, 7 seconds hold, 8 seconds exhale.");
  };

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Student Wellness</h1>
        <p className="text-muted-foreground">Exams are temporary. Your mental health is permanent.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
           {/* Mood Checker */}
           <section className="bg-card rounded-3xl border shadow-sm p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                 <h2 className="text-3xl font-bold mb-4">Weekly Mood Check</h2>
                 <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
                    How have you felt about your progress this week? We use this to adjust the difficulty of your AI study plan.
                 </p>
                 <div className="flex justify-between max-w-sm">
                    <MoodButton emoji="🤩" label="Great" />
                    <MoodButton emoji="😊" label="Good" />
                    <MoodButton emoji="😐" label="Okay" />
                    <MoodButton emoji="😔" label="Stressed" />
                    <MoodButton emoji="🤯" label="Burned Out" />
                 </div>
              </div>
              <div className="w-full md:w-64 aspect-square bg-muted/30 rounded-2xl border flex flex-col items-center justify-center p-6 text-center shadow-inner">
                 <div className="h-20 w-20 rounded-full bg-secondary text-white flex items-center justify-center text-4xl mb-4 shadow-lg shadow-secondary/20 border-4 border-white">
                    😊
                 </div>
                 <div className="text-sm font-bold mb-1 uppercase tracking-widest text-primary">Current State</div>
                 <div className="text-xs text-muted-foreground font-bold">"Stay consistent. You're doing great!"</div>
              </div>
           </section>

           {/* Burnout Alert */}
           <section className="bg-destructive text-destructive-foreground rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                 <div className="h-24 w-24 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 animate-pulse border border-white/20">
                    <AlertTriangle className="h-12 w-12" />
                 </div>
                 <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">AI Safety System</div>
                    <h2 className="text-3xl font-bold mb-4 leading-tight">Burnout Alert Detected</h2>
                    <p className="text-lg font-medium opacity-90 mb-8 leading-relaxed">
                       You've clocked in 45 hours of deep focus this week with zero breaks. 
                       Your logic-retention score is dropping. We recommend a 24h digital detox.
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <Button size="lg" className="bg-white text-destructive hover:bg-white/90 font-bold text-lg shadow-lg" onClick={() => console.log("Light plan activated")}>Activate Light Plan 🍃</Button>
                       <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 uppercase tracking-widest text-xs font-bold" onClick={() => console.log("Burnout alert dismissed")}>Dismiss Alert</Button>
                    </div>
                 </div>
              </div>
              <AlertTriangle className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/5 -rotate-12" />
           </section>

           {/* Relaxation Tools */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RelaxationCard 
                 icon={Wind} 
                 title="Breathing Guide" 
                 desc="4-7-8 technique for instant exam anxiety relief."
                 color="bg-blue-500"
              />
              <RelaxationCard 
                 icon={Brain} 
                 title="Focus Meditation" 
                 desc="Guided 5-minute sessions to clear brain fog."
                 color="bg-purple-500"
              />
           </div>
        </div>

        <div className="space-y-8">
           {/* Anxiety Tool Widget */}
           <div className="bg-card rounded-2xl border p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Sparkles className="h-5 w-5 text-orange-500" /> Exam Anxiety SOS
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed">Feeling overwhelmed? Push the SOS button for a 2-minute calm-down sequence.</p>
              <Button size="xl" className="w-full bg-orange-500 text-white hover:bg-orange-600 shadow-xl shadow-orange-500/20 group" onClick={handleSOS}>
                 Launch SOS Mode <Zap className="ml-2 h-5 w-5 group-hover:fill-white transition-all" />
              </Button>
           </div>

           {/* Affirmations */}
           <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden group cursor-pointer" onClick={() => console.log("New affirmation generated")}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-70">Daily Affirmation</h3>
              <p className="text-2xl font-bold leading-tight mb-4">
                 "One bad mark does not define my intelligence or my future. I am learning and growing every day."
              </p>
              <Button variant="ghost" className="p-0 text-white font-bold h-auto hover:bg-transparent flex gap-2 items-center group-hover:translate-x-1 transition-transform">
                 Generate New <ArrowRight className="h-4 w-4" />
              </Button>
           </div>

           {/* Sleep Tracking Placeholder */}
           <div className="bg-card rounded-2xl border p-8 border-dashed flex flex-col items-center text-center">
              <Moon className="h-10 w-10 text-muted-foreground mb-4" />
              <div className="font-bold mb-1">Sleep Tracking</div>
              <p className="text-xs text-muted-foreground">Coming in future update. Sleep is the ultimate study hack.</p>
           </div>
        </div>
      </div>
    </div>
  );
}

function MoodButton({ emoji, label }: { emoji: string; label: string }) {
  return (
    <Button 
      variant="ghost" 
      className="flex flex-col items-center gap-2 h-auto p-2 group hover:bg-primary/5 rounded-xl transition-all"
      onClick={() => console.log(`Mood selected: ${label}`)}
    >
       <div className="h-14 w-14 rounded-2xl bg-muted/50 border flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-primary/10 transition-all shadow-sm">
          {emoji}
       </div>
       <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{label}</span>
    </Button>
  );
}

function RelaxationCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div 
      className="bg-card p-8 rounded-2xl border shadow-sm hover:border-primary transition-all cursor-pointer group hover:shadow-lg"
      onClick={() => console.log(`Opening guide: ${title}`)}
    >
       <div className={`${color} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
          <Icon className="h-6 w-6" />
       </div>
       <h3 className="text-xl font-bold mb-3">{title}</h3>
       <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">{desc}</p>
       <div className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
          Open Guide <ArrowRight className="h-4 w-4" />
       </div>
    </div>
  );
}





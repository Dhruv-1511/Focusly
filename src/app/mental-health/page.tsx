"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Wind, 
  Brain, 
  Moon, 
  Sparkles, 
  AlertTriangle,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MentalHealthPage() {
  const handleSOS = () => {
    console.log("SOS Mode Activated - Calm sequence starting...");
    alert("SOS Mode Activated: Please take a deep breath. 4 seconds inhale, 7 seconds hold, 8 seconds exhale.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              Wellness & Balance
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-foreground leading-[0.9]">
              Exams are temporary.<br />
              <span className="text-gradient">Health is permanent.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              A balanced mind is your ultimate study tool. Monitor your energy, track your mood, and prevent burnout.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Mood Checker */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-[48px] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center"
            >
               <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Weekly Mood Check</h2>
                  <p className="text-muted-foreground text-lg font-medium mb-10 leading-relaxed">
                     How have you felt about your progress this week? We use this to adjust the difficulty of your AI study plan.
                  </p>
                  <div className="flex flex-wrap justify-between gap-4 max-w-sm">
                     <MoodButton emoji="🤩" label="Great" color="text-yellow-500" />
                     <MoodButton emoji="😊" label="Good" color="text-green-500" />
                     <MoodButton emoji="😐" label="Okay" color="text-blue-500" />
                     <MoodButton emoji="😔" label="Stressed" color="text-orange-500" />
                     <MoodButton emoji="🤯" label="Burned Out" color="text-red-500" />
                  </div>
               </div>
               <div className="w-full md:w-64 aspect-square bg-muted/30 rounded-[32px] border flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-24 w-24 rounded-full bg-secondary text-white flex items-center justify-center text-4xl mb-6 shadow-2xl shadow-secondary/30 border-8 border-white group-hover:scale-110 transition-transform duration-500">
                     😊
                  </div>
                  <div className="text-xs font-black mb-1 uppercase tracking-[0.2em] text-primary relative z-10">Current State</div>
                  <div className="text-sm text-muted-foreground font-black leading-tight relative z-10">"STAY CONSISTENT. YOU'RE DOING GREAT!"</div>
               </div>
            </motion.section>

            {/* Burnout Alert */}
            <motion.section 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-destructive text-destructive-foreground rounded-[48px] p-12 md:p-16 shadow-[0_40px_80px_-15px_rgba(239,68,68,0.3)] relative overflow-hidden group"
            >
               <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
                  <div className="h-28 w-28 rounded-[32px] bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 animate-pulse border border-white/20">
                     <AlertTriangle className="h-14 w-14" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                     <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">AI SAFETY SYSTEM</div>
                     <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">Burnout Alert Detected</h2>
                     <p className="text-xl font-medium opacity-90 mb-10 leading-relaxed max-w-2xl">
                        You've clocked in 45 hours of deep focus this week with zero breaks. 
                        We recommend a 24h digital detox to restore your mental clarity.
                     </p>
                     <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                        <Button size="xl" className="h-16 px-10 bg-white text-destructive hover:bg-white/95 font-black text-lg rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95" onClick={() => console.log("Light plan activated")}>
                          ACTIVATE LIGHT PLAN 🍃
                        </Button>
                        <Button size="xl" variant="ghost" className="text-white hover:bg-white/10 font-black tracking-widest text-xs uppercase rounded-2xl" onClick={() => console.log("Burnout alert dismissed")}>
                          Dismiss Alert
                        </Button>
                     </div>
                  </div>
               </div>
               <AlertTriangle className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] text-white/5 -rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
            </motion.section>

            {/* Relaxation Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <RelaxationCard 
                  icon={Wind} 
                  title="Breathing Guide" 
                  desc="Scientific 4-7-8 technique for instant exam anxiety relief and heart rate variability."
                  color="bg-blue-500"
               />
               <RelaxationCard 
                  icon={Brain} 
                  title="Focus Meditation" 
                  desc="High-performance guided 5-minute sessions to clear brain fog and reset focus."
                  color="bg-purple-500"
               />
            </div>
          </div>

          <div className="space-y-8">
            {/* Anxiety Tool Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-[40px] p-10 shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3 relative z-10">
                  <Sparkles className="h-6 w-6 text-orange-500" /> Anxiety SOS
               </h3>
               <p className="text-muted-foreground text-lg font-medium mb-10 leading-relaxed relative z-10">Feeling overwhelmed? Push for a 2-minute science-backed calm-down sequence.</p>
               <Button size="xl" className="w-full h-20 bg-orange-500 text-white hover:bg-orange-600 rounded-3xl shadow-2xl shadow-orange-500/30 group relative z-10 font-black text-xl" onClick={handleSOS}>
                  LAUNCH SOS MODE <Zap className="ml-3 h-6 w-6 group-hover:fill-white transition-all animate-pulse" />
               </Button>
            </motion.div>

            {/* Affirmations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-foreground text-background rounded-[40px] p-12 relative overflow-hidden group cursor-pointer shadow-2xl" 
              onClick={() => console.log("New affirmation generated")}
            >
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-50">DAILY AFFIRMATION</h3>
               <p className="text-3xl font-black leading-tight mb-8 tracking-tight group-hover:text-primary transition-colors">
                  "One bad mark does not define my intelligence or my future. I am learning and growing every day."
               </p>
               <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] group-hover:translate-x-3 transition-transform">
                  NEW AFFIRMATION <ArrowRight className="h-4 w-4 text-primary" />
               </div>
               <HeartPulse className="absolute bottom-[-20px] right-[-20px] h-48 w-48 text-white/5 opacity-20 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </motion.div>

            {/* Sleep Tracking Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-[40px] p-12 border-dashed border-4 flex flex-col items-center text-center group"
            >
               <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                 <Moon className="h-10 w-10 text-muted-foreground" />
               </div>
               <div className="text-2xl font-black mb-2 tracking-tight">Sleep Tracking</div>
               <p className="text-muted-foreground text-sm font-medium leading-relaxed">Coming soon. Sleep is the ultimate study hack for memory consolidation.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoodButton({ emoji, label, color }: { emoji: string; label: string; color: string }) {
  return (
    <Button 
      variant="ghost" 
      className="flex flex-col items-center gap-4 h-auto p-4 group hover:bg-white rounded-[24px] transition-all shadow-none hover:shadow-xl"
      onClick={() => console.log(`Mood selected: ${label}`)}
    >
       <div className="h-20 w-20 rounded-[20px] bg-muted/30 border border-transparent group-hover:border-border flex items-center justify-center text-4xl group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">
          {emoji}
       </div>
       <span className={cn("text-[10px] uppercase font-black tracking-[0.2em] transition-colors", color)}>{label}</span>
    </Button>
  );
}

function RelaxationCard({ icon: Icon, title, desc, color }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass p-12 rounded-[48px] border-2 shadow-sm hover:border-primary transition-all cursor-pointer group hover:shadow-2xl relative overflow-hidden"
      onClick={() => console.log(`Opening guide: ${title}`)}
    >
       <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
       <div className={`${color} h-16 w-16 rounded-[20px] flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform shadow-2xl relative z-10`}>
          <Icon className="h-8 w-8" />
       </div>
       <h3 className="text-3xl font-black mb-4 tracking-tight relative z-10">{title}</h3>
       <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-10 relative z-10">{desc}</p>
       <div className="text-sm font-black text-primary flex items-center gap-3 group-hover:gap-5 transition-all relative z-10 uppercase tracking-widest">
          START GUIDE <ArrowRight className="h-5 w-5" />
       </div>
    </motion.div>
  );
}

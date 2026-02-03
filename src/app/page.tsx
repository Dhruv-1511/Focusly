"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  Brain, 
  Zap,
  Sparkles,
  Target,
  ChevronRight,
  Star,
  Layers,
  MousePointer2,
  Users,
  Clock,
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const PROBLEM_CHIPS = ["Focus Issues", "Memory Loss", "Procrastination", "Exam Anxiety", "Time Management"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen text-white">
      <div className="noise" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 flex flex-col items-center px-4 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center max-w-6xl w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-10 group"
          >
            <Sparkles className="h-4 w-4 fill-current animate-pulse" />
            <span className="text-[10px] font-black uppercase">Built for high-performance students</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-12">
            MASTER YOUR <br />
            <span className="text-gradient">FLOW STATE.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            Eliminate distractions and 10x your productivity with our neural-sync study platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Button size="xl" className="h-16 px-10 text-lg font-black rounded-2xl bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
              GET STARTED NOW <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="h-16 px-10 text-lg font-black rounded-2xl border-white/10 hover:bg-white/5 hover:scale-105 transition-all">
              VIEW DEMO
            </Button>
          </div>

          {/* Search Box */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto w-full relative"
          >
            <div className="glass p-3 rounded-[2rem] relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative flex items-center bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                <Search className="ml-6 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="What's your biggest study obstacle?" 
                  className="w-full h-18 pl-4 pr-32 bg-transparent text-white focus:outline-none font-bold text-base placeholder:text-muted-foreground/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  className="absolute right-2 h-14 px-8 rounded-xl font-black shadow-xl bg-primary hover:bg-primary/90"
                  onClick={() => console.log("Searching...")}
                >
                  SOLVE
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Showcase Section */}
      <section className="py-40 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              THE <span className="text-primary italic">OS</span> FOR GENIUSES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Modular systems that turn your workspace into a powerhouse.</p>
        </div>

        <div className="bento-grid">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bento-item-large glass rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden relative border-white/10"
          >
            <div className="absolute -top-24 -right-24 p-12 opacity-5 scale-150 group-hover:rotate-6 transition-transform duration-1000">
               <Brain className="h-96 w-96 text-primary" />
            </div>
            <div>
               <div className="h-14 w-14 rounded-2xl bg-primary/20 border border-primary/20 flex items-center justify-center text-primary mb-10 shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                 <Zap className="h-7 w-7 fill-current" />
               </div>
               <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">Neural<br />Recall 3.0</h3>
               <p className="text-lg text-muted-foreground max-w-md">Scientifically proven intervals to lock knowledge into your long-term memory permanently.</p>
            </div>
            <div className="flex items-center gap-4 mt-12 relative z-10">
               <Button className="rounded-xl h-12 px-8 font-black text-sm bg-primary hover:bg-primary/90">LAUNCH ENGINE</Button>
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center font-black text-[8px] text-primary">HUB</div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass rounded-[2rem] p-10 flex flex-col justify-between border-secondary/20 bg-secondary/5"
          >
             <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
                  <Target className="h-5 w-5" />
                </div>
                <div className="text-[9px] font-black uppercase py-1 px-2 border border-secondary/20 text-secondary rounded">PERFORMANCE</div>
             </div>
             <div>
                <div className="text-5xl font-black mb-1 text-white">98%</div>
                <div className="text-[10px] font-black text-muted-foreground uppercase">USER SUCCESS RATE</div>
             </div>
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "98%" }}
                   className="h-full bg-secondary shadow-[0_0_10px_var(--secondary)]" 
                />
             </div>
          </motion.div>

          {/* Vertical Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass rounded-[2rem] p-10 flex flex-col justify-between bg-white text-black border-none"
          >
             <div className="h-10 w-10 rounded-xl bg-black/10 flex items-center justify-center">
               <Shield className="h-5 w-5" />
             </div>
             <h3 className="text-2xl font-black mt-8 mb-4 tracking-tight">Focus Lock</h3>
             <p className="text-xs font-medium opacity-60">Complete digital isolation for deep work sessions.</p>
             <Link href="/focus" className="mt-8 h-12 w-full rounded-xl bg-black text-white flex items-center justify-center hover:scale-105 transition-all">
                <ArrowRight className="h-5 w-5" />
             </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-4xl mx-auto"
         >
            <h2 className="text-7xl md:text-[10rem] font-black leading-none mb-20 opacity-10 select-none">LIMITLESS.</h2>
            <div className="relative inline-block group">
               <div className="absolute -inset-4 bg-primary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
               <Button size="xl" className="relative h-20 px-16 text-2xl font-black rounded-2xl shadow-2xl bg-primary text-white hover:scale-105 transition-all">
                 JOIN 50K+ STUDENTS
               </Button>
            </div>
            <div className="mt-20 flex items-center justify-center gap-10 opacity-20 grayscale hover:grayscale-0 transition-opacity">
                <Layers className="h-8 w-8" />
                <Star className="h-8 w-8" />
                <MousePointer2 className="h-8 w-8" />
                <Users className="h-8 w-8" />
            </div>
         </motion.div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  Zap,
  Sparkles,
  Target,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Neural Synergy",
    description: "Align your peak performance hours with AI-driven scheduling.",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-400/5"
  },
  {
    title: "Focus Lock",
    description: "Deep work sessions with zero digital distractions and neural monitoring.",
    icon: Shield,
    color: "text-secondary",
    bg: "bg-secondary/5"
  },
  {
    title: "Active Recall",
    description: "Master any subject with scientifically-backed retrieval systems.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/5"
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background selection:bg-primary selection:text-black">
      {/* Hyper-Crazy Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-secondary/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '-2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay" />
        <div className="absolute h-full w-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section - The "Crazy" Part */}
      <section className="relative pt-64 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left lg:rotate-[-2deg]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-none bg-primary text-black font-black uppercase tracking-tighter mb-8 skew-x-[-12deg]"
              >
                <Sparkles className="h-5 w-5" />
                <span className="text-sm">WARNING: HIGH CONCENTRATION ZONE</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                className="text-8xl md:text-[12rem] font-black tracking-[-0.08em] mb-8 leading-[0.8] uppercase flex flex-col"
              >
                <span className="text-white">ULTRA</span>
                <span className="text-acid italic ml-12 drop-shadow-[0_0_30px_rgba(0,255,0,0.4)]">FLOW.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-white max-w-xl mb-12 font-black leading-tight uppercase skew-x-[-6deg]"
              >
                Break the limits. <span className="bg-primary text-black px-2">Shatter the noise.</span> Reclaim your brain.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-6"
              >
                <Button size="xl" asChild className="rounded-none h-20 px-12 bg-white text-black hover:bg-primary transition-all hover:skew-x-[-12deg] text-2xl font-black italic border-4 border-black group">
                  <Link href="/dashboard" className="flex items-center gap-3">JACK IN <ArrowRight className="h-8 w-8 group-hover:translate-x-4 transition-transform" /></Link>
                </Button>
                <Button size="xl" variant="outline" asChild className="rounded-none h-20 px-12 border-4 border-primary text-primary hover:bg-primary/10 transition-all text-2xl font-black italic">
                   <Link href="/tools">SYSTEMS</Link>
                </Button>
              </motion.div>
            </div>

            {/* Out-of-the-box UI Elements */}
            <div className="flex-1 relative">
               <motion.div 
                 animate={{ rotateZ: [5, -5, 5], scale: [1, 1.05, 1] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="relative z-20"
               >
                 <div className="glass-hyper p-2 tilt-3d border-glow rounded-[100px] overflow-hidden">
                    <div className="bg-neutral-950 aspect-square rounded-[90px] flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-radial from-primary/40 to-transparent animate-pulse" />
                       <Brain className="h-48 w-48 text-white relative z-10 animate-bounce-slow" />
                    </div>
                 </div>
               </motion.div>

               {/* Crazy floating stat blocks */}
               <div className="absolute -top-12 -left-12 glass-hyper p-8 skew-y-3 border-glow z-30">
                  <div className="text-[12px] font-black text-primary mb-2 tracking-[0.4em] uppercase">Sync Status</div>
                  <div className="text-4xl font-black text-white italic tracking-tighter">999.0%</div>
               </div>

               <div className="absolute -bottom-12 -right-12 glass-hyper p-8 skew-x-12 border-glow z-30">
                  <div className="text-[12px] font-black text-secondary mb-2 tracking-[0.4em] uppercase">Brain Heat</div>
                  <div className="text-4xl font-black text-white italic tracking-tighter">OVERFLOW</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Radical Shift */}
      <section className="py-48 bg-primary text-black transform skew-y-[-4deg] relative z-10">
         <div className="max-w-7xl mx-auto transform skew-y-[4deg]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
               <h2 className="text-7xl md:text-[10rem] font-black leading-[0.7] tracking-[-0.05em] uppercase">
                  RAW <br />POWER.
               </h2>
               <p className="text-2xl font-black max-w-sm italic uppercase leading-none">
                  Forget minimalism. This is maximum performance for the hyper-connected mind.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {FEATURES.map((feature, i) => (
                 <div key={i} className="border-8 border-black p-10 hover:translate-x-4 hover:translate-y-[-16px] transition-all bg-white shadow-[16px_16px_0_0_#000]">
                    <div className="h-20 w-20 bg-black flex items-center justify-center mb-8 rotate-[-12deg]">
                       <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-4xl font-black mb-6 uppercase italic">{feature.title}</h3>
                    <p className="text-lg font-bold leading-tight uppercase">{feature.description}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing - Neon Overload */}
      <section id="pricing" className="py-64 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-40">
               <h2 className="text-9xl md:text-[15rem] font-black text-white/10 uppercase tracking-tighter leading-none absolute left-0 right-0 -z-10 select-none">SYSTEMS</h2>
               <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tight relative">Choose your poison.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {["PEASANT", "ELITE", "GOD-MODE"].map((name, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.05, rotate: i === 1 ? 0 : i === 0 ? -5 : 5 }}
                   className={cn(
                     "p-12 border-4 flex flex-col items-center text-center",
                     i === 1 ? "bg-primary border-black text-black shadow-[24px_24px_0_0_#4ade80]" : "bg-black border-primary text-white shadow-[16px_16px_0_0_rgba(240,171,252,0.5)]"
                   )}
                 >
                    <span className="text-[14px] font-black tracking-[0.5em] mb-4">PROTOCOL 00{i+1}</span>
                    <h3 className="text-5xl font-black italic mb-8 uppercase">{name}</h3>
                    <div className="text-7xl font-black mb-12 italic">${i * 12}.00</div>
                    <div className="space-y-6 mb-16 font-black uppercase tracking-tighter text-lg flex-1">
                       <div>- FULL HUD ACCESS</div>
                       <div>- BRAIN OVERCLOCK</div>
                       <div>- NO DELAY SYNC</div>
                       {i > 0 && <div>- UNLIMITED POWER</div>}
                       {i === 2 && <div>- REALITY BREAKER</div>}
                    </div>
                    <Button className={cn(
                      "w-full h-16 rounded-none font-black text-xl italic",
                      i === 1 ? "bg-black text-white" : "bg-primary text-black"
                    )}>
                      INITIALIZE
                    </Button>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <footer className="py-32 border-t-[20px] border-primary px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-8xl font-black italic tracking-tighter uppercase">FOCUSLY.</h2>
            <div className="flex flex-col items-end gap-4 font-black uppercase italic tracking-tighter text-2xl">
               <Link href="/dashboard" className="text-primary hover:text-white transition-colors">DASHBOARD</Link>
               <Link href="/tools" className="hover:text-primary transition-colors">ACCESS PROTOCOLS</Link>
               <Link href="/register" className="hover:text-primary transition-colors">CREATE ACCOUNT</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}

function PricingCard({ name, price, desc, features, highlighted = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={cn(
        "glass p-10 md:p-12 rounded-[3rem] relative flex flex-col overflow-hidden transition-all",
        highlighted ? "border-primary/50 ring-4 ring-primary/5 shadow-2xl scale-105 z-10 bg-primary/5" : "border-white/5"
      )}
    >
       {highlighted && (
         <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-black px-6 py-2 rounded-bl-3xl uppercase tracking-widest">Recommended</div>
       )}
       <div className="mb-10">
          <h3 className="text-2xl font-black uppercase mb-2">{name}</h3>
          <p className="text-muted-foreground text-xs font-semibold leading-relaxed">{desc}</p>
       </div>
       <div className="flex items-baseline gap-2 mb-10">
          <span className="text-6xl font-black">${price}</span>
          <span className="text-muted-foreground font-bold text-xs">/MONTHLY</span>
       </div>
       <div className="space-y-4 mb-12 flex-1">
          {features.map((f: string, i: number) => (
            <div key={i} className="flex items-center gap-4 text-sm font-semibold text-white/80">
               <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-3 w-3 text-primary" />
               </div>
               {f}
            </div>
          ))}
       </div>
       <Button 
         variant={highlighted ? "glow" : "outline"} 
         size="lg" 
         className="w-full rounded-2xl h-14 font-black text-sm uppercase"
         asChild
       >
          <Link href="/register">Initialize Plan</Link>
       </Button>
    </motion.div>
  );
}



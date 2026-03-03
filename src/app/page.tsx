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
  Users,
  MousePointer2,
  Layers,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Neural Synergy",
    description: "Align your peak performance hours with AI-driven scheduling that adapts to your brain.",
    icon: Brain,
    color: "text-indigo-400",
    bg: "bg-indigo-400/5",
  },
  {
    title: "Focus Lock",
    description: "Deep work sessions with zero digital distractions and background neural monitoring.",
    icon: Shield,
    color: "text-secondary",
    bg: "bg-secondary/5",
  },
  {
    title: "Active Recall",
    description: "Master any subject with scientifically-backed retrieval systems and AI mock generators.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/5",
  },
];

const PRICING_PLANS = [
  {
    name: "ESSENTIALS",
    price: 0,
    protocol: "001",
    features: ["FULL HUD ACCESS", "CORE FOCUS TOOLS", "BASIC RECALL ENGINE"],
    highlighted: false,
  },
  {
    name: "ULTRA",
    price: 12,
    protocol: "002",
    features: ["AI STUDY ARCHITECT", "UNLIMITED FOCUS SESSIONS", "PRIORITY NEURAL SYNC", "CUSTOM PROTOCOLS"],
    highlighted: true,
  },
  {
    name: "ENGINE",
    price: 24,
    protocol: "003",
    features: ["TEAM SYNC CAPABILITIES", "PERSONAL AI COACH", "OS-LEVEL BLOCKING", "ADVANCED XP SYSTEM"],
    highlighted: false,
  },
];


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Premium Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/5 blur-[150px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Cognitive OS</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] flex flex-col"
              >
                <span className="text-white">ULTRA</span>
                <span className="text-gradient drop-shadow-2xl">FLOW.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 font-medium leading-relaxed"
              >
                Unlock your cognitive potential with the world's first <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">neural-sync platform</span>. Eliminate noise, master focus, and reclaim your brain.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6"
              >
                <Button size="xl" asChild className="rounded-2xl px-10 bg-primary text-white hover:bg-primary/90 transition-all font-bold group shadow-[0_0_30px_rgba(129,140,248,0.3)]">
                  <Link href="/dashboard" className="flex items-center gap-2">JACK IN <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
                <Button size="xl" variant="outline" asChild className="rounded-2xl px-10 border-white/10 hover:bg-white/5 transition-all font-bold">
                   <Link href="/tools">VIEW SYSTEMS</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex items-center gap-6 text-muted-foreground"
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted-foreground/20 flex items-center justify-center text-[8px] font-bold" title={`User ID-${i}0${i}`}>
                      ID-{i}0{i}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest">
                  12,000+ ENROLLED SYNCED USERS
                </div>
              </motion.div>
            </div>

            {/* Premium UI Mockup */}
            <div className="flex-1 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                 animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                 className="relative z-20 group"
               >
                 <div className="glass-hyper p-1 rounded-[2.5rem] border-white/10 shadow-3xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="bg-neutral-950 aspect-[4/3] rounded-[2.3rem] flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent animate-pulse opacity-40" />
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                       
                       {/* Animated Logo Overlay */}
                       <div className="relative z-10 flex flex-col items-center">
                          <Brain className="h-24 w-24 text-primary animate-float mb-6" />
                          <div className="h-1.5 w-48 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                              className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                            />
                          </div>
                          <div className="mt-4 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Syncing Neural Pathway...</div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Floating widgets */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute -top-6 -left-6 glass border-white/10 p-5 rounded-2xl z-30 shadow-2xl"
                 >
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <Activity className="h-4 w-4 text-green-500" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-muted-foreground uppercase leading-none mb-1">Status</p>
                          <p className="text-sm font-bold text-white">LOCKED IN</p>
                       </div>
                    </div>
                 </motion.div>

                 <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                   className="absolute -bottom-6 -right-6 glass border-white/10 p-5 rounded-2xl z-30 shadow-2xl"
                 >
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="h-4 w-4 text-primary" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-muted-foreground uppercase leading-none mb-1">XP Gain</p>
                          <p className="text-sm font-bold text-white">+1,240 XP</p>
                       </div>
                    </div>
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Sleek & Modern */}
      <section className="py-32 px-6 bg-card/30 relative">
         <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">PRECISION <span className="text-primary italic">PROTOCOLS.</span></h2>
               <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Built for the hyper-connected mind. Minimal friction, maximum output.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {FEATURES.map((feature, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ y: -8 }}
                   className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all flex flex-col group"
                 >
                    <div className={`h-16 w-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                       <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing - Dynamic Premium */}
      <section id="pricing" className="py-32 px-6">
         <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
               <h2 className="text-3xl font-bold text-primary uppercase tracking-[0.3em] mb-4">Pricing Protocols</h2>
               <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Choose your bandwidth.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {PRICING_PLANS.map((plan, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -12 }}
                   className={cn(
                     "p-12 rounded-[3rem] border-2 flex flex-col relative overflow-hidden transition-all duration-500",
                     plan.highlighted 
                      ? "bg-primary/5 border-primary shadow-[0_0_50px_rgba(129,140,248,0.1)]" 
                      : "bg-white/[0.02] border-white/5"
                   )}
                 >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-12 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-b-xl">
                        COMMENDED
                      </div>
                    )}
                    
                    <span className="text-[11px] font-black tracking-[0.4em] mb-4 text-muted-foreground">ID-{plan.protocol}</span>
                    <h3 className="text-3xl font-black mb-8 tracking-tighter">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-12">
                      <span className="text-5xl font-black">${plan.price}</span>
                      <span className="text-muted-foreground font-bold">/MO</span>
                    </div>
                    
                    <div className="space-y-4 mb-16 font-bold uppercase tracking-widest text-[10px] flex-1">
                       {plan.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className={cn("h-3 w-3", plan.highlighted ? "text-primary" : "text-muted-foreground/40")} />
                            <span className={plan.highlighted ? "text-white" : "text-muted-foreground"}>{feature}</span>
                         </div>
                       ))}
                    </div>
                    
                    <Button 
                      asChild
                      size="lg"
                      className={cn(
                        "w-full h-14 rounded-2xl font-bold text-sm transition-all",
                        plan.highlighted 
                          ? "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20" 
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                      )}
                    >
                      <Link href="/register">INITIALIZE PROTOCOL</Link>
                    </Button>
                 </motion.div>
               ))}
            </div>

         </div>
      </section>

      <footer className="py-24 border-t border-white/5 px-6">
        <div className="container mx-auto max-w-7xl">
           <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="max-w-xs">
                 <h2 className="text-3xl font-black tracking-tighter mb-6 flex items-center gap-2">FOCUSLY<span className="text-primary">.</span></h2>
                 <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                   The ultimate neural-sync platform for hyper-productive students and professionals.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 uppercase tracking-widest text-[10px] font-black">
                 <div className="flex flex-col gap-4">
                    <span className="text-primary mb-2">Platform</span>
                    <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
                    <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
                    <Link href="/problems" className="hover:text-white transition-colors">Library</Link>
                 </div>
                 <div className="flex flex-col gap-4">
                    <span className="text-primary mb-2">Company</span>
                    <Link href="#" className="hover:text-white transition-colors">Research</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Support</Link>
                 </div>
                 <div className="flex flex-col gap-4">
                    <span className="text-primary mb-2">Protocols</span>
                    <Link href="/register" className="hover:text-white transition-colors">Sign Up</Link>
                    <Link href="/login" className="hover:text-white transition-colors">Login</Link>
                 </div>
              </div>
           </div>
           
           <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                © 2026 FOCUSLY NEURAL SYSTEMS. ALL RIGHTS RESERVED.
              </div>
              <div className="flex gap-6">
                 <MousePointer2 className="h-4 w-4 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer" />
                 <Layers className="h-4 w-4 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer" />
                 <Users className="h-4 w-4 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer" />
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

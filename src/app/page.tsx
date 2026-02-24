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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/3 text-white border border-white/10 mb-12 backdrop-blur-md shadow-2xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">The Future of Neural Performance</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "circOut" }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] uppercase"
          >
            Master your <br />
            <span className="text-gradient italic drop-shadow-sm">Inner Flow.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 font-semibold leading-relaxed"
          >
            Focusly is the high-bandwidth neural-sync platform designed to eliminate distractions and achieve deep work with <span className="text-white">surgical precision.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32"
          >
            <Button variant="glow" size="xl" asChild className="h-16 px-12 rounded-[2rem] font-black text-lg gap-3">
              <Link href="/dashboard">INITIATE SYNC <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="h-16 px-12 rounded-[2rem] border-white/5 bg-white/2 backdrop-blur-xl hover:bg-white/5 transition-all font-black text-lg">
              <Link href="/tools">WATCH PROTOCOL</Link>
            </Button>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl mx-auto group shadow-[0_0_100px_rgba(99,102,241,0.1)]"
          >
            <div className="absolute -inset-1 bg-linear-to-b from-primary/30 to-transparent blur-3xl rounded-[4rem] -z-10 group-hover:from-primary/40 transition-colors" />
            <div className="glass-card p-4 overflow-hidden border-white/10 shadow-3xl rounded-[3rem]">
               <div className="relative aspect-video rounded-[2.5rem] bg-neutral-950 border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-150 animate-pulse" />
                  <div className="z-10 text-center">
                     <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 blur-2xl animate-pulse rounded-full" />
                        <Brain className="h-24 w-24 text-white mx-auto mb-6 relative animate-bounce-slow" />
                     </div>
                     <div className="text-xs font-black uppercase tracking-[0.5em] text-white/50">Neural Synchronization...</div>
                  </div>
                  
                  {/* Floating UI elements */}
                  <div className="absolute top-12 right-12 glass-card p-6 rounded-3xl border-white/10 animate-float shadow-2xl">
                     <div className="flex items-center gap-5">
                        <div className="h-3 w-3 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        <div>
                           <div className="text-xs uppercase tracking-[0.2em] font-black text-white mb-1">COGNITIVE FLOW</div>
                           <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">STABILITY: 99.2%</div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute bottom-12 left-12 glass-card p-6 rounded-3xl border-white/10 animate-float shadow-2xl" style={{ animationDelay: '-1s' }}>
                     <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center">
                           <Zap className="h-5 w-5 text-primary fill-current" />
                        </div>
                        <div>
                           <div className="text-[10px] uppercase tracking-[0.2em] font-black text-white mb-1">XP MULTIPLIER</div>
                           <div className="text-[10px] font-bold text-primary uppercase tracking-widest">3.5X BOOST</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-48 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* ... existing features ... */}
          <div className="text-center mb-32 relative z-10">
            <motion.div 
               whileInView={{ opacity: 1, scale: 1 }}
               initial={{ opacity: 0, scale: 0.8 }}
               className="h-1 w-20 bg-primary mx-auto mb-10 rounded-full"
            />
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">Architected for <br />Peak Potential</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-semibold leading-relaxed">Everything needed to master your cognitive bandwidth and achieve goals with surgical precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-12 overflow-hidden group cursor-default"
              >
                <div className={cn(
                  "h-16 w-16 rounded-2xl flex items-center justify-center mb-10 border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl", 
                  feature.bg
                )}>
                  <feature.icon className={cn("h-8 w-8", feature.color)} />
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight uppercase leading-none">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-10 font-black uppercase tracking-widest text-[11px] opacity-70">
                  {feature.description}
                </p>
                <Link href="/tools" className="text-[12px] font-black text-primary flex items-center gap-3 group/link uppercase tracking-[0.2em]">
                  CALIBRATE <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section id="tools" className="py-32 px-6">
         <div className="max-w-7xl mx-auto glass rounded-[4rem] p-16 md:p-24 relative overflow-hidden group border-white/5">
            <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <Zap className="h-64 w-64 text-primary" />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
               <div className="flex-1">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">Tools of the <br /><span className="text-gradient">Trade.</span></h2>
                  <p className="text-muted-foreground text-lg font-semibold mb-12 max-w-xl">
                     Access our suite of neural-sync tools designed for distraction-free deep work. From smart timers to AI curriculum architects.
                  </p>
                  <Button variant="glow" size="lg" asChild className="rounded-2xl h-14 px-10 font-black text-sm uppercase">
                     <Link href="/tools">Access Arsenal</Link>
                  </Button>
               </div>
               <div className="flex-1 grid grid-cols-2 gap-4">
                  {[Brain, Clock, Shield, Target].map((Icon, i) => (
                    <div key={i} className="glass p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/20 transition-all group/icon">
                       <Icon className="h-10 w-10 text-primary group-hover/icon:scale-110 transition-transform" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Module 0{i+1}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Stats Section / Community */}
      <section id="community" className="py-32 px-6 border-y border-white/5 bg-white/2 backdrop-blur-3xl relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">Global Neural Link</h2>
             <p className="text-muted-foreground font-semibold uppercase tracking-widest text-xs">Join thousands of high-performers already in flow.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-32">
            {[
              { icon: Users, label: "NEURAL LINKS", value: "150k+" },
              { icon: Target, label: "RETENTION RATE", value: "99.4%" },
              { icon: Clock, label: "XP EARNED", value: "25M+" },
              { icon: CheckCircle2, label: "PROTOCOLS", value: "1.2M" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black tracking-tighter text-white">{stat.value}</div>
                <div className="text-[10px] font-black tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-48 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Unlock <span className="text-gradient">Unlimited</span> Flow</h2>
               <p className="text-muted-foreground text-xl font-semibold">Choose the protocol that fits your performance needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <PricingCard 
                 name="Resident" 
                 price="0" 
                 desc="Core neural features for standard focus needs."
                 features={["Standard Focus Timer", "Basic Study Plans", "Community Access"]} 
               />
               <PricingCard 
                 name="Pro Elite" 
                 price="12" 
                 desc="The ultimate performance kit for deep work masters."
                 features={["AI Schedule Architect", "Focus Shield (All Devices)", "Smart Recall Flashcards", "Priority Community Guilds"]}
                 highlighted={true}
               />
               <PricingCard 
                 name="Synapse" 
                 price="29" 
                 desc="Full enterprise-grade neural integration for teams."
                 features={["Everything in Pro", "Team Analytics HUD", "Custom AI Models", "Neural API Access"]} 
               />
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-52 px-6 text-center">
        <div className="max-w-5xl mx-auto glass-card p-24 md:p-32 relative overflow-hidden group rounded-[4rem]">
           <div className="absolute inset-0 bg-primary/5 blur-[120px] group-hover:bg-primary/10 transition-colors animate-pulse" />
           <div className="relative z-10">
              <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-none">Ready to <br /><span className="text-gradient">Ascend?</span></h2>
              <p className="text-muted-foreground mb-16 max-w-xl mx-auto font-black uppercase tracking-widest text-sm leading-relaxed opacity-80">Join the elite high-performers who have already catalyzed their peak flow state with Focusly.</p>
              <Button variant="glow" size="xl" asChild className="h-20 px-16 rounded-[2.5rem] font-black text-2xl shadow-3xl hover:scale-105 active:scale-95 transition-all">
                <Link href="/register">JOIN THE SQUAD</Link>
              </Button>
           </div>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 px-6 bg-white/2 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
           <div className="flex items-center gap-4 group cursor-pointer">
              <div className="h-10 w-10 bg-primary rounded-2xl flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/20">
                <Zap className="h-6 w-6 fill-white text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter italic uppercase">Focusly</span>
           </div>
           <div className="flex gap-16 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <Link href="/settings" className="hover:text-primary transition-colors">Privacy Protocol</Link>
              <Link href="/settings" className="hover:text-white transition-colors">Terms of Sync</Link>
              <Link href="/dashboard" className="hover:text-white transition-colors">Neural Log</Link>
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/30">
             &copy; 2026 Focusly Neural Systems. All units active.
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



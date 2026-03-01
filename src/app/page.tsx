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
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold tracking-wide text-white/80">New era of productivity is here</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
          >
            Master your <br />
            <span className="text-gradient italic font-serif">Deep Focus.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Focusly is a minimalist neural-sync platform designed to eliminate noise and help you achieve deep work with <span className="text-white">graceful precision.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <Button size="lg" asChild className="rounded-2xl h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Link href="/dashboard" className="flex items-center gap-2">Get Started <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-2xl h-14 px-8 bg-white/5 backdrop-blur-xl hover:bg-white/10 border-white/10 transition-all">
              <Link href="/tools">Learn More</Link>
            </Button>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl mx-auto group"
          >
            <div className="absolute -inset-2 bg-gradient-to-b from-primary/20 to-transparent blur-3xl rounded-[3rem] -z-10" />
            <div className="glass-card p-3 overflow-hidden border-white/10 rounded-[2.5rem] bg-neutral-900/50">
               <div className="relative aspect-video rounded-3xl bg-neutral-950 border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-150" />
                  <div className="z-10 text-center">
                     <Brain className="h-20 w-20 text-primary/40 mx-auto mb-4" />
                     <div className="text-[11px] font-medium tracking-[0.3em] text-white/30 uppercase">System Ready</div>
                  </div>
                  
                  {/* Floating elements - refined */}
                  <div className="absolute top-8 right-8 bg-white/5 backdrop-blur-2xl px-5 py-4 rounded-2xl border border-white/10 shadow-2xl animate-float">
                     <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <div className="text-left">
                           <div className="text-[10px] font-semibold text-white/50 mb-0.5 uppercase tracking-wider">Flow State</div>
                           <div className="text-xs font-bold text-white tracking-tight">Active: 99.2%</div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute bottom-8 left-8 bg-white/5 backdrop-blur-2xl px-5 py-4 rounded-2xl border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '-1.5s' }}>
                     <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-primary/20 rounded-lg flex items-center justify-center">
                           <Zap className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-left">
                           <div className="text-[10px] font-semibold text-white/50 mb-0.5 uppercase tracking-wider">Focus Boost</div>
                           <div className="text-xs font-bold text-white tracking-tight">3.5x Multiplier</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - refined */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Elegance in performance.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Tools designed to help you reclaim your time and focus on what truly matters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-10 group cursor-default border-gradient"
              >
                <div className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-all duration-500 group-hover:scale-105 group-hover:border-primary/20", 
                  feature.bg
                )}>
                  <feature.icon className={cn("h-6 w-6", feature.color)} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                  {feature.description}
                </p>
                <Link href="/tools" className="text-xs font-bold text-primary flex items-center gap-2 group/link tracking-tight hover:gap-3 transition-all">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - simplified */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.01]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight tracking-tight">Simple Pricing.</h2>
               <p className="text-muted-foreground text-lg font-medium">Transparent plans for individuals and teams.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <PricingCard 
                 name="Personal" 
                 price="0" 
                 desc="Core features for students."
                 features={["Standard Focus Timer", "Basic Study Plans", "Community Access"]} 
               />
               <PricingCard 
                 name="Pro" 
                 price="12" 
                 desc="Advanced tools for deep work."
                 features={["AI Schedule Architect", "Focus Shield", "Smart Recall", "Priority Support"]}
                 highlighted={true}
               />
               <PricingCard 
                 name="Teams" 
                 price="29" 
                 desc="Collaborative focus for groups."
                 features={["Everything in Pro", "Team Analytics", "Custom Models", "API Access"]} 
               />
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass-card p-16 md:p-24 text-center border-gradient group">
           <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Begin your flow.</h2>
           <p className="text-muted-foreground mb-12 max-w-md mx-auto font-medium text-lg">Join the high-performers who have already catalyzed their peak flow state with Focusly.</p>
           <Button size="xl" asChild className="rounded-2xl h-14 px-10 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
             <Link href="/register">Start for Free</Link>
           </Button>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-sm text-muted-foreground">
           <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10">
                <Zap className="h-4 w-4 fill-white text-white" />
              </div>
              <span className="font-bold text-white text-xl tracking-tighter">Focusly.</span>
           </div>
           <div className="flex gap-10 font-medium tracking-tight">
              <Link href="/settings" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/settings" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/dashboard" className="hover:text-white transition-colors">Docs</Link>
           </div>
           <div className="font-medium tracking-tight opacity-50">
             &copy; 2026 Focusly Systems.
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



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
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-10"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">The Future of Deep Work</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            Work smarter, <br />
            <span className="text-primary italic">not harder.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 font-medium leading-relaxed"
          >
            Focusly is the neural-sync platform designed to eliminate distractions and help you achieve deep work in half the time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-28"
          >
            <Button size="lg" asChild className="h-14 px-10 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-bold text-base shadow-xl">
              <Link href="/dashboard">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-10 rounded-full border-white/10 hover:bg-white/5 transition-all font-bold text-base bg-white/2 backdrop-blur-sm">
              <Link href="/tools">Watch Demo</Link>
            </Button>
          </motion.div>

          {/* Device Mockup or Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "circOut" }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-1 bg-linear-to-b from-primary/20 to-transparent blur-2xl rounded-[3rem] -z-10" />
            <div className="glass rounded-[2.5rem] p-3 overflow-hidden border-white/5 shadow-2xl">
               <div className="relative aspect-video rounded-3xl bg-neutral-950 border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />
                  <div className="z-10 text-center">
                     <Brain className="h-20 w-20 text-primary/30 mx-auto mb-4 animate-pulse" />
                     <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">Syncing Neurons...</div>
                  </div>
                  {/* Floating UI elements */}
                  <div className="absolute top-10 right-10 glass p-5 rounded-3xl border-white/10 animate-float">
                     <div className="flex items-center gap-4">
                        <div className="h-2.5 w-2.5 rounded-full bg-secondary animate-pulse" />
                        <div>
                           <div className="text-[10px] uppercase tracking-widest font-bold text-white mb-1">Neural Flow Active</div>
                           <div className="text-[9px] font-semibold text-muted-foreground uppercase">Stability: 98.4%</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built for High Performance</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-medium">Everything you need to master your schedule and achieve your goals with surgical precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all group cursor-default"
              >
                <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-all group-hover:scale-110", feature.bg)}>
                  <feature.icon className={cn("h-6 w-6", feature.color)} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                  {feature.description}
                </p>
                <Link href="/tools" className="text-[11px] font-bold text-primary flex items-center gap-2 group/link uppercase tracking-wider">
                  Learn more <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
           <div className="flex items-center gap-3"><Users className="h-5 w-5 text-primary" /> <span className="text-[11px] font-bold tracking-widest uppercase">50k+ Optimized</span></div>
           <div className="flex items-center gap-3"><Target className="h-5 w-5 text-secondary" /> <span className="text-[11px] font-bold tracking-widest uppercase">98% Retention</span></div>
           <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> <span className="text-[11px] font-bold tracking-widest uppercase">2M+ Hours Saved</span></div>
           <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /> <span className="text-[11px] font-bold tracking-widest uppercase">Validated</span></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-44 px-6 text-center">
        <div className="max-w-4xl mx-auto glass p-16 md:p-24 rounded-[4rem] border-white/5 relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary/10 blur-[120px] group-hover:bg-primary/20 transition-colors" />
           <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Ready to transform?</h2>
              <p className="text-muted-foreground mb-14 max-w-lg mx-auto font-medium text-lg leading-relaxed">Join thousands of high-performers who have already optimized their flow state with Focusly.</p>
              <Button size="xl" asChild className="h-16 px-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03] active:scale-[0.98]">
                <Link href="/register">Join the Pro Squad</Link>
              </Button>
           </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="h-5 w-5 fill-white text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight italic">Focusly</span>
           </div>
           <div className="flex gap-12 text-sm font-semibold text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Neural Log</Link>
           </div>
           <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
             &copy; 2026 Focusly Neural Systems.
           </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { PROBLEMS as MOCK_PROBLEMS } from "@/data/mock";
import { Search, ArrowRight, Zap, Target, BookOpen, AlertCircle, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { FocuslyModal } from "@/components/ui/FocuslyModal";

export default function ProblemsPage() {
  const [search, setSearch] = useState("");
  const [problems, setProblems] = useState<any[]>(MOCK_PROBLEMS);
  const [modal, setModal] = useState<{ open: boolean; title: string; message: string; type: "info" | "success" | "warning" }>({
    open: false,
    title: "",
    message: "",
    type: "info"
  });

  useEffect(() => {
    async function fetchProblems() {
      try {
        const res = await fetch("/api/problems");
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setProblems(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch problems:", error);
      }
    }
    fetchProblems();
  }, []);

  const filtered = problems.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.searchTerms.some((t: string) => t.includes(search.toLowerCase()))
  );

  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto space-y-16">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Sparkles className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Neural Solution Engine</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9]">
          WHAT IS YOUR <br />
          <span className="text-gradient">OBSTACLE?</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">Pick a struggle, follow our scientifically backed 5-step solutions, and regain control of your focus.</p>
      </motion.header>

      {/* Search Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative max-w-4xl"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-[2.5rem] opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text"
            placeholder="Search your problem (e.g. 'Procrastination', 'Phone Addition')"
            className="w-full h-20 pl-16 pr-6 rounded-[1.25rem] border-white/10 bg-white/5 backdrop-blur-xl text-xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all shadow-2xl font-bold placeholder:text-muted-foreground/30"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
              <div className="h-1.5 w-12 bg-primary rounded-full" /> 
              Active Solutions
            </h2>
            <span className="text-[10px] font-black uppercase text-muted-foreground/50">{filtered.length} RESULTS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link href={`/problems/${problem.id}`}>
                    <div className="glass-card group h-full p-8 rounded-[2rem] hover:glow-primary cursor-pointer flex flex-col justify-between shimmer">
                      <div>
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8 border border-primary/20">
                           <Zap className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">{problem.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 font-medium mb-8 leading-relaxed">
                          {problem.why}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-black uppercase tracking-widest text-primary group-hover:gap-2 transition-all">
                        Solve Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filtered.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full p-20 text-center glass-card rounded-[2.5rem] flex flex-col items-center border-dashed"
              >
                 <div className="h-20 w-20 rounded-full bg-muted/20 flex items-center justify-center mb-8">
                    <AlertCircle className="h-10 w-10 text-muted-foreground" />
                 </div>
                 <h3 className="text-2xl font-black mb-4 uppercase">No solution found?</h3>
                 <p className="text-muted-foreground mb-10 max-w-md mx-auto font-medium">Our AI can generate a custom solution specifically for your unique struggle.</p>
                 <Button 
                   size="xl"
                   className="font-black px-12 rounded-2xl bg-white text-black hover:scale-105"
                   onClick={() => setModal({
                      open: true,
                      title: "Request Received",
                      message: "Our AI team has been notified. We'll generate a custom 5-step fix for this problem soon!",
                      type: "success"
                    })}
                 >
                   REQUEST CUSTOM SOLUTION
                 </Button>
              </motion.div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           {/* Problem of the Day */}
           <motion.div 
             whileHover={{ y: -5 }}
             className="relative overflow-hidden group rounded-[2.5rem] bg-linear-to-br from-indigo-500 to-primary p-1 shadow-2xl"
           >
              <div className="bg-background rounded-[2.4rem] p-10 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <TrendingUp className="h-20 w-20" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Daily Highlight
                  </div>
                  <h3 className="text-3xl font-black mb-10 leading-[0.95] text-white uppercase tracking-tighter">
                    "STUCK IN A <br /><span className="text-primary italic">DOPAMINE LOOP?</span>"
                  </h3>
                  <Button size="xl" className="w-full bg-primary text-white hover:scale-[1.02] rounded-2xl group border-none" asChild>
                    <Link href="/problems/dopamine" className="flex items-center gap-3">
                      BREAK THE LOOP <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
           </motion.div>

           {/* Stats/Quick Tips */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] h-64 w-64 bg-secondary/5 blur-[80px] rounded-full" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                <div className="h-1.5 w-8 bg-secondary rounded-full" /> 
                Tactical Insights
              </h3>
              <div className="space-y-10">
                 <Tip 
                    title="THE 10M RULE" 
                    desc="Digital distance is mental power. Move your phone." 
                    icon={<Zap className="h-4 w-4 text-secondary" />}
                 />
                 <Tip 
                    title="THE 2M STARTER" 
                    desc="Friction is the enemy. Start for 120 seconds only." 
                    icon={<BookOpen className="h-4 w-4 text-secondary" />}
                 />
                 <Tip 
                    title="ACTIVE RECALL" 
                    desc="Testing is learning. Cover the page, say it out loud." 
                    icon={<Target className="h-4 w-4 text-secondary" />}
                 />
              </div>
           </div>
        </div>
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

function Tip({ title, desc, icon }: any) {
  return (
    <div className="flex gap-5 group">
       <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">{title}</div>
          <div className="text-sm font-medium text-muted-foreground leading-snug">{desc}</div>
       </div>
    </div>
  );
}









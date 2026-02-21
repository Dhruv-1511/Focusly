"use client";

import { useState, useEffect } from "react";
import { PROBLEMS as MOCK_PROBLEMS } from "@/data/mock";
import { Search, ArrowRight, Zap, Target, BookOpen, AlertCircle, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FocuslyModal } from "@/components/ui/FocuslyModal";
import { cn } from "@/lib/utils";

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
    <div className="space-y-12">
      <motion.header 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Library Engine</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
          What are you <span className="text-primary italic">facing</span> today?
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-2xl leading-relaxed">
          Select your obstacle and follow our scientifically-backed recovery protocols to regain control of your cognitive performance.
        </p>
      </motion.header>

      {/* Search Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl"
      >
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text"
            placeholder="Search by keyword, obstacle, or symptom..."
            className="w-full h-14 pl-14 pr-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md text-base focus:ring-4 focus:ring-primary/5 focus:border-primary/40 outline-none transition-all font-medium placeholder:text-muted-foreground/30 shadow-inner"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-bold text-muted-foreground flex items-center gap-3">
              Available Protocols
            </h2>
            <span className="text-[10px] font-bold text-muted-foreground/40">{filtered.length} RESULTS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                >
                  <Link href={`/problems/${problem.id}`}>
                    <div className="glass group h-full p-6 rounded-2xl hover:border-white/10 transition-all flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-6 border border-primary/20">
                           <Zap className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">{problem.title}</h3>
                        <p className="text-muted-foreground text-xs line-clamp-2 font-medium mb-8 leading-relaxed">
                          {problem.why}
                        </p>
                      </div>
                      <div className="flex items-center text-[11px] font-bold text-primary group-hover:translate-x-1 transition-transform">
                        INITIALIZE <ArrowRight className="ml-2 h-3.5 w-3.5" />
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
                className="col-span-full py-16 text-center glass rounded-3xl flex flex-col items-center border-dashed"
              >
                 <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                 <h3 className="text-lg font-bold mb-2">No specialized protocol found</h3>
                 <p className="text-muted-foreground mb-8 text-sm max-w-xs mx-auto font-medium">Request a neural-sync strategy for your specific challenge.</p>
                 <Button 
                   size="sm"
                   className="font-bold px-8 rounded-xl bg-white text-black hover:bg-neutral-200"
                   onClick={() => setModal({
                      open: true,
                      title: "Request Received",
                      message: "Our research team has been notified. We'll build a protocol for this soon!",
                      type: "success"
                    })}
                 >
                   Send Request
                 </Button>
              </motion.div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
           {/* Problem of the Day */}
           <motion.div 
             whileHover={{ y: -2 }}
             className="relative overflow-hidden group rounded-3xl p-px bg-linear-to-br from-indigo-500 via-primary to-primary/20"
           >
              <div className="bg-background/90 backdrop-blur-xl rounded-[23px] p-8 h-full relative overflow-hidden">
                <div className="absolute -top-4 -right-4 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <TrendingUp className="h-24 w-24" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    High Priority
                  </div>
                  <h3 className="text-2xl font-bold mb-8 leading-tight text-white tracking-tight">
                    Stuck in a <br /><span className="text-primary italic">Dopamine Loop?</span>
                  </h3>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20" asChild>
                    <Link href="/problems/dopamine" className="flex items-center gap-2 font-bold text-sm">
                      Initialize Reset <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
           </motion.div>

           {/* Stats/Quick Tips */}
           <div className="glass p-8 rounded-3xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8 text-center border-b border-white/5 pb-4">
                Field Intelligence
              </h3>
              <div className="space-y-8">
                 <Tip 
                    title="THE 10M DISTANCE" 
                    desc="Cognitive effort is reduced when phones are physically distant." 
                    icon={<Zap className="h-3.5 w-3.5 text-secondary" />}
                 />
                 <Tip 
                    title="2-MINUTE FRICTION" 
                    desc="Commit to only 120 seconds of work to bypass starting fear." 
                    icon={<BookOpen className="h-3.5 w-3.5 text-secondary" />}
                 />
                 <Tip 
                    title="FORCED RETRIEVAL" 
                    desc="Testing is learning. Cover information and recite from memory." 
                    icon={<Target className="h-3.5 w-3.5 text-secondary" />}
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
    <div className="flex gap-4 items-start group">
       <div className="h-9 w-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
          {icon}
       </div>
       <div>
          <div className="text-[10px] font-bold text-secondary mb-1 tracking-wide">{title}</div>
          <div className="text-xs font-medium text-muted-foreground leading-relaxed">{desc}</div>
       </div>
    </div>
  );
}










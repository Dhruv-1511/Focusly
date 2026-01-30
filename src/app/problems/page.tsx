"use client";

import { useState } from"react";
import { PROBLEMS } from"@/data/mock";
import { Search, ArrowRight, Zap, Target, BookOpen, AlertCircle } from"lucide-react";
import { Button } from"@/components/ui/button";
import Link from"next/link";
import { motion, AnimatePresence } from"framer-motion";

export default function ProblemsPage() {
  const [search, setSearch] = useState("");

  const filtered = PROBLEMS.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.searchTerms.some(t => t.includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Problem Solver System</h1>
        <p className="text-muted-foreground">Pick a struggle, get a 5-step solution immediately.</p>
      </header>

      {/* Search Section */}
      <div className="relative mb-12 max-w-4xl">
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text"
            placeholder="Search your problem (e.g. 'can't focus', 'late for exam')"
            className="w-full h-16 pl-16 pr-6 rounded-[24px] border-2 bg-card text-lg focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Target className="h-5 w-5" /> Active Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((problem) => (
                <motion.div
                  key={problem.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/problems/${problem.id}`}>
                    <div className="group h-full p-8 bg-card rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between">
                      <div>
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-6">
                           <Zap className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3  group-hover:text-primary transition-colors">{problem.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 font-medium mb-6">
                          {problem.why}
                        </p>
                      </div>
                      <div className="flex items-center text-sm font-bold text-primary">
                        Get 5-Step Solution <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="col-span-full p-12 text-center bg-muted/30 rounded-2xl border-2 border-dashed">
                 <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                 <h3 className="text-xl font-bold">Problem not found?</h3>
                 <p className="text-muted-foreground mb-6">Our AI is learning. Tell us what's wrong and we'll generate a solution.</p>
                 <Button>Submit New Problem</Button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
           {/* Problem of the Day */}
           <div className="bg-foreground text-background rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  <FlameIcon /> Problem of the Day
                </div>
                <h3 className="text-2xl font-bold mb-6   leading-tight text-white">"Studying but not remembering anything?"</h3>
                <Link href="/problems/memory">
                  <Button className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold  rounded-2xl">
                    Solve Today
                  </Button>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="h-24 w-24" />
              </div>
           </div>

           {/* Quick Tips */}
           <div className="bg-card rounded-2xl border p-8">
              <h3 className="text-xl font-bold mb-6">Quick Action Tips</h3>
              <div className="space-y-6">
                 <Tip 
                    title="The 10m Rule" 
                    desc="Put your phone at least 10 meters away while studying." 
                 />
                 <Tip 
                    title="The 2m Starter" 
                    desc="Commit to studying for just 2 minutes. The hardest part is starting." 
                 />
                 <Tip 
                    title="Active Recall" 
                    desc="Close the book. Write down everything you remember." 
                 />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function FlameIcon() {
  return <span className="text-orange-500">🔥</span>;
}

function Tip({ title, desc }: any) {
  return (
    <div className="flex gap-4">
       <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
       <div>
          <div className="text-sm font-bold">{title}</div>
          <div className="text-xs text-muted-foreground">{desc}</div>
       </div>
    </div>
  );
}




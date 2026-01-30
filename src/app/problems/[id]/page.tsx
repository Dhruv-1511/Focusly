"use client";

import { use } from "react";
import { PROBLEMS } from "@/data/mock";
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Wrench, 
  Zap, 
  Save, 
  Share2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProblemDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const problem = PROBLEMS.find(p => p.id === id);

  if (!problem) {
    return <div className="p-12 text-center">Problem not found.</div>;
  }

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <Link href="/problems" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12 uppercase tracking-widest">
        <ArrowLeft className="h-4 w-4" /> Back to Problems
      </Link>

      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-secondary font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4" /> Direct Solution
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">{problem.title}</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-2xl h-12 gap-2 font-bold px-6">
            <Save className="h-4 w-4" /> Save for later
          </Button>
          <Button className="rounded-2xl h-12 gap-2 bg-primary text-white font-bold px-6">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Why it happens */}
          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <AlertCircle className="h-5 w-5 text-orange-500" /> Why it happens
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium p-8 bg-muted/20 rounded-[32px] border">
               {problem.why}
            </p>
          </section>

          {/* 5-Step Fix */}
          <section className="bg-card border-2 border-primary/20 rounded-[40px] p-8 md:p-12 shadow-sm relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                The Battle Plan
             </div>
             <h2 className="text-3xl font-bold mb-10 text-center">The 5-Step Rapid Fix</h2>
             <div className="space-y-8">
                {problem.fiveStepFix.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start gap-6 group"
                  >
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <p className="text-lg font-bold pt-1.5 leading-tight">{step}</p>
                  </motion.div>
                ))}
             </div>
              <Button className="w-full mt-12 h-16 bg-secondary text-white font-bold text-xl rounded-3xl shadow-xl hover:shadow-secondary/20 scale-100 hover:scale-[1.02] transition-all">
                Mark Problem as Solved ✅
              </Button>
          </section>

          {/* Quick Action */}
          <section className="bg-orange-500 text-white p-8 md:p-12 rounded-[40px] shadow-lg">
             <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4">5-Minute Quick Action</h3>
             <p className="text-2xl font-bold mb-2 leading-tight">
               "{problem.quickAction}"
             </p>
             <p className="text-orange-100 text-sm font-bold">Small actions destroy big fears.</p>
          </section>
        </div>

        <div className="space-y-8">
           {/* Tools */}
           <div className="bg-card rounded-[32px] border p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Wrench className="h-5 w-5 text-primary" /> Recommended Tools
              </h3>
              <div className="space-y-4">
                 {problem.tools.map(tool => (
                   <div key={tool} className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 font-bold text-sm">
                      {tool}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-primary"><ArrowLeft className="h-4 w-4 rotate-180" /></Button>
                   </div>
                 ))}
              </div>
           </div>

           {/* Mistakes to avoid */}
           <div className="bg-red-50 rounded-[32px] border border-red-100 p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-600">
                 <XCircle className="h-5 w-5" /> Mistakes to avoid
              </h3>
              <div className="space-y-4">
                 {problem.mistakes.map(mistake => (
                   <div key={mistake} className="flex gap-3 items-start text-sm font-semibold text-red-900 border-b border-red-100 pb-4 last:border-0 last:pb-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {mistake}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

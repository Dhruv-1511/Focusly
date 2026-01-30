"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  MessageSquare, 
  Search, 
  Plus, 
  Users, 
  Target, 
  ArrowRight, 
  HelpCircle,
  Zap,
  CheckCircle2,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  { 
    title: "How to remember organic chemistry formulas?", 
    user: "Alex.R", 
    answers: 24, 
    ai: true, 
    tags: ["Chemistry", "Memory"],
    date: "2h ago"
  },
  { 
    title: "Best focus music for deep work?", 
    user: "Sarah.M", 
    answers: 12, 
    ai: false, 
    tags: ["Focus", "Tips"],
    date: "5h ago"
  },
  { 
    title: "How to stop procrastinating on big projects?", 
    user: "Kevin.L", 
    answers: 48, 
    ai: true, 
    tags: ["Motivation", "Logic"],
    date: "1d ago"
  },
];

const studyGroups = [
  { name: "Final Exam Prep: Physics", members: 124, active: true },
  { name: "Calculus Deep Dive", members: 89, active: true },
  { name: "Organic Chemistry Support", members: 56, active: false },
];

export default function CommunityPage() {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Student Collective</h1>
          <p className="text-muted-foreground">Collaborate with the collective student brain. Ask anything.</p>
        </div>
        <Button size="xl" variant="secondary" className="shadow-xl shadow-secondary/20 gap-2">
           <Plus className="h-6 w-6" /> Ask a Question
        </Button>
      </header>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1 group">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
           <input 
              type="text"
              placeholder="Search community questions..."
              className="w-full h-14 pl-14 pr-4 rounded-xl border bg-card text-lg focus:ring-2 focus:ring-primary outline-none font-medium"
           />
        </div>
        <Button variant="outline" size="xl" className="gap-2 font-bold">
           <Filter className="h-5 w-5" /> Filter by Subject
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
           {questions.map((q, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border hover:border-primary transition-all group shadow-sm"
             >
                <div className="flex items-center gap-2 mb-4">
                   {q.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-muted rounded-full">
                         {tag}
                      </span>
                   ))}
                   <span className="text-[10px] font-bold text-muted-foreground ml-auto">{q.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors cursor-pointer">{q.title}</h3>
                <div className="flex items-center justify-between pt-6 border-t font-bold text-sm">
                   <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center text-xs">{q.user[0]}</div>
                      <span className="text-muted-foreground">{q.user}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      {q.ai && (
                        <div className="flex items-center gap-1 text-primary">
                           <Zap className="h-4 w-4 fill-primary" /> <span className="text-xs uppercase font-bold">AI Ready</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-muted-foreground">
                         <MessageSquare className="h-4 w-4" /> {q.answers} Answers
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="space-y-8">
           {/* Study Groups */}
           <div className="bg-card rounded-2xl border p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Users className="h-5 w-5 text-primary" /> Study Groups
              </h3>
              <div className="space-y-4">
                 {studyGroups.map(group => (
                   <div key={group.name} className="p-4 rounded-xl bg-muted/30 border border-transparent hover:border-border cursor-pointer group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-sm group-hover:text-primary transition-colors">{group.name}</div>
                        {group.active && <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{group.members} Members</div>
                   </div>
                 ))}
                 <Button variant="link" className="w-full text-primary font-bold">Discover more groups</Button>
              </div>
           </div>

           {/* Guidelines */}
           <div className="p-8 bg-black text-white rounded-3xl relative overflow-hidden">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                 <HelpCircle className="h-5 w-5 text-secondary" /> Support Rules
              </h3>
              <ul className="space-y-4 text-xs font-medium text-gray-400">
                 <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" /> No judgment. Every struggle is valid.</li>
                 <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" /> Explain your thought process, don't just ask for answers.</li>
                 <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" /> Earn 50 XP for every helpful answer you give.</li>
              </ul>
              <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/10">
                 <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-secondary">Community Reward</div>
                 <div className="text-xs font-bold font-italic">Top contributor this month gets <span className="text-white">Premium Planner</span> for free.</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}





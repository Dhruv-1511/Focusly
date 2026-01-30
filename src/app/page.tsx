"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { 
  Search, 
  Calendar, 
  Brain, 
  Trophy, 
  Users, 
  HeartPulse, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  CheckCircle2,
  Zap,
  Shield,
  Sparkles,
  BarChart3,
  Target
} from "lucide-react";
import { Button } from"@/components/ui/button";
import { useState } from"react";
import { cn } from"@/lib/utils";

const problems = [
"I can't focus",
"I forget what I study",
"Exam stress",
"Procrastination",
"Low marks",
"No motivation"
];

const features = [
  {
    title:"Problem Solver System",
    description:"Search your struggle and get a 5-step fix instantly.",
    icon: Search,
    color:"bg-blue-500",
    id:"problem-solver"
  },
  {
    title:"Smart Study Planner",
    description:"AI-generated schedules based on your exam dates and weak topics.",
    icon: Calendar,
    color:"bg-green-500",
    id:"planner"
  },
  {
    title:"Memory Engines",
    description:"Spaced repetition and AI-powered flashcards from your notes.",
    icon: Brain,
    color:"bg-purple-500",
    id:"tools"
  },
  {
    title:"Habit & Streak Tracker",
    description:"Gamify your growth with XP, levels, and daily streaks.",
    icon: Trophy,
    color:"bg-yellow-500",
    id:"habits"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Solve 90% of student daily problems
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Master Your Studies, <br />
              <span className="text-primary">Solve Your Struggles.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              The ultimate student-focused platform for guidance, structure, and progress tracking. 
              Find solutions, take action, and improve daily.
            </p>
            
            {/* Search Bar - Core Feature */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="text"
                  placeholder="What are you struggling with today? (e.g. 'can't focus')"
                  className="w-full h-16 pl-14 pr-32 rounded-2xl border bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  size="lg" 
                  className="absolute right-2 top-2 rounded-xl px-6 font-bold shadow-lg"
                  onClick={() => console.log(`Searching for: ${searchQuery}`)}
                >
                  Solve It
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mr-2">Popular:</span>
                {problems.map((p) => (
                  <Button 
                    key={p}
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery(p)}
                    className="h-8 px-4 rounded-full bg-muted/50 text-xs font-bold hover:bg-primary hover:text-white transition-all border-none"
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="xl" variant="secondary" className="shadow-xl shadow-secondary/20" asChild>
                <Link href="/planner">Create Study Plan</Link>
              </Button>
              <Button size="xl" variant="outline" className="px-10 font-bold" asChild>
                <Link href="/tools">Explore Tools</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements (Visual Polish) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-50">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
      </section>

      {/* Problem of the Day Section */}
      <section className="py-12 border-y bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 bg-card rounded-[32px] border shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-30">
                <Sparkles className="h-10 w-10 text-yellow-500 animate-bounce" />
             </div>
             <div className="flex-1">
                <h3 className="text-xs font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Clock className="h-4 w-4" /> PROBLEM OF THE DAY
                </h3>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">"Studying but not remembering anything?"</h4>
                <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">Try the Active Recall method today. Spend 5 minutes explaining what you just learned to an imaginary friend.</p>
             </div>
             <div className="flex items-center gap-4 w-full md:w-auto">
                <Button variant="outline" size="lg" className="flex-1 md:flex-none font-bold rounded-xl" asChild>
                  <Link href="/tools">Learn More</Link>
                </Button>
                <Button variant="secondary" size="lg" className="flex-1 md:flex-none font-bold rounded-xl shadow-lg shadow-secondary/10" onClick={() => alert("Daily problem marked as solved!")}>
                  Mark as Solved ✅
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Your Success Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">Everything a student needs to excel, organized in one powerful hub.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={feature.id}
                className="group relative p-10 rounded-[32px] border bg-card hover:border-primary transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
                onClick={() => window.location.href = `/${feature.id === 'problem-solver' ? 'problems' : feature.id}`}
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl group-hover:scale-110 transition-transform duration-500", feature.color)}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm font-bold text-primary gap-2 group-hover:gap-3 transition-all">
                  Launch {feature.title} <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Mode Section */}
      <section className="py-32 bg-card border-y relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-50 text-red-600 font-bold text-xs mb-10 shadow-sm uppercase tracking-widest border border-red-100">
                <Zap className="h-4 w-4 animate-pulse" /> 2,450 students are focusing right now
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Enter the Flow Zone</h2>
              <div className="p-12 md:p-20 mb-12 bg-background rounded-[48px] border-4 border-muted shadow-2xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-8xl md:text-[10rem] font-mono font-bold tracking-tighter mb-12 text-foreground leading-none relative z-10">
                    25:00
                  </div>
                  <div className="flex justify-center gap-6 relative z-10">
                    <Button size="xl" className="shadow-2xl shadow-primary/30 px-12" asChild>
                      <Link href="/focus">Start Focus Session</Link>
                    </Button>
                    <Button size="icon" variant="outline" className="h-14 w-14 rounded-2xl border-2 hover:bg-red-50 hover:border-red-200 transition-all group/icon" onClick={() => console.log("Lofi radio toggled")}>
                      <HeartPulse className="h-6 w-6 text-red-500 group-hover/icon:scale-125 transition-transform" />
                    </Button>
                  </div>
              </div>
              <p className="text-muted-foreground text-xl font-medium max-w-xl mx-auto">
                Built-in Pomodoro, site blocker, and lof-fi tracks to keep you in the zone.
              </p>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-secondary/5 to-transparent pointer-events-none" />
      </section>

      {/* Motivation Grid */}
      <section id="community" className="py-32 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Leaderboard */}
              <div className="lg:col-span-1 p-10 bg-card rounded-[32px] border shadow-sm flex flex-col">
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Trophy className="h-7 w-7 text-yellow-500" /> Weekly Streaks
                 </h3>
                 <div className="space-y-6 flex-1">
                    {[
                      { name: "Alex R.", streak: "42 days", xp: "12,450" },
                      { name: "Sarah M.", streak: "38 days", xp: "11,200" },
                      { name: "Kevin L.", streak: "35 days", xp: "9,800" },
                      { name: "Emily W.", streak: "31 days", xp: "8,900" },
                    ].map((user, i) => (
                      <div key={user.name} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-border transition-all">
                        <div className="flex items-center gap-4">
                           <span className="font-bold text-muted-foreground text-xs w-4">{i+1}</span>
                           <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm">{user.name[0]}</div>
                           <span className="font-bold">{user.name}</span>
                        </div>
                        <div className="text-right">
                           <div className="text-orange-500 font-bold text-sm">🔥 {user.streak}</div>
                           <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{user.xp} XP</div>
                        </div>
                      </div>
                    ))}
                 </div>
                 <Button className="w-full mt-10 font-bold rounded-xl" variant="outline" onClick={() => console.log("Opening leaderboards")}>
                   View All Leaderboards
                 </Button>
              </div>

              {/* Community Question */}
              <div className="lg:col-span-2 p-10 md:p-16 bg-foreground text-background rounded-[32px] relative overflow-hidden group shadow-2xl">
                 <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ask the Collective</h3>
                    <p className="text-background/70 mb-10 text-xl font-medium leading-relaxed max-w-xl">Stuck on a concept? Need advice? The collective student brain is here to help.</p>
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-10 flex-1">
                       <div className="text-xs font-bold text-primary mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" /> TRENDING TOPIC
                        </div>
                       <h4 className="font-bold text-2xl mb-4 leading-tight">"How do you guys stop procrastinating on big projects? I feel so overwhelmed!"</h4>
                       <div className="flex items-center gap-6">
                          <span className="flex items-center gap-2 text-sm font-bold opacity-80"><Users className="h-4 w-4" /> 24 Answers</span>
                          <span className="flex items-center gap-2 text-sm font-bold text-primary"><Zap className="h-4 w-4 fill-primary" /> AI Answer ready</span>
                       </div>
                    </div>
                    <Button size="xl" variant="secondary" className="shadow-2xl shadow-primary/20 bg-primary text-white hover:bg-primary/90 font-bold px-10 self-start" asChild>
                      <Link href="/community">Ask Your Question Now</Link>
                    </Button>
                 </div>
                 <Users className="absolute bottom-[-40px] right-[-40px] h-80 w-80 text-white/5 -rotate-12 transition-transform duration-700 group-hover:rotate-0" />
              </div>
           </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-32 border-t">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
               <div className="w-full lg:w-1/2">
                  <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mb-8 tracking-widest uppercase border border-blue-100 italicize-none">Mental Health Check</div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Burnout is real. We've got your back.</h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
                    Our system monitors your study patterns. If you're overworking, we'll suggest a break, 
                    a lighter plan, or connect you with stress relief exercises.
                  </p>
                  <div className="space-y-6">
                     {[
                       "Weekly mood tracking",
                       "Guided breathing & meditation",
                       "Burnout alert system",
                       "Positive affirmations"
                     ].map(item => (
                       <div key={item} className="flex items-center gap-4 font-bold text-lg">
                          <div className="h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-secondary" />
                          </div>
                          {item}
                       </div>
                     ))}
                  </div>
                  <Button size="xl" variant="outline" className="mt-12 group font-bold px-10" asChild>
                    <Link href="/mental-health">Explore Wellness <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
               </div>
               <div className="w-full lg:w-1/2 p-10 md:p-16 bg-muted/50 rounded-[48px] border relative shadow-inner overflow-hidden">
                  <div className="bg-card p-8 rounded-[32px] shadow-2xl border mb-8 rotate-2 hover:rotate-0 transition-all duration-500 relative z-10">
                     <div className="flex items-center gap-5 mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                          <HeartPulse className="h-8 w-8 text-destructive animate-pulse" />
                        </div>
                        <div>
                           <div className="font-black text-lg">Burnout Alert</div>
                           <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">AI Safety System</div>
                        </div>
                     </div>
                     <p className="text-lg font-medium leading-relaxed mb-8">
                       "Hey Alex, you've studied for 6 hours straight without a proper break. Your focus score is dropping. How about a 15-minute walk?"
                     </p>
                     <div className="flex gap-4">
                        <Button size="lg" className="flex-1 bg-secondary text-white font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/10" onClick={() => console.log("Break accepted")}>Accept Break</Button>
                        <Button size="lg" variant="ghost" className="flex-1 font-bold" onClick={() => console.log("Alert ignored")}>Ignore</Button>
                     </div>
                  </div>
                  <div className="absolute top-8 right-8 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-md">AI COACH</div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter max-w-4xl mx-auto leading-[0.9]">Ready to transform your student life?</h2>
            <p className="text-xl md:text-2xl text-background/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the hub where problems meet solutions and students become top achievers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <Button 
                size="xl" 
                variant="secondary" 
                className="text-primary font-black shadow-[0_20px_50px_rgba(255,255,255,0.2)] bg-white hover:bg-white/90 px-12 scale-100 hover:scale-105 active:scale-95 transition-all text-xl h-20"
                onClick={() => console.log("Starting onboarding flow")}
               >
                 Get Started for Free
               </Button>
               <div className="flex flex-col items-center sm:items-start text-sm text-background/50 font-bold uppercase tracking-[0.2em]">
                 <span>No credit card required</span>
                 <span>PWA installable</span>
               </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
           <Zap className="absolute top-10 left-20 h-32 w-32" />
           <Target className="absolute bottom-20 right-40 h-48 w-48" />
           <Brain className="absolute top-40 right-20 h-24 w-24" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 border-t bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="font-bold text-3xl text-foreground mb-6">Study<span className="text-primary">Hub</span></div>
          <p className="text-muted-foreground font-medium mb-10">Helping students solve 90% of their daily problems since 2026.</p>
          <div className="flex justify-center gap-12 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="hover:text-primary transition-colors">Discord</a>
             <a href="#" className="hover:text-primary transition-colors">Github</a>
          </div>
          <div className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.3em]">
            &copy; 2026 Focusly AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}




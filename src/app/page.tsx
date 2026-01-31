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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-8 text-xs font-black tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20"
            >
              Solve 90% of student daily problems
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-foreground leading-[0.9]">
              Master Your Studies,<br />
              <span className="text-gradient">Solve Your Struggles.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              The ultimate student-focused platform for guidance, structure, and progress tracking. 
              Find solutions, take action, and improve daily.
            </p>
            
            {/* Search Bar - Core Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-[24px] blur opacity-25 group-focus-within:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex items-center bg-card rounded-[22px] border border-border overflow-hidden">
                  <Search className="ml-6 h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text"
                    placeholder="What are you struggling with today? (e.g. 'can't focus')"
                    className="w-full h-20 pl-4 pr-32 bg-transparent text-foreground focus:outline-none transition-all font-bold text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-3 top-3 bottom-3 rounded-[14px] px-8 font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
                    onClick={() => console.log(`Searching for: ${searchQuery}`)}
                  >
                    SOLVE IT
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mr-2">Quick Access:</span>
                {problems.map((p) => (
                  <Button 
                    key={p}
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery(p)}
                    className="h-10 px-5 rounded-full bg-muted/50 text-xs font-black hover:bg-primary hover:text-white transition-all border-none"
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="xl" className="h-16 px-10 text-lg font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all" asChild>
                <Link href="/planner">Create Study Plan</Link>
              </Button>
              <Button size="xl" variant="outline" className="h-16 px-10 text-lg font-black rounded-2xl border-2 hover:bg-muted/50 hover:scale-105 active:scale-95 transition-all" asChild>
                <Link href="/tools">Explore Tools</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Fancy Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-[100px] animate-bounce duration-[10s]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>
      </section>

      {/* Problem of the Day Section */}
      <section className="py-24 border-y bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16 glass rounded-[48px] relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Sparkles className="h-16 w-16 text-yellow-500 animate-pulse" />
             </div>
             <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                  <Clock className="h-3 w-3" /> PROBLEM OF THE DAY
                </div>
                <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">"Studying but not remembering anything?"</h4>
                <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Try the <span className="text-foreground border-b-2 border-primary/30">Active Recall</span> method today. Spend 5 minutes explaining what you just learned to an imaginary friend.
                </p>
             </div>
             <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto relative z-10">
                <Button variant="outline" size="xl" className="w-full md:w-auto font-black rounded-2xl h-16 px-10 border-2" asChild>
                  <Link href="/tools">Learn More</Link>
                </Button>
                <Button variant="secondary" size="xl" className="w-full md:w-auto font-black rounded-2xl h-16 px-10 shadow-xl shadow-secondary/20" onClick={() => alert("Daily problem marked as solved!")}>
                  Mark as Solved ✅
                </Button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section id="features" className="py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Your Success Ecosystem</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">Everything a student needs to excel, organized in one powerful hub.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                id={feature.id}
                className="group relative p-12 rounded-[40px] border bg-card hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => window.location.href = `/${feature.id === 'problem-solver' ? 'problems' : feature.id}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10", feature.color)}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors relative z-10">{feature.title}</h3>
                <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-10 relative z-10 transition-colors group-hover:text-foreground">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm font-black text-primary gap-2 group-hover:gap-4 transition-all relative z-10">
                  Launch {feature.title} <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Mode Section */}
      <section className="py-40 bg-card border-y relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 text-red-600 font-black text-xs mb-10 shadow-sm uppercase tracking-[0.2em] border border-red-100"
              >
                <Zap className="h-4 w-4 animate-pulse fill-current" /> 2,450 students are focusing right now
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none">Enter the Flow Zone</h2>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-16 md:p-24 mb-16 bg-background rounded-[64px] border-8 border-muted shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative group overflow-hidden"
              >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="text-9xl md:text-[12rem] font-mono font-black tracking-tighter mb-12 text-foreground leading-none relative z-10 tabular-nums">
                    25:00
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <Button size="xl" className="h-20 px-12 text-xl font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all" asChild>
                      <Link href="/focus">Start Focus Session</Link>
                    </Button>
                    <Button size="icon" variant="outline" className="h-20 w-20 rounded-2xl border-4 hover:bg-red-50 hover:border-red-200 transition-all group/icon" onClick={() => console.log("Lofi radio toggled")}>
                      <HeartPulse className="h-8 w-8 text-red-500 group-hover/icon:scale-125 transition-transform" />
                    </Button>
                  </div>
              </motion.div>
              <p className="text-muted-foreground text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                Built-in Pomodoro, site blocker, and lof-fi tracks to keep you in the zone.
              </p>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-secondary/5 to-transparent pointer-events-none" />
      </section>

      {/* Motivation Grid */}
      <section id="community" className="py-40 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {/* Leaderboard */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 p-12 bg-card rounded-[48px] border shadow-2xl flex flex-col relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16" />
                 <h3 className="text-3xl font-black mb-10 flex items-center gap-3 relative z-10">
                    <Trophy className="h-8 w-8 text-yellow-500" /> Weekly Streaks
                 </h3>
                 <div className="space-y-6 flex-1 relative z-10">
                    {[
                      { name: "Alex R.", streak: "42 days", xp: "12,450" },
                      { name: "Sarah M.", streak: "38 days", xp: "11,200" },
                      { name: "Kevin L.", streak: "35 days", xp: "9,800" },
                      { name: "Emily W.", streak: "31 days", xp: "8,900" },
                    ].map((user, i) => (
                      <motion.div 
                        whileHover={{ x: 10 }}
                        key={user.name} 
                        className="flex items-center justify-between p-5 rounded-3xl bg-muted/30 border border-transparent hover:border-border hover:bg-card hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-4">
                           <span className="font-black text-muted-foreground text-sm w-4">{i+1}</span>
                           <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-sm text-lg">{user.name[0]}</div>
                           <span className="font-black text-lg">{user.name}</span>
                        </div>
                        <div className="text-right">
                           <div className="text-orange-500 font-black text-base">🔥 {user.streak}</div>
                           <div className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em]">{user.xp} XP</div>
                        </div>
                      </motion.div>
                    ))}
                 </div>
                 <Button className="w-full mt-10 h-16 font-black rounded-2xl text-lg relative z-10" variant="outline" onClick={() => console.log("Opening leaderboards")}>
                   View All Leaderboards
                 </Button>
              </motion.div>

              {/* Community Question */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 p-12 md:p-20 bg-foreground text-background rounded-[48px] relative overflow-hidden group shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]"
              >
                 <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">Ask the Collective</h3>
                    <p className="text-background/70 mb-12 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">Stuck on a concept? Need advice? The collective student brain is here to help.</p>
                    <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-10 border border-white/10 mb-12 flex-1">
                       <div className="text-[10px] font-black text-primary mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" /> TRENDING TOPIC
                        </div>
                       <h4 className="font-black text-2xl md:text-3xl mb-6 leading-tight">"How do you guys stop procrastinating on big projects? I feel so overwhelmed!"</h4>
                       <div className="flex flex-wrap items-center gap-10">
                          <span className="flex items-center gap-3 text-sm font-black opacity-80 uppercase tracking-widest"><Users className="h-5 w-5" /> 24 Answers</span>
                          <span className="flex items-center gap-3 text-sm font-black text-primary uppercase tracking-widest leading-none"><Zap className="h-5 w-5 fill-primary" /> AI Answer ready</span>
                       </div>
                    </div>
                    <Button size="xl" className="h-20 px-12 bg-primary text-white hover:bg-primary/90 font-black rounded-2xl shadow-2xl shadow-primary/40 self-start text-xl" asChild>
                      <Link href="/community">Ask Your Question Now</Link>
                    </Button>
                 </div>
                 <Users className="absolute bottom-[-60px] right-[-60px] h-96 w-96 text-white/5 -rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-40">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-24 max-w-7xl mx-auto">
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
               >
                  <div className="inline-block px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] mb-10 tracking-[0.3em] uppercase border border-blue-100">WELLNESS CHECK</div>
                  <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">Burnout is real. We've got your back.</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-medium">
                    Our system monitors your study patterns. If you're overworking, we'll suggest a break or connect you with relief exercises.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {[
                       "Weekly mood tracking",
                       "Guided breathing",
                       "Burnout alert system",
                       "Positive affirmations"
                     ].map(item => (
                       <div key={item} className="flex items-center gap-4 font-black text-lg">
                          <div className="h-10 w-10 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-6 w-6 text-secondary" />
                          </div>
                          {item}
                       </div>
                     ))}
                  </div>
                  <Button size="xl" variant="outline" className="mt-16 h-18 px-10 group font-black rounded-2xl border-2 text-lg hover:bg-muted/50 transition-all" asChild>
                    <Link href="/mental-health">Explore Wellness <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" /></Link>
                  </Button>
               </motion.div>
               <motion.div 
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 p-12 md:p-20 bg-muted/50 rounded-[64px] border relative shadow-inner overflow-hidden"
               >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-10 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-2 mb-10 rotate-3 hover:rotate-0 transition-all duration-700 relative z-10"
                  >
                     <div className="flex items-center gap-6 mb-8">
                        <div className="h-16 w-16 rounded-2xl bg-destructive/10 flex items-center justify-center">
                          <HeartPulse className="h-10 w-10 text-destructive animate-pulse" />
                        </div>
                        <div>
                           <div className="font-black text-2xl tracking-tight">Burnout Alert</div>
                           <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">AI Safety System</div>
                        </div>
                     </div>
                     <p className="text-xl font-medium leading-relaxed mb-10">
                       "Hey Alex, you've studied for 6 hours straight without a proper break. Your focus score is dropping. How about a 15-minute walk?"
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="flex-1 h-16 bg-secondary text-white font-black rounded-2xl hover:bg-secondary/90 shadow-xl shadow-secondary/20" onClick={() => console.log("Break accepted")}>Accept Break</Button>
                        <Button size="xl" variant="ghost" className="flex-1 h-16 font-black rounded-2xl" onClick={() => console.log("Alert ignored")}>Ignore</Button>
                     </div>
                  </motion.div>
                  <div className="absolute top-12 right-12 bg-yellow-400 text-black px-6 py-2 rounded-full text-xs font-black tracking-[0.2em] shadow-xl z-20">AI COACH</div>
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-[10rem] font-black mb-12 tracking-tighter max-w-5xl mx-auto leading-[0.8] py-4">Ready to transform?</h2>
            <p className="text-2xl md:text-3xl text-background/60 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
              Join 50,000+ students where problems meet solutions and focus becomes a superpower.
            </p>
            <div className="flex flex-col items-center gap-12">
               <Button 
                size="xl" 
                className="h-24 px-16 text-2xl font-black rounded-[32px] shadow-[0_40px_80px_-15px_rgba(255,255,255,0.2)] bg-white text-primary hover:bg-white/95 scale-100 hover:scale-105 active:scale-95 transition-all"
                onClick={() => console.log("Starting onboarding flow")}
               >
                 GET STARTED FOR FREE
               </Button>
               <div className="flex flex-col sm:flex-row items-center gap-8 text-[10px] text-background/40 font-black uppercase tracking-[0.3em]">
                 <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> No credit card required</span>
                 <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Unlimited free sessions</span>
                 <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> PWA installable</span>
               </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <Zap className="absolute top-20 left-[10%] h-64 w-64 rotate-12" />
           <Target className="absolute bottom-20 right-[15%] h-80 w-80 -rotate-12" />
           <Brain className="absolute top-[30%] right-[10%] h-48 w-48 rotate-45" />
           <Sparkles className="absolute bottom-[40%] left-[20%] h-32 w-32" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-32 border-t bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-10 group cursor-pointer">
            <div className="h-12 w-12 rounded-[18px] bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
              <Zap className="h-7 w-7 text-white fill-current" />
            </div>
            <div className="font-black text-4xl text-foreground tracking-tighter">STUDY<span className="text-primary">HUB</span></div>
          </div>
          <p className="text-muted-foreground text-lg font-medium mb-16 max-w-sm mx-auto">Helping students solve 90% of their daily problems with science-backed tools.</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-16">
             {["Twitter", "Discord", "Github", "Privacy", "Terms"].map(link => (
               <a key={link} href="#" className="hover:text-primary transition-all hover:scale-110">{link}</a>
             ))}
          </div>
          <div className="h-px w-full bg-border mb-16" />
          <div className="text-[10px] text-muted-foreground/50 font-black uppercase tracking-[0.5em]">
            &copy; 2026 FOCUSLY AI. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-muted/20 -z-10" />
      </footer>
    </div>
  );
}




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
  BarChart3
} from"lucide-react";
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
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Solve 90% of student daily problems
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Master Your Studies, <br />
              <span className="text-primary">Solve Your Struggles.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              The ultimate student-focused platform for guidance, structure, and progress tracking. 
              Find solutions, take action, and improve daily.
            </p>
            
            {/* Search Bar - Core Feature */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="text"
                  placeholder="What are you struggling with today? (e.g. 'can't focus')"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button size="default" className="absolute right-2 top-2 rounded-xl">
                  Solve It
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground mr-2">Popular:</span>
                {problems.map((p) => (
                  <Button 
                    key={p}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(p)}
                    className="h-8 px-3 rounded-full bg-muted/50 border-none hover:bg-primary transition-all"
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/planner">Create Study Plan</Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-card rounded-3xl border shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <Sparkles className="h-8 w-8 text-yellow-500 animate-bounce" />
             </div>
             <div className="flex-1">
                <h3 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" /> PROBLEM OF THE DAY
                </h3>
                <h4 className="text-2xl font-bold mb-3">"Studying but not remembering anything?"</h4>
                <p className="text-muted-foreground mr-4">Try the Active Recall method today. Spend 5 minutes explaining what you just learned to an imaginary friend.</p>
             </div>
             <div className="flex items-center gap-3">
                <Button variant="outline" asChild>
                  <a href="/tools">Learn More</a>
                </Button>
                <Button variant="secondary">Mark as Solved ✅</Button>
             </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Your Success Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything a student needs to excel, organized in one powerful hub.</p>
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
                className="group relative p-8 rounded-3xl border bg-card hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform", feature.color)}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                  Launch {feature.title} <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Mode Section */}
      <section className="py-24 bg-card border-y relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-6">
                <Zap className="h-4 w-4" /> 2,450 students are focusing right now
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Enter the Flow Zone</h2>
              <div className="p-12 mb-8 bg-background rounded-3xl border shadow-2xl relative">
                  <div className="text-8xl md:text-9xl font-mono font-bold tracking-tighter mb-8 text-foreground leading-none">
                    25:00
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button size="xl" className="shadow-xl shadow-primary/20">Start Focus Session</Button>
                    <Button size="icon" variant="outline" className="rounded-full border-2"><HeartPulse className="h-6 w-6 text-red-500" /></Button>
                  </div>
              </div>
              <p className="text-muted-foreground text-lg">
                Built-in Pomodoro, site blocker, and lo-fi radio to keep you in the zone.
              </p>
           </div>
        </div>
      </section>

      {/* Motivation Grid */}
      <section id="community" className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Leaderboard */}
              <div className="lg:col-span-1 p-8 bg-card rounded-3xl border">
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" /> Weekly Streaks
                 </h3>
                 <div className="space-y-4">
                    {[
                      { name:"Alex R.", streak:"42 days", xp:"12,450" },
                      { name:"Sarah M.", streak:"38 days", xp:"11,200" },
                      { name:"Kevin L.", streak:"35 days", xp:"9,800" },
                      { name:"Emily W.", streak:"31 days", xp:"8,900" },
                    ].map((user, i) => (
                      <div key={user.name} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                        <div className="flex items-center gap-3">
                           <span className="font-bold text-muted-foreground w-4">{i+1}</span>
                           <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">{user.name[0]}</div>
                           <span className="font-semibold">{user.name}</span>
                        </div>
                        <div className="text-right">
                           <div className="text-orange-500 font-bold text-sm">🔥 {user.streak}</div>
                           <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{user.xp} XP</div>
                        </div>
                      </div>
                    ))}
                 </div>
                 <Button className="w-full mt-6" variant="outline">View All Leaderboards</Button>
              </div>

              {/* Community Question */}
              <div className="lg:col-span-2 p-8 bg-primary rounded-3xl text-primary-foreground relative overflow-hidden group">
                 <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 drop-shadow-md">Ask the Community</h3>
                    <p className="text-primary-foreground/80 mb-8 text-lg underline">Stuck on a concept? Need advice? The collective student brain is here to help.</p>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
                       <h4 className="font-bold text-xl mb-2">Latest Question:</h4>
                       <p className="mb-4">"How do you guys stop procrastinating on big projects like theses? I feel so overwhelmed!"</p>
                       <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-sm"><Users className="h-4 w-4" /> 24 Answers</span>
                          <span className="flex items-center gap-1 text-sm"><Zap className="h-4 w-4" /> AI Answer ready</span>
                       </div>
                    </div>
                    <Button size="xl" variant="secondary" className="shadow-lg shadow-black/10">Ask Your Question Now</Button>
                 </div>
                 <Users className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/5 -rotate-12" />
              </div>
           </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-24 border-t">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
               <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold mb-6">Mental Health Check</div>
                  <h2 className="text-4xl font-bold mb-6">Burnout is real. We've got your back.</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our system monitors your study patterns. If you're overworking, we'll suggest a break, 
                    a lighter plan, or connect you with stress relief exercises.
                  </p>
                  <div className="space-y-4">
                     {[
                   "Weekly mood tracking",
                   "Guided breathing & meditation",
                   "Burnout alert system",
                   "Positive affirmations"
                     ].map(item => (
                       <div key={item} className="flex items-center gap-3 font-semibold">
                          <CheckCircle2 className="h-5 w-5 text-secondary" /> {item}
                       </div>
                     ))}
                  </div>
               </div>
               <div className="w-full md:w-1/2 p-12 bg-muted rounded-3xl border relative">
                  <div className="bg-card p-6 rounded-3xl shadow-xl border mb-6 rotate-2 transition-transform hover:rotate-0">
                     <div className="flex items-center gap-4 mb-4">
                        <HeartPulse className="h-8 w-8 text-red-500" />
                        <div>
                           <div className="font-bold">Burnout Alert</div>
                           <div className="text-xs text-muted-foreground">System Alert</div>
                        </div>
                     </div>
                     <p className="text-sm font-medium">"Hey Alex, you've studied for 6 hours straight without a proper break. Your focus score is dropping. How about a 15-minute walk?"</p>
                     <div className="mt-4 flex gap-2">
                        <Button size="sm" className="bg-secondary text-white">Accept Break</Button>
                        <Button size="sm" variant="ghost">Ignore</Button>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">AI COACH</div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your student life?</h2>
          <p className="text-xl text-background/70 mb-12 max-w-2xl mx-auto">
            Join the hub where problems meet solutions and students become top achievers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Button size="xl" variant="secondary" className="text-primary font-bold shadow-2xl shadow-primary/40 bg-white hover:bg-white/90">Get Started for Free</Button>
             <span className="text-sm text-background/50 font-medium">No credit card required. PWA installable.</span>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="font-bold text-foreground mb-4">Study<span className="text-primary">Hub</span></div>
          <p className="text-sm">Helping students solve 90% of their daily problems since 2026.</p>
        </div>
      </footer>
    </div>
  );
}



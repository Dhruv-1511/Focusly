"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { 
  BarChart3, 
  Clock, 
  Trophy, 
  Flame, 
  Target, 
  Plus, 
  ArrowRight,
  Brain,
  Zap,
  CheckCircle2
} from"lucide-react";
import { Button } from"@/components/ui/button";
import { MOCK_STUDY_PLAN } from"@/data/mock";

export default function Dashboard() {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Student Dashboard</h1>
        <p className="text-muted-foreground">Your growth tracked, your problems solved.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard 
          icon={Clock} 
          label="Total Study Time" 
          value={`${MOCK_STUDY_PLAN.stats.hoursStudied}h`} 
          sub="+12% from last week"
          color="text-blue-500"
        />
        <StatCard 
          icon={Flame} 
          label="Current Streak" 
          value={`${MOCK_STUDY_PLAN.stats.focusStreak} Days`} 
          sub="Personal Best: 24"
          color="text-orange-500"
        />
        <StatCard 
          icon={Trophy} 
          label="Experience Points" 
          value={`${MOCK_STUDY_PLAN.stats.xp} XP`} 
          sub="Level 15 (Pro)"
          color="text-primary"
        />
        <StatCard 
          icon={Target} 
          label="Daily Goal" 
          value="85%" 
          sub="4/5 sessions complete"
          color="text-secondary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Schedule */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-card rounded-2xl border p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" /> Today's Focus Plan
              </h2>
              <Button size="sm" variant="outline" className="gap-2">
                <Plus className="h-4 w-4" /> Edit Plan
              </Button>
            </div>
            
            <div className="space-y-4">
              {MOCK_STUDY_PLAN.daily.map((task, i) => (
                <div key={i} className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                  <div className="text-sm font-bold text-muted-foreground w-20">{task.time}</div>
                  <div className="flex-1">
                    <div className="font-bold flex items-center gap-2">
                       {task.task}
                       {i === 0 && <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Success</span>}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Type: {task.type}</div>
                  </div>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-secondary"><CheckCircle2 className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-primary"><ArrowRight className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="secondary" size="xl" className="w-full mt-8">
              Start Focused Work Session
            </Button>
          </section>

          {/* Quick Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <ToolCard title="Smart Recall" desc="Revise physics notes" icon={Zap} color="bg-orange-500" />
             <ToolCard title="Mock Generator" desc="Biology practice test" icon={Target} color="bg-blue-500" />
          </div>
        </div>

        {/* Sidebar widgets */}
        <div className="space-y-8">
           {/* Mental Health Widget */}
           <div className="bg-primary rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
              <h3 className="text-xl font-bold mb-4">Mood System</h3>
              <p className="text-sm text-primary-foreground/80 mb-6 font-medium leading-relaxed">How are you feeling today? We adjust your plan based on your energy levels.</p>
              <div className="flex gap-2 mb-8">
                 {['😊', '😐', '😔', '🤯'].map(emoji => (
                   <Button key={emoji} variant="ghost" className="flex-1 h-12 bg-white/10 hover:bg-white/20 text-2xl transition-all shadow-inner border-none">
                     {emoji}
                   </Button>
                 ))}
              </div>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                 <div className="text-[10px] uppercase font-bold tracking-widest mb-1">AI Recommendation</div>
                 <div className="text-sm font-bold">"You seem consistent. Today is a high-load day. Keep water nearby!"</div>
              </div>
           </div>

           {/* Badges / Rewards */}
           <div className="bg-card rounded-2xl border p-8">
              <h3 className="text-xl font-bold mb-6">Recent Rewards</h3>
              <div className="flex flex-wrap gap-4">
                 {MOCK_STUDY_PLAN.stats.badges.map(badge => (
                   <div key={badge} className="group relative">
                      <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-2xl grayscale group-hover:grayscale-0 transition-all cursor-help border shadow-sm">
                        🏅
                      </div>
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap font-bold transition-opacity">
                        {badge}
                      </div>
                   </div>
                 ))}
              </div>
              <Button variant="link" className="p-0 mt-6 h-auto text-primary font-bold" asChild>
                <Link href="/rewards">View full profile</Link>
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card p-6 rounded-2xl border shadow-sm flex flex-col justify-between"
    >
      <div className={`${color} bg-current/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-[10px] text-muted-foreground mt-1 font-bold">{sub}</div>
      </div>
    </motion.div>
  );
}

function ToolCard({ title, desc, icon: Icon, color }: any) {
  return (
    <div className="bg-card border p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all cursor-pointer group">
      <div className={`${color} h-12 w-12 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}




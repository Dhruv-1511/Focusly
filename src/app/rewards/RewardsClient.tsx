"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  Target, 
  Zap, 
  Star, 
  Crown, 
  Award, 
  Flame, 
  Lock,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FocuslyModal } from "@/components/ui/FocuslyModal";
import { cn } from "@/lib/utils";

const badges = [
  { name: "Early Bird", desc: "Start 5 focus sessions before 8 AM", icon: "🌅", locked: false },
  { name: "Deep Diver", desc: "4 hours of deep focus in one day", icon: "🌊", locked: false },
  { name: "Focus King", desc: "Maintain a 14-day study streak", icon: "👑", locked: false },
  { name: "AI Architect", desc: "Create 10 AI study plans", icon: "🤖", locked: true },
  { name: "Community", desc: "Answer 10 helper questions", icon: "🤝", locked: true },
  { name: "Balance", desc: "Complete 20 breathing sessions", icon: "🧘", locked: true },
];

export default function RewardsPage() {
  const [modal, setModal] = useState<{ open: boolean; title: string; message: string; type: "info" | "success" | "warning" }>({
    open: false,
    title: "",
    message: "",
    type: "info"
  });

  const handleResetChallenge = () => {
    setModal({
      open: true,
      title: "Challenges Reset",
      message: "New daily challenges will be available in 4h 22m! Keep pushing your limits.",
      type: "info"
    });
  };

  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Performance Achievements</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Rewards <span className="text-primary italic">Center</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          Gamify your education. Earn XP, rank up, and unlock exclusive neural optimization rewards.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8 space-y-8">
           {/* Progress Section */}
           <section className="glass rounded-[3rem] p-10 md:p-14 relative overflow-hidden group border-white/5 h-fit">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                 <Trophy className="h-64 w-64 text-primary" />
              </div>
              
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-12 relative z-10">
                 <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                       <Activity className="h-3 w-3" /> Growth Progress
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
                       <span className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">Level 15</span>
                       <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Pro Squad</span>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-[11px] font-bold mb-2 uppercase tracking-wide text-muted-foreground/80">Next Level: 16</div>
                    <div className="text-2xl font-bold text-white tracking-tight">2,450 <span className="text-muted-foreground text-sm">/ 3,000 XP</span></div>
                 </div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full relative mb-12 overflow-hidden border border-white/5">
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_20px_rgba(99,102,241,0.3)] rounded-full" 
                 />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5 relative z-10">
                 <StatItem label="Study Streak" value="12 Days" icon={Flame} color="text-orange-500" />
                 <StatItem label="Tasks Fixed" value="142" icon={Target} color="text-secondary" />
                 <StatItem label="Focus Hours" value="234h" icon={Zap} color="text-blue-500" />
                 <StatItem label="Global Rank" value="#124" icon={TrendingUp} color="text-purple-500" />
              </div>
           </section>

           {/* Badges Grid */}
           <section className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-4 px-2">
                 Neural Achievement Badges
                 <div className="h-px bg-white/5 flex-1" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 {badges.map((badge, i) => (
                   <motion.div 
                    key={i} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "p-8 rounded-3xl border transition-all relative overflow-hidden flex flex-col items-center text-center",
                      badge.locked 
                        ? "bg-white/2 border-white/5 opacity-50" 
                        : "glass border-white/5 hover:border-white/20 cursor-pointer"
                    )}
                   >
                      <div className="text-5xl mb-6 relative z-10">{badge.icon}</div>
                      <h4 className="text-lg font-bold mb-2 text-white tracking-tight">{badge.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-semibold leading-relaxed px-4">{badge.desc}</p>
                      {badge.locked && (
                        <div className="absolute top-4 right-4 text-muted-foreground/60">
                           <Lock className="h-4 w-4" />
                        </div>
                      )}
                   </motion.div>
                 ))}
              </div>
           </section>
        </div>

        <div className="lg:col-span-4 space-y-6">
            {/* Daily Challenges */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group border-primary/20 bg-primary/5">
               <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" /> Daily Protocol
               </h3>
               <div className="space-y-4">
                  <Challenge title="Deep Diver" xp="+250" progress={75} />
                  <Challenge title="Focus Master" xp="+150" progress={100} completed />
                  <Challenge title="Late Night Rev." xp="+300" progress={0} />
               </div>
               <Button 
                size="lg"
                className="w-full mt-10 bg-primary text-white hover:bg-primary/90 rounded-2xl font-bold text-xs transition-all shadow-xl shadow-primary/20" 
                onClick={handleResetChallenge}
               >
                  Reset in 4h 22m
               </Button>
            </div>

           {/* Leaderboard Snippet */}
            <div className="glass p-8 rounded-3xl">
               <h3 className="text-lg font-bold mb-8">Academy Rank</h3>
               <div className="space-y-3 mb-8">
                  <LeaderItem rank={1} name="kevin_s" xp="125,450" />
                  <LeaderItem rank={2} name="sarah_l" xp="98,200" />
                  <LeaderItem rank={3} name="YOU" xp="2,450" active />
               </div>
               <Button variant="ghost" className="w-full h-12 rounded-xl border border-white/5 font-bold text-[10px] tracking-wider text-muted-foreground hover:text-white" onClick={() => setModal({
                 open: true,
                 title: "Full Leaderboard",
                 message: "The global leaderboard is updating. You are currently in the top 5% of active students!",
                 type: "info"
               })}>
                  Expand Rankings <ArrowRight className="ml-2 h-3 w-3" />
               </Button>
            </div>

            {/* Prize Box */}
            <div 
              className="bg-linear-to-br from-indigo-600 via-primary to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-primary/30"
              onClick={() => setModal({
                open: true,
                title: "Locked Achievement",
                message: "Mystery Reward Box unlocks at Level 20. Keep solving problems and maintaining your streak to claim it!",
                type: "warning"
              })}
            >
               <Crown className="h-8 w-8 mb-4 text-white fill-current" />
               <h3 className="text-2xl font-extrabold mb-1 tracking-tight">Mystery Box</h3>
               <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Unlocks at Level 20</p>
               <div className="absolute bottom-[-20px] right-[-20px] opacity-20 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700">
                  <Lock className="h-32 w-32" />
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

function StatItem({ label, value, icon: Icon, color }: any) {
  return (
    <div className="text-center md:text-left">
       <div className={`${color} mb-2 flex items-center justify-center md:justify-start`}>
          <Icon className="h-5 w-5" />
       </div>
       <div className="text-2xl font-bold tracking-tight text-white">{value}</div>
        <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">{label}</div>
    </div>
  );
}

function Challenge({ title, xp, progress, completed }: any) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
       <div className="flex justify-between items-center mb-3">
          <div className="text-xs font-bold flex items-center gap-3 text-white">
             {completed ? <CheckCircle2 className="h-4 w-4 text-secondary" /> : <div className="h-3.5 w-3.5 rounded border border-white/20" />}
             {title}
          </div>
          <div className="text-[10px] font-bold text-primary uppercase">{xp} XP</div>
       </div>
       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-px">
          <div className="h-full bg-primary transition-all duration-1000 rounded-full" style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
}

function LeaderItem({ rank, name, xp, active }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-3.5 rounded-2xl border transition-all",
      active ? "bg-primary/20 border-primary/20 text-white shadow-lg" : "bg-white/5 border-transparent text-muted-foreground"
    )}>
       <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold w-4">{rank}</span>
          <span className="text-xs font-bold">{name}</span>
       </div>
       <span className="text-[10px] font-bold text-primary">{xp} XP</span>
    </div>
  );
}



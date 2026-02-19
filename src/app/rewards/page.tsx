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
  { name: "Consistency King", desc: "Maintain a 14-day study streak", icon: "👑", locked: false },
  { name: "AI Whisperer", desc: "Create 10 AI study plans", icon: "🤖", locked: true },
  { name: "Social Scholar", desc: "Answer 10 community questions", icon: "🤝", locked: true },
  { name: "Stress Master", desc: "Complete 20 breathing sessions", icon: "🧘", locked: true },
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
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-black mb-2 text-white italic uppercase tracking-tight">Focusly Achievements</h1>
        <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Gamify your education. Earn XP, rank up, and unlock your potential.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
           {/* Progress Section */}
           <section className="glass-card rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group border-white/5">
              <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                 <Trophy className="h-64 w-64 text-primary" />
              </div>
              
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-12 relative z-10">
                 <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
                       <Activity className="h-3 w-3 text-primary" /> Performance metrics
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
                       <span className="text-5xl sm:text-8xl font-black tracking-tighter italic text-white uppercase leading-none">LEVEL 15</span>
                       <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full border border-primary/20">PRO SQUAD</span>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black mb-2 uppercase tracking-widest text-muted-foreground">Threshold to 16</div>
                    <div className="text-3xl font-black text-white italic tracking-tighter">2,450 / 3,000 XP</div>
                 </div>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full relative mb-12 overflow-hidden border border-white/5 p-0.5 z-10">
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    className="absolute inset-y-0.5 left-0.5 bg-linear-to-r from-primary to-indigo-500 shadow-[0_0_15px_var(--primary)] rounded-full" 
                 />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5 relative z-10">
                 <StatItem label="Study Streak" value="12 Days" icon={Flame} color="text-orange-500" />
                 <StatItem label="Tasks Fixed" value="142" icon={Target} color="text-secondary" />
                 <StatItem label="Focus Hours" value="234h" icon={Zap} color="text-blue-500" />
                 <StatItem label="Global Rank" value="#124" icon={TrendingUp} color="text-purple-500" />
              </div>
           </section>

           {/* Badges Grid */}
           <section>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground mb-10 flex items-center gap-4">
                 <div className="h-px bg-white/10 flex-1" />
                 <span className="flex items-center gap-3"><Award className="h-5 w-5 text-primary" /> NEURAL BADGES</span>
                 <div className="h-px bg-white/10 flex-1" />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                 {badges.map((badge, i) => (
                   <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -5 }}
                    className={cn(
                      "p-10 rounded-[2.5rem] border transition-all group relative overflow-hidden shimmer flex flex-col items-center text-center",
                      badge.locked 
                        ? "bg-white/5 border-white/5 opacity-40 grayscale" 
                        : "glass-card border-white/10 hover:border-primary/40 cursor-pointer"
                    )}
                   >
                      <div className="text-6xl mb-8 relative z-10 transition-transform group-hover:scale-110 drop-shadow-2xl">{badge.icon}</div>
                      <h3 className="text-xl font-black mb-3 relative z-10 uppercase tracking-tight italic text-white">{badge.name}</h3>
                      <p className="text-[10px] text-muted-foreground font-medium relative z-10 uppercase tracking-widest leading-relaxed">{badge.desc}</p>
                      {badge.locked && (
                        <div className="absolute top-6 right-6 text-muted-foreground/40">
                           <Lock className="h-5 w-5" />
                        </div>
                      )}
                   </motion.div>
                 ))}
              </div>
           </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
            {/* Daily Challenges */}
            <div className="glass-card rounded-[3rem] p-10 relative overflow-hidden group border-primary/20 bg-primary/5">
               <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 blur-[60px] rounded-full group-hover:blur-[80px] transition-all" />
               <h3 className="text-xl font-black mb-10 flex items-center gap-3 uppercase tracking-tighter italic text-white">
                  <Star className="h-5 w-5 text-primary fill-primary" /> DAILY PROTOCOL
               </h3>
               <div className="space-y-5">
                  <Challenge title="Deep Diver" xp="+250" progress={75} />
                  <Challenge title="Focus Master" xp="+150" progress={100} completed />
                  <Challenge title="Late Night Rev." xp="+300" progress={0} />
               </div>
               <Button 
                size="xl"
                className="w-full mt-10 bg-primary text-white hover:scale-[1.02] rounded-2xl font-black uppercase text-[10px] tracking-widest border-none transition-all" 
                onClick={handleResetChallenge}
               >
                  RESET IN 4H 22M
               </Button>
            </div>

           {/* Leaderboard Snippet */}
            <div className="glass-card rounded-[3rem] p-10 relative overflow-hidden group">
               <h3 className="text-xl font-black mb-10 uppercase tracking-tighter italic text-white">ACADEMY RANK</h3>
               <div className="space-y-4 mb-10">
                  <LeaderItem rank={1} name="KEVIN_S" xp="125,450" />
                  <LeaderItem rank={2} name="SARAH_L" xp="98,200" />
                  <LeaderItem rank={3} name="YOU" xp="2,450" active />
               </div>
               <Button variant="outline" className="w-full h-14 rounded-2xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest border-white/10 hover:bg-white/5 transition-all" onClick={() => setModal({
                 open: true,
                 title: "Full Leaderboard",
                 message: "The global leaderboard is updating. You are currently in the top 5% of active students!",
                 type: "info"
               })}>
                  EXPAND RANKINGS <ArrowRight className="h-4 w-4" />
               </Button>
            </div>

            {/* Prize Box */}
            <div 
              className="bg-linear-to-br from-yellow-400 to-orange-500 rounded-[2.5rem] p-10 text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-orange-500/20"
              onClick={() => setModal({
                open: true,
                title: "Locked Achievement",
                message: "Mystery Reward Box unlocks at Level 20. Keep solving problems and maintaining your streak to claim it!",
                type: "warning"
              })}
            >
               <Crown className="h-10 w-10 mb-6 text-white fill-white" />
               <h3 className="text-2xl font-black mb-2 uppercase tracking-tight italic">Mystery Box</h3>
               <p className="text-[10px] font-black text-white/80 uppercase tracking-widest">Unlocks at Level 20</p>
               <div className="absolute bottom-[-20px] right-[-20px] opacity-20 group-hover:scale-125 transition-transform duration-700">
                  <Lock className="h-40 w-40" />
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
       <div className={`${color} mb-3 flex items-center justify-center md:justify-start`}>
          <Icon className="h-5 w-5" />
       </div>
       <div className="text-2xl font-black italic text-white tracking-tighter">{value}</div>
       <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Challenge({ title, xp, progress, completed }: any) {
  return (
    <div className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-white/10 transition-all group/challenge">
       <div className="flex justify-between items-center mb-3">
          <div className="text-xs font-black flex items-center gap-3 uppercase tracking-tight text-white italic">
             {completed ? <CheckCircle2 className="h-4 w-4 text-secondary" /> : <div className="h-4 w-4 rounded-lg border border-white/20" />}
             {title}
          </div>
          <div className="text-[9px] font-black text-primary uppercase tracking-widest">{xp} XP</div>
       </div>
       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
          <div className="h-full bg-primary transition-all duration-1000 shadow-[0_0_10px_var(--primary)] rounded-full" style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
}

function LeaderItem({ rank, name, xp, active }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-4 rounded-2xl border transition-all",
      active ? "bg-primary/20 border-primary/20 text-white shadow-lg" : "bg-white/5 border-transparent text-muted-foreground"
    )}>
       <div className="flex items-center gap-4">
          <span className="text-[10px] font-black w-4 italic">{rank}</span>
          <span className="text-xs font-black uppercase tracking-widest">{name}</span>
       </div>
       <span className="text-[10px] font-black italic text-primary">{xp} XP</span>
    </div>
  );
}

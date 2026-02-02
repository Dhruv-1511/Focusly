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
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { name: "Early Bird", desc: "Start 5 focus sessions before 8 AM", icon: "🌅", locked: false },
  { name: "Deep Diver", desc: "4 hours of deep focus in one day", icon: "🌊", locked: false },
  { name: "Consistency King", desc: "Maintain a 14-day study streak", icon: "👑", locked: false },
  { name: "AI Whisperer", desc: "Create 10 AI study plans", icon: "🤖", locked: true },
  { name: "Social Scholar", desc: "Answer 10 community questions", icon: "🤝", locked: true },
  { name: "Stress Master", desc: "Complete 20 breathing sessions", icon: "🧘", locked: true },
];

export default function RewardsPage() {
  const handleResetChallenge = () => {
    console.log("Challenges reset requested");
    alert("New daily challenges will be available in 4h 22m!");
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-primary">Hall of Achievement</h1>
        <p className="text-muted-foreground">Gamify your education. Earn XP, rank up, and unlock your potential.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
           {/* Progress Section */}
           <section className="bg-card rounded-lg border shadow-sm p-6 sm:p-12 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-12">
                 <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Current Progress</div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                       <span className="text-5xl sm:text-7xl font-bold tracking-tighter">Level 15</span>
                       <span className="text-lg sm:text-xl font-bold text-primary">Professional Student</span>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-sm font-bold mb-1">XP to Level 16</div>
                    <div className="text-2xl font-bold text-primary">450 / 3000 XP</div>
                 </div>
              </div>
              <div className="h-4 w-full bg-muted rounded-lg relative mb-12 overflow-hidden shadow-inner">
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "15%" }}
                    className="absolute inset-y-0 left-0 bg-primary shadow-lg shadow-primary/40 rounded-lg" 
                 />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t">
                 <StatItem label="Study Streak" value="12" icon={Flame} color="text-orange-500" />
                 <StatItem label="Tasks Fixed" value="142" icon={Target} color="text-secondary" />
                 <StatItem label="Focus Hours" value="234" icon={Zap} color="text-blue-500" />
                 <StatItem label="Rank" value="#124" icon={TrendingUp} color="text-purple-500" />
              </div>
           </section>

           {/* Badges Grid */}
           <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <Award className="h-6 w-6 text-primary" /> Badge Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                 {badges.map((badge, i) => (
                   <div key={i} className={`p-8 rounded-lg border transition-all group relative overflow-hidden ${badge.locked ? 'bg-muted/30 grayscale opacity-60' : 'bg-card hover:shadow-xl hover:border-primary cursor-pointer'}`}>
                      <div className="text-5xl mb-6 relative z-10 transition-transform group-hover:scale-110">{badge.icon}</div>
                      <h3 className="text-lg font-bold mb-2 relative z-10">{badge.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium relative z-10">{badge.desc}</p>
                      {badge.locked && (
                        <div className="absolute top-4 right-4 text-muted-foreground">
                           <Lock className="h-4 w-4" />
                        </div>
                      )}
                      {!badge.locked && (
                         <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-primary/5 rounded-lg group-hover:scale-150 transition-transform" />
                      )}
                   </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-8">
           {/* Daily Challenges */}
           <div className="bg-foreground text-background rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                 <Star className="h-5 w-5 text-yellow-400" /> Daily Challenges
              </h3>
              <div className="space-y-4">
                 <Challenge title="Deep Diver" xp="+250" progress={75} />
                 <Challenge title="Focus Master" xp="+150" progress={100} completed />
                 <Challenge title="Late Night Revision" xp="+300" progress={0} />
              </div>
              <Button 
                variant="secondary"
                size="lg"
                className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white border border-white/10" 
                onClick={handleResetChallenge}
              >
                 Reset in 4h 22m
              </Button>
           </div>

           {/* Leaderboard Snippet */}
           <div className="bg-card rounded-lg border p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Top Academy Rank</h3>
              <div className="space-y-4 mb-6">
                 <LeaderItem rank={1} name="Kevin S." xp="125,450" />
                 <LeaderItem rank={2} name="Sarah L." xp="98,200" />
                 <LeaderItem rank={3} name="YOU" xp="2,450" active />
              </div>
              <Button variant="outline" className="w-full rounded-lg flex items-center gap-2 font-bold" onClick={() => console.log("Opening full leaderboard")}>
                 View Full Leaderboard <ArrowRight className="h-4 w-4" />
              </Button>
           </div>

           {/* Prize Box */}
           <div 
             className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 text-white relative overflow-hidden group cursor-pointer"
             onClick={() => alert("Keep solving problems to reach Level 20!")}
           >
              <Crown className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mystery Reward Box</h3>
              <p className="text-xs font-bold text-white/80">Available at Level 20</p>
              <div className="absolute bottom-[-10px] right-[-10px] opacity-20 group-hover:scale-125 transition-transform">
                 <Lock className="h-32 w-32" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value, icon: Icon, color }: any) {
  return (
    <div className="text-center md:text-left">
       <div className={`${color} mb-3 flex items-center justify-center md:justify-start`}>
          <Icon className="h-5 w-5" />
       </div>
       <div className="text-2xl font-bold">{value}</div>
       <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Challenge({ title, xp, progress, completed }: any) {
  return (
    <div className="p-4 bg-white/5 rounded-lg border border-white/10 group hover:border-white/30 transition-all">
       <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-bold flex items-center gap-2">
             {completed ? <CheckCircle2 className="h-4 w-4 text-secondary" /> : <div className="h-4 w-4 rounded-lg border border-white/20" />}
             {title}
          </div>
          <div className="text-xs font-bold text-primary">{xp} XP</div>
       </div>
       <div className="h-1.5 w-full bg-white/10 rounded-lg overflow-hidden">
          <div className={`h-full bg-primary transition-all duration-1000`} style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
}

function LeaderItem({ rank, name, xp, active }: any) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border transition-all ${active ? 'bg-primary/10 border-primary text-primary shadow-sm' : 'bg-muted/30 border-transparent'}`}>
       <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-muted-foreground w-4">{rank}</span>
          <span className="text-sm font-bold">{name}</span>
       </div>
       <span className="text-xs font-bold">{xp} XP</span>
    </div>
  );
}








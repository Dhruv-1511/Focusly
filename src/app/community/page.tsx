"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Trophy, Heart, Share2, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FEED_ITEMS = [
  { id: 1, user: "Alex J.", action: "completed a 4-hour focus session", time: "2m ago", xp: "+450 XP", avatar: "A" },
  { id: 2, user: "Sarah K.", action: "reached a 30-day streak", time: "15m ago", xp: "+1000 XP", avatar: "S" },
  { id: 3, user: "Marcus V.", action: "shared a new Biology mindmap", time: "1h ago", xp: "+200 XP", avatar: "M" },
  { id: 4, user: "Elena R.", action: "leveled up to 'Neural Master'", time: "3h ago", xp: "+500 XP", avatar: "E" },
];

const GUILDS = [
  { name: "Stem Squad", members: "12.4k", activity: "High", icon: "🧬" },
  { name: "Night Owls", members: "8.1k", activity: "Medium", icon: "🦉" },
  { name: "Code Masters", members: "5.2k", activity: "Very High", icon: "💻" },
  { name: "Creative Minds", members: "7.8k", activity: "High", icon: "🎨" },
];

export default function CommunityPage() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto space-y-16">
      <header className="relative">
        <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Users className="h-3 w-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase text-primary tracking-widest">Global Neural Network</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] uppercase italic text-white">
          THE <br />
          <span className="text-gradient">COMMUNITY.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl font-medium">You are not alone. Synchronize with 50,000+ high-performance students worldwide.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Live Feed */}
        <div className="lg:col-span-8 space-y-8">
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
                <div className="h-1.5 w-12 bg-primary rounded-full" /> 
                Neural Pulse Feed
              </h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                 <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                 8,241 Online
              </div>
           </div>

           <div className="space-y-4">
              {FEED_ITEMS.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  className="glass-card p-6 rounded-[2rem] flex items-center gap-6 group hover:border-white/20 transition-all shimmer"
                >
                   <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl font-black text-white hover:scale-110 transition-transform">
                      {item.avatar}
                   </div>
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="font-black text-white uppercase tracking-tight italic">{item.user}</span>
                         <span className="text-[10px] text-muted-foreground uppercase font-medium">{item.time}</span>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">{item.action}</p>
                   </div>
                   <div className="text-right">
                      <div className="text-primary font-black italic tracking-tighter">{item.xp}</div>
                      <div className="flex gap-2 mt-2">
                         <button className="text-muted-foreground hover:text-primary transition-colors"><Heart className="h-4 w-4" /></button>
                         <button className="text-muted-foreground hover:text-primary transition-colors"><MessageSquare className="h-4 w-4" /></button>
                         <button className="text-muted-foreground hover:text-primary transition-colors"><Share2 className="h-4 w-4" /></button>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>

           <Button variant="outline" className="w-full h-16 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 font-black uppercase text-[10px] tracking-[0.2em] transform active:scale-95 transition-all">
              LOAD MORE NEURAL EVENTS
           </Button>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-8">
           {/* Guilds */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                 <Trophy className="h-32 w-32 text-primary" />
              </div>
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                 <Sparkles className="h-5 w-5 text-primary" /> ACTIVE GUILDS
              </h3>
              <div className="space-y-4">
                 {GUILDS.map((guild) => (
                   <div key={guild.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group/guild">
                      <div className="flex items-center gap-4">
                         <div className="text-2xl h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center group-hover/guild:scale-110 transition-transform">{guild.icon}</div>
                         <div>
                            <div className="text-xs font-black uppercase text-white tracking-widest">{guild.name}</div>
                            <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest mt-0.5">{guild.members} Members</div>
                         </div>
                      </div>
                      <div className={cn(
                        "text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest",
                        guild.activity === "Very High" ? "bg-emerald-500/20 text-emerald-400" : "bg-primary/20 text-primary"
                      )}>
                         {guild.activity}
                      </div>
                   </div>
                 ))}
              </div>
              <Button className="w-full mt-8 rounded-xl bg-primary text-white font-black uppercase text-[10px] tracking-widest h-12 border-none">JOIN A GUILD</Button>
           </div>

           {/* Leaderboard Snippet */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden bg-primary/5">
              <h3 className="text-xl font-black mb-10 flex items-center gap-3 uppercase tracking-tighter italic">
                 <TrendingUp className="h-5 w-5 text-primary" /> TOP OF FLOW
              </h3>
              <div className="space-y-6">
                 {[1,2,3].map(rank => (
                   <div key={rank} className="flex items-center gap-4 relative">
                      <div className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center font-black italic",
                        rank === 1 ? "bg-primary text-black" : "bg-white/5 text-muted-foreground"
                      )}>{rank}</div>
                      <div className="flex-1 font-black uppercase text-xs tracking-widest">STUDENT_{rank*12}</div>
                      <div className="text-xs font-black italic text-primary">{(4000 - rank * 500).toLocaleString()} XP</div>
                   </div>
                 ))}
              </div>
              <Button variant="link" className="w-full mt-10 p-0 h-auto font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors">VIEW FULL LEADERBOARD</Button>
           </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

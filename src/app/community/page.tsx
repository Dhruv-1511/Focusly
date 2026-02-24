"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Trophy, Heart, Share2, Sparkles, TrendingUp, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FocuslyModal } from "@/components/ui/FocuslyModal";

const FEED_ITEMS = [
  { id: 1, user: "Alex J.", action: "completed a 4-hour focus session", time: "2m ago", xp: "+450 XP", avatar: "A" },
  { id: 2, user: "Sarah K.", action: "reached a 30-day streak", time: "15m ago", xp: "+1000 XP", avatar: "S" },
  { id: 3, user: "Marcus V.", action: "shared a new Biology mindmap", time: "1h ago", xp: "+200 XP", avatar: "M" },
  { id: 4, user: "Elena R.", action: "leveled up to 'Neural Master'", time: "3h ago", xp: "+500 XP", avatar: "E" },
];

const GUILDS = [
  { name: "Stem Squad", members: "12.4k", activity: "High", icon: "🧬" },
  { name: "Night Owls", members: "8.1k", activity: "Medium", icon: "🦉" },
  { name: "Code Masters", members: "5.2k", activity: "Peak", icon: "💻" },
  { name: "Creative Minds", members: "7.8k", activity: "High", icon: "🎨" },
];

export default function CommunityPage() {
  const [modal, setModal] = useState({ open: false, title: "", message: "", type: "info" as "info" | "success" | "warning" });

  const showFeedback = (title: string, message: string, type: "info" | "success" | "warning" = "info") => {
    setModal({ open: true, title, message, type });
  };

  return (
    <div className="space-y-12">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Global Neural Network</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          The <span className="text-primary italic">Community</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          Synchronize with 50,000+ high-performance students worldwide and share your neural progress.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Live Feed */}
        <div className="lg:col-span-8 space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-4">
                 Neural Pulse Feed
                 <div className="h-px bg-white/5 w-24" />
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-wider">
                 <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                 8,241 Neural Nodes Online
              </div>
           </div>

           <div className="space-y-4">
              {FEED_ITEMS.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  className="glass p-5 rounded-3xl flex items-center gap-6 group hover:border-white/10 transition-all cursor-pointer"
                  onClick={() => showFeedback("NEURAL SYNC", `Synchronizing with ${item.user}'s progress log...`, "info")}
                >
                   <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-lg font-bold text-primary group-hover:scale-110 transition-transform">
                      {item.avatar}
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-0.5">
                         <span className="font-bold text-sm text-white">{item.user}</span>
                         <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-tighter">{item.time}</span>
                      </div>
                      <p className="text-muted-foreground text-xs font-medium truncate">{item.action}</p>
                   </div>
                   <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-primary mb-2">{item.xp}</div>
                      <div className="flex gap-3">
                         <button 
                           onClick={(e) => { e.stopPropagation(); showFeedback("RESONANCE", "You shared neural resonance with this achievement.", "success"); }}
                           className="text-muted-foreground hover:text-white transition-colors"
                         ><Heart className="h-3.5 w-3.5" /></button>
                         <button 
                           onClick={(e) => { e.stopPropagation(); showFeedback("NEURAL DATA", "Opening communication link to progress log...", "info"); }}
                           className="text-muted-foreground hover:text-white transition-colors"
                         ><MessageSquare className="h-3.5 w-3.5" /></button>
                         <button 
                           onClick={(e) => { e.stopPropagation(); showFeedback("BROADCAST", "Broadcasting this achievement to your external neural network.", "info"); }}
                           className="text-muted-foreground hover:text-white transition-colors"
                         ><Share2 className="h-3.5 w-3.5" /></button>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>

           <Button 
            variant="ghost" 
            className="w-full h-12 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 font-bold text-[10px] tracking-wider text-muted-foreground transition-all"
            onClick={() => showFeedback("LOADING DATA", "Accessing deeper layers of the global neural network...", "info")}
           >
              Load More Neural Events
           </Button>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
           {/* Guilds */}
           <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                 <Trophy className="h-32 w-32 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                 <Sparkles className="h-5 w-5 text-primary" /> Active Guilds
              </h3>
              <div className="space-y-3">
                 {GUILDS.map((guild) => (
                   <div 
                     key={guild.name} 
                     onClick={() => showFeedback("GUILD ACCESS", `Initializing communication link with ${guild.name} tactical command.`, "info")}
                     className="flex items-center justify-between p-3.5 rounded-2xl bg-white/2 border border-transparent hover:border-white/10 transition-all cursor-pointer group/guild"
                   >
                      <div className="flex items-center gap-4">
                         <div className="text-xl h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/guild:scale-110 transition-transform">{guild.icon}</div>
                         <div>
                            <div className="text-xs font-bold text-white tracking-tight">{guild.name}</div>
                            <div className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{guild.members}</div>
                         </div>
                      </div>
                      <div className={cn(
                        "text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider",
                        guild.activity === "Peak" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
                      )}>
                         {guild.activity}
                      </div>
                   </div>
                 ))}
              </div>
              <Button 
                className="w-full mt-8 rounded-xl bg-white text-black font-bold text-xs h-11 border-none shadow-lg"
                onClick={() => showFeedback("GUILD RECRUITMENT", "Broadcasting your neural profile to all elite tactical guilds...", "info")}
              >Join a Guild</Button>
           </div>

           {/* Leaderboard Snippet */}
           <div className="glass p-8 rounded-3xl bg-primary/2">
              <h3 className="text-lg font-bold mb-10 flex items-center gap-2">
                 <TrendingUp className="h-5 w-5 text-primary" /> Top of Flow
              </h3>
              <div className="space-y-5">
                 {[1,2,3].map(rank => (
                   <div key={rank} className="flex items-center gap-4">
                      <div className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center font-bold text-xs",
                        rank === 1 ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"
                      )}>{rank}</div>
                      <div className="flex-1 font-bold text-xs tracking-tight">Student_{rank*12}</div>
                      <div className="text-[10px] font-bold text-primary">{(4000 - rank * 500).toLocaleString()} XP</div>
                   </div>
                 ))}
              </div>
              <Button 
                variant="link" 
                className="w-full mt-10 p-0 h-auto font-bold text-[10px] tracking-wider text-muted-foreground hover:text-primary transition-colors"
                onClick={() => showFeedback("FULL RANKINGS", "Neural database synchronization in progress. Global leaderboard will update in 12m.", "info")}
              >View Full Leaderboard</Button>
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

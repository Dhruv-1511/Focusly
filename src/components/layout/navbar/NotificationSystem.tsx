"use client";

import { Bell, Zap, TrendingUp, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INITIAL_NOTIFICATIONS = [
  { id: 1, title: "Neural Link Active", desc: "Your cognitive sync is at 98%", time: "2m ago", icon: Zap, color: "text-primary" },
  { id: 2, title: "Guild Milestone", desc: "Stem Squad reached LVL 50", time: "15m ago", icon: TrendingUp, color: "text-secondary" },
  { id: 3, title: "Deep Work Ready", desc: "Calculus session scheduled", time: "1h ago", icon: Brain, color: "text-primary" },
];

export function NotificationSystem() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const router = useRouter();

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className={cn(
          "h-10 w-10 rounded-xl transition-all",
          showNotifications ? "bg-white/10 text-primary border border-primary/20" : "hover:bg-white/5 text-muted-foreground border border-transparent"
        )}
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="h-4 w-4" />
        <span className="absolute top-3 right-3 h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--primary)] animate-pulse" />
      </Button>

      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-3 w-80 glass rounded-3xl p-5 shadow-3xl border-white/10"
          >
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Neural Logs</div>
              <button 
                onClick={() => setNotifications([])}
                className="text-[9px] font-black text-primary hover:text-white transition-colors uppercase tracking-widest disabled:opacity-30 disabled:pointer-events-none"
                disabled={notifications.length === 0}
              >
                Clear All
              </button>
            </div>
            <div className="space-y-3">
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <div 
                    key={n.id} 
                    onClick={() => {
                      setShowNotifications(false);
                      router.push("/dashboard");
                    }}
                    className="flex gap-4 p-3.5 rounded-2xl hover:bg-white/3 transition-all cursor-pointer group"
                  >
                    <div className={cn("h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform", n.color)}>
                      <n.icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white mb-0.5 truncate">{n.title}</div>
                      <div className="text-[10px] text-muted-foreground font-medium truncate mb-1">{n.desc}</div>
                      <div className="text-[9px] font-bold text-muted-foreground/30 uppercase tracking-tighter">{n.time}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/30">
                  Neural logs empty
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

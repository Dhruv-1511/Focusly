"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  LayoutDashboard, 
  Timer, 
  Calendar, 
  Settings, 
  Users, 
  Trophy, 
  HelpCircle,
  Command as CommandIcon,
  X,
  ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ACTIONS = [
  { id: "dash", title: "Go to Dashboard", icon: LayoutDashboard, href: "/dashboard", shortcut: "G D" },
  { id: "focus", title: "Enter Focus Zone", icon: Timer, href: "/focus", shortcut: "G F" },
  { id: "planner", title: "Open Planner", icon: PlannerIcon, href: "/planner", shortcut: "G P" },
  { id: "community", title: "Neural Link (Community)", icon: Users, href: "/community", shortcut: "G C" },
  { id: "rewards", title: "View Achievements", icon: Trophy, href: "/rewards", shortcut: "G A" },
  { id: "settings", title: "System Protocols (Settings)", icon: Settings, href: "/settings", shortcut: "G S" },
];

function PlannerIcon(props: any) {
  return <Calendar {...props} />;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  const filteredActions = ACTIONS.filter(action => 
    action.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === "Enter") {
      if (filteredActions[selectedIndex]) {
        handleSelect(filteredActions[selectedIndex].href);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-[15%] -translate-x-1/2 w-full max-w-2xl z-101 px-4"
          >
            <div className="glass-hyper rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)]">
              <div className="p-6 flex items-center gap-4 border-b border-white/5 bg-white/[0.02]">
                <Search className="h-6 w-6 text-primary" />
                <input
                  autoFocus
                  placeholder="Where shall we focus today?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="bg-transparent border-none outline-none text-xl font-medium placeholder:text-muted-foreground/40 text-white w-full tracking-tight"
                />
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ESC</span>
                </div>
              </div>

              <div className="p-3 max-h-[450px] overflow-y-auto custom-scrollbar bg-black/20">
                {filteredActions.length > 0 ? (
                  <div className="space-y-1">
                    {filteredActions.map((action, index) => (
                      <button
                        key={action.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => handleSelect(action.href)}
                        className={cn(
                          "w-full flex items-center gap-4 p-4 transition-all duration-300 rounded-2xl group relative",
                          selectedIndex === index ? "bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]" : "text-muted-foreground hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <div className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-500",
                          selectedIndex === index ? "bg-white/20 rotate-12" : "bg-white/5"
                        )}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-bold text-base tracking-tight">{action.title}</p>
                          <p className={cn(
                            "text-[10px] font-medium uppercase tracking-[0.1em] opacity-60",
                            selectedIndex === index ? "text-white/80" : "text-muted-foreground"
                          )}>
                            Execute Protocol
                          </p>
                        </div>
                        <div className={cn(
                          "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-black transition-all",
                          selectedIndex === index ? "bg-white/20 border-white/20 text-white" : "bg-white/5 border-white/5 text-muted-foreground"
                        )}>
                          {action.shortcut.split(" ").map((s, i) => (
                            <span key={i} className="flex items-center gap-1">
                              {i > 0 && <span className="opacity-30">+</span>}
                              {s}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <div className="h-20 w-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
                       <HelpCircle className="h-10 w-10 text-muted-foreground/30 animate-pulse" />
                    </div>
                    <p className="text-muted-foreground font-medium text-lg">No matching protocols found for "{query}"</p>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2">
                      <div className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">Navigation</div>
                      <div className="flex items-center gap-1">
                         <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-muted-foreground">↑</div>
                         <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-muted-foreground">↓</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">Select</div>
                      <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-muted-foreground">ENTER</div>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                   <span className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">System Synchronized</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

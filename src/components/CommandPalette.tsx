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
            <div className="glass-dark border border-white/10 rounded-3xl overflow-hidden shadow-3xl">
              <div className="p-6 border-b border-white/5 flex items-center gap-4 relative">
                <Search className="h-6 w-6 text-primary animate-pulse" />
                <input
                  autoFocus
                  placeholder="Neural Command... (e.g., 'Go to Focus')"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="bg-transparent border-none outline-none text-xl w-full font-bold placeholder:text-muted-foreground/30 text-white"
                />
                <div className="flex items-center gap-2">
                   <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ESC to Exit</div>
                   <button onClick={() => setIsOpen(false)} className="hover:bg-white/5 p-1 rounded-lg transition-colors">
                     <X className="h-5 w-5 text-muted-foreground" />
                   </button>
                </div>
              </div>

              <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                {filteredActions.length > 0 ? (
                  <div className="space-y-1">
                    {filteredActions.map((action, index) => (
                      <button
                        key={action.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => handleSelect(action.href)}
                        className={cn(
                          "w-full flex items-center gap-5 p-4 rounded-2xl transition-all group",
                          selectedIndex === index ? "bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]" : "text-muted-foreground hover:bg-white/5"
                        )}
                      >
                        <div className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center transition-colors shadow-lg",
                          selectedIndex === index ? "bg-white/20" : "bg-white/5"
                        )}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-black text-sm uppercase tracking-wider">{action.title}</p>
                          <p className={cn(
                            "text-[10px] font-bold uppercase tracking-widest opacity-60",
                            selectedIndex === index ? "text-white" : "text-muted-foreground"
                          )}>Protocol Sync Active</p>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className={cn(
                             "text-[10px] font-black opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest px-2.5 py-1 rounded border",
                             selectedIndex === index ? "border-white/40 text-white" : "border-white/5"
                           )}>
                             {action.shortcut}
                           </span>
                           <ArrowRight className={cn(
                             "h-4 w-4 transition-all",
                             selectedIndex === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                           )} />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <HelpCircle className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">No neural endpoints found for "{query}"</p>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/2 border-t border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                       <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Protocol 04.9.2 Active</span>
                    </div>
                 </div>
                 <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] animate-pulse">Neural Path Available</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

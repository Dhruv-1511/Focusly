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
            <div className="bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="p-6 border-b border-white/5 flex items-center gap-4 relative">
                <Search className="h-5 w-5 text-primary/70" />
                <input
                  autoFocus
                  placeholder="Neural Command... (e.g., 'Go to Focus')"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="bg-transparent border-none outline-none text-lg w-full font-medium placeholder:text-muted-foreground/30 text-white"
                />
                <div className="flex items-center gap-3">
                   <div className="hidden md:block px-1.5 py-0.5 rounded border border-white/10 text-[9px] font-medium text-muted-foreground/50 uppercase tracking-tighter">ESC</div>
                   <button onClick={() => setIsOpen(false)} className="hover:bg-white/5 p-1.5 rounded-full transition-colors group">
                     <X className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                   </button>
                </div>
              </div>

              <div className="p-2 max-h-[420px] overflow-y-auto custom-scrollbar">
                {filteredActions.length > 0 ? (
                  <div className="space-y-1">
                    {filteredActions.map((action, index) => (
                      <button
                        key={action.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => handleSelect(action.href)}
                        className={cn(
                          "w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all group relative",
                          selectedIndex === index ? "bg-white/5 text-white" : "text-muted-foreground hover:bg-white/2"
                        )}
                      >
                        <div className={cn(
                          "h-10 w-10 rounded-xl flex items-center justify-center transition-all",
                          selectedIndex === index ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-white/5"
                        )}>
                          <action.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-sm">{action.title}</p>
                          <p className={cn(
                            "text-[11px] font-medium opacity-50",
                            selectedIndex === index ? "text-primary-foreground/80" : "text-muted-foreground"
                          )}>Neural Protocol Active</p>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className={cn(
                             "text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded border border-white/10 bg-white/5",
                             selectedIndex === index ? "opacity-100 border-primary/20 bg-primary/10 text-primary" : ""
                           )}>
                             {action.shortcut}
                           </span>
                           <ArrowRight className={cn(
                             "h-4 w-4 transition-all",
                             selectedIndex === index ? "translate-x-0 opacity-100 text-primary" : "-translate-x-2 opacity-0"
                           )} />
                        </div>
                        {selectedIndex === index && (
                          <motion.div 
                            layoutId="active-pill"
                            className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <HelpCircle className="h-10 w-10 text-muted-foreground/20 mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium text-sm">No results found for "{query}"</p>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-white/2 border-t border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <span className="text-[10px] font-medium text-muted-foreground/60">System Version 04.9.2</span>
                 </div>
                 <div className="text-[10px] font-semibold text-primary/60 tracking-wider">SECURE LINK ESTABLISHED</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

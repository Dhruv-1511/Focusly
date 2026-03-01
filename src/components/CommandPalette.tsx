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
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            transition={{ type: "spring", damping: 15 }}
            className="fixed left-1/2 top-[10%] -translate-x-1/2 w-full max-w-4xl z-101 px-4"
          >
            <div className="bg-black/90 border-4 border-primary shadow-[0_0_80px_rgba(240,171,252,0.4)] relative overflow-hidden group">
              {/* Glitch Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(240,171,252,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />
              
              <div className="p-8 border-b-4 border-primary flex items-center gap-6 relative z-10">
                <div className="h-12 w-12 bg-primary flex items-center justify-center rotate-45">
                   <Search className="h-8 w-8 text-black -rotate-45" />
                </div>
                <input
                  autoFocus
                  placeholder="EXECUTE COMMAND..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="bg-transparent border-none outline-none text-4xl md:text-6xl font-black italic placeholder:text-primary/20 text-primary w-full tracking-tighter uppercase"
                />
                <button onClick={() => setIsOpen(false)} className="bg-primary p-2 text-black hover:bg-white transition-colors">
                  <X className="h-10 w-10" />
                </button>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar relative z-10 bg-black">
                {filteredActions.length > 0 ? (
                  <>
                    {filteredActions.map((action, index) => (
                      <button
                        key={action.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => handleSelect(action.href)}
                        className={cn(
                          "flex items-center gap-6 p-6 transition-all relative group overflow-hidden border-2",
                          selectedIndex === index ? "bg-primary text-black border-white translate-x-4 shadow-[12px_12px_0_0_#fff]" : "bg-black text-primary border-primary/20 hover:border-primary"
                        )}
                      >
                        <div className={cn(
                          "h-16 w-16 flex items-center justify-center transition-all",
                          selectedIndex === index ? "bg-black text-primary -rotate-12" : "bg-primary/10"
                        )}>
                          <action.icon className="h-10 w-10" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-black text-2xl italic uppercase tracking-tighter leading-none mb-2">{action.title}</p>
                          <div className="flex items-center gap-2">
                             <div className={cn("h-2 w-2 rounded-full", selectedIndex === index ? "bg-black animate-pulse" : "bg-primary/40")} />
                             <p className="text-[10px] font-black uppercase tracking-[0.3em]">SYSTEM READY</p>
                          </div>
                        </div>
                        <div className="text-3xl font-black opacity-20 group-hover:opacity-100 italic">
                          {action.shortcut.replace(" ", "")}
                        </div>
                      </button>
                    ))}
                  </>
                ) : (
                  <div className="col-span-2 py-32 text-center">
                    <HelpCircle className="h-24 w-24 text-primary animate-spin-slow mx-auto mb-8" />
                    <p className="text-primary font-black text-4xl italic uppercase tracking-tighter">DATA CORRUPTION: "{query}" NOT FOUND</p>
                  </div>
                )}
              </div>

              <div className="px-8 py-4 bg-primary text-black flex items-center justify-between font-black italic text-sm tracking-widest uppercase">
                 <div className="flex items-center gap-8">
                    <span>STATUS: OVERLOAD</span>
                    <span>BUFFER: STRETCHED</span>
                 </div>
                 <div className="animate-pulse">HUD v6.6.6 ACTIVE</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

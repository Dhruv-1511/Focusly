"use client";

import { Search, X, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function SearchContainer() {
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative hidden md:block w-full max-w-sm lg:max-w-md">
      <div className={cn(
        "flex items-center bg-white/5 rounded-2xl px-5 py-2.5 border transition-all duration-300",
        searchFocused ? "border-primary/50 bg-white/10 ring-4 ring-primary/5 shadow-2xl" : "border-white/5"
      )}>
        <Search className={cn("h-4 w-4 transition-colors", searchFocused ? "text-primary" : "text-muted-foreground")} />
        <input 
          type="text" 
          placeholder="Search protocols, tools, or research..." 
          className="bg-transparent border-none outline-none text-sm px-4 w-full text-white placeholder:text-muted-foreground/60 font-semibold"
          onFocus={() => setSearchFocused(true)}
        />
        {searchFocused && (
          <button onClick={() => {
            setSearchFocused(false);
            router.push("/problems");
          }}>
            <X className="h-4 w-4 text-muted-foreground hover:text-white" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {searchFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-3 glass rounded-3xl p-4 shadow-3xl border-white/10 overflow-hidden"
          >
            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2 px-2">
              <History className="h-3 w-3" /> Recent Expeditions
            </div>
            <div className="space-y-1">
              {["Calculus Optimization", "Dopamine Reset", "Neural Spaced Repetition"].map((item) => (
                <button 
                  key={item} 
                  onClick={() => {
                    setSearchFocused(false);
                    router.push("/problems");
                  }}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 text-xs font-bold text-muted-foreground hover:text-white transition-all group"
                >
                  <Search className="h-3.5 w-3.5 opacity-30 group-hover:opacity-100" />
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

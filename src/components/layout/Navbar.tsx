"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Bell, 
  Search, 
  Sparkles, 
  X, 
  ChevronDown, 
  LogOut, 
  User, 
  Settings, 
  Zap,
  TrendingUp,
  Brain,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

// Premium Neural-Zap Logo Component
const BrainZapLogo = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <motion.path
      d="M20 50 Q35 20 50 50 T80 50"
      stroke="url(#logo-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M55 15 L35 55 L50 55 L45 85 L65 45 L50 45 L55 15Z"
      fill="url(#logo-gradient)"
      filter="url(#glow)"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    />
  </svg>
);

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
          setSearchFocused(false);
       }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
       window.removeEventListener("scroll", handleScroll);
       document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Neural Link Active", desc: "Your cognitive sync is at 98%", time: "2m ago", icon: Zap, color: "text-primary" },
    { id: 2, title: "Guild Milestone", desc: "Stem Squad reached LVL 50", time: "15m ago", icon: TrendingUp, color: "text-secondary" },
    { id: 3, title: "Deep Work Ready", desc: "Calculus session scheduled", time: "1h ago", icon: Brain, color: "text-primary" },
  ]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full pt-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-4"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8 flex-1">
          <Link href="/" className="items-center gap-3 hidden lg:flex group transition-all shrink-0">
             <BrainZapLogo className="h-10 w-10 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
             <span className="text-2xl font-black text-white tracking-tighter italic uppercase">Focusly</span>
          </Link>

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-white/5 text-muted-foreground lg:hidden shrink-0" 
            onClick={onToggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Search Container */}
          <div ref={searchRef} className="relative hidden md:block w-full max-w-sm lg:max-w-md">
            <div className={cn(
               "flex items-center bg-white/5 rounded-2xl px-5 py-2.5 border transition-all duration-300",
               searchFocused ? "border-primary/50 bg-white/10 ring-4 ring-primary/5 shadow-2xl" : "border-white/5"
            )}>
              <Search className={cn("h-4 w-4 transition-colors", searchFocused ? "text-primary" : "text-muted-foreground")} />
              <input 
                type="text" 
                placeholder="Search protocols, tools, or research..." 
                className="bg-transparent border-none outline-none text-sm px-4 w-full text-white placeholder:text-muted-foreground/30 font-semibold"
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

            {/* Search Dropdown */}
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
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <nav className="hidden xl:flex items-center gap-8 mr-4">
             {[
               { name: "Research", href: "/problems" },
               { name: "Planner", href: "/planner" },
               { name: "Library", href: "/tools" }
             ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
             ))}
          </nav>
          
          <div className="h-4 w-px bg-white/10 hidden xl:block" />

          {/* Notification Bell */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                 "h-10 w-10 rounded-xl transition-all",
                 showNotifications ? "bg-white/10 text-primary border border-primary/20" : "hover:bg-white/5 text-muted-foreground border border-transparent"
              )}
              onClick={() => {
                 setShowNotifications(!showNotifications);
                 setShowProfile(false);
              }}
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
          
          {/* User Profile Hook */}
          <div className="relative">
            {session ? (
              <button 
                onClick={() => {
                   setShowProfile(!showProfile);
                   setShowNotifications(false);
                }}
                className={cn(
                   "flex items-center gap-3 p-1 rounded-2xl transition-all border",
                   showProfile ? "bg-white/10 border-primary/30" : "bg-white/5 border-transparent hover:border-white/10"
                )}
              >
                <div className="h-9 w-9 rounded-xl bg-linear-to-br from-primary/20 to-indigo-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                   {session.user?.image ? (
                     <img src={session.user.image} alt="" className="h-full w-full object-cover" />
                   ) : (
                     <span className="text-xs font-black text-primary">{session.user?.name?.[0] || <Sparkles className="h-4 w-4" />}</span>
                   )}
                </div>
                <div className="hidden sm:flex flex-col items-start pr-2">
                  <span className="text-[10px] font-black text-white leading-none mb-1">
                    {session.user?.name?.split(' ')[0]}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-8 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-primary w-2/3 shadow-[0_0_4px_var(--primary)]" />
                    </div>
                    <span className="text-[8px] font-black text-primary tracking-tighter">LVL 12</span>
                  </div>
                </div>
                <ChevronDown className={cn("h-3 w-3 text-muted-foreground mr-1 transition-transform", showProfile && "rotate-180")} />
              </button>
            ) : (
              <Button 
                size="sm" 
                variant="glow"
                className="rounded-xl h-10 px-6 font-black text-[10px] tracking-widest uppercase"
                asChild
              >
                <Link href="/login">Upgrade Protocol</Link>
              </Button>
            )}

            <AnimatePresence>
               {showProfile && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-64 glass rounded-3xl p-3 shadow-3xl border-white/10"
                  >
                     <div className="p-4 mb-2 bg-white/3 rounded-2xl border border-white/5">
                        <div className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.2em] mb-3">Active Status</div>
                        <div className="flex items-center gap-3">
                           <div className="h-3 w-3 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_var(--secondary)]" />
                           <div className="text-xs font-bold text-white uppercase tracking-wider">Synchronized</div>
                        </div>
                     </div>
                     <div className="space-y-1">
                        <button 
                           onClick={() => { router.push("/settings"); setShowProfile(false); }}
                           className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-xs font-bold text-muted-foreground hover:text-white transition-all"
                        >
                           <User className="h-4 w-4" /> Profile Protocol
                        </button>
                        <button 
                           onClick={() => { router.push("/settings?tab=security"); setShowProfile(false); }}
                           className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-xs font-bold text-muted-foreground hover:text-white transition-all"
                        >
                           <Settings className="h-4 w-4" /> System Settings
                        </button>
                        <div className="h-px bg-white/5 my-1 mx-2" />
                        <button 
                           onClick={() => signOut()}
                           className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-destructive/10 text-xs font-bold text-muted-foreground hover:text-destructive transition-all"
                        >
                           <LogOut className="h-4 w-4" /> Terminate Link
                        </button>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}



"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Palette, 
  Smartphone, 
  Lock, 
  UserCircle,
  Mail,
  Zap,
  ChevronRight,
  Camera,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { FocuslyModal } from "@/components/ui/FocuslyModal";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("profile");
  const [modal, setModal] = useState({ open: false, title: "", message: "", type: "info" as "info" | "success" | "warning" });

  const showFeedback = (title: string, message: string, type: "info" | "success" | "warning" = "info") => {
    setModal({ open: true, title, message, type });
  };

  const TABS = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "focus", label: "Focus Modes", icon: Zap },
  ];

  return (
    <div className="space-y-10 pb-20">
      <header>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">System Configuration</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Settings <span className="text-primary italic">& Preferences</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base max-w-xl leading-relaxed">
          Calibrate your neural experience and manage your focus environment.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Tabs */}
        <div className="lg:col-span-3 space-y-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all group relative overflow-hidden",
                  isActive 
                    ? "bg-white/5 border border-white/5 text-white shadow-xl" 
                    : "text-muted-foreground hover:bg-white/2 hover:text-white"
                )}
              >
                <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                {tab.label}
                {isActive && (
                  <motion.div 
                    layoutId="settings-active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[2.5rem] p-8 md:p-12 border-white/5"
          >
            {activeTab === "profile" && <ProfileSettings session={session} onFeedback={showFeedback} />}
            {activeTab === "notifications" && <NotificationSettings />}
            {activeTab === "appearance" && <AppearanceSettings onFeedback={showFeedback} />}
            {activeTab === "focus" && <FocusSettings />}
            {activeTab === "security" && <SecuritySettings onFeedback={showFeedback} />}
          </motion.div>
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

function ProfileSettings({ session, onFeedback }: any) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="relative group cursor-pointer" onClick={() => onFeedback("IMAGE SYNC", "Interface for uploading neural avatar is initializing...", "info")}>
          <div className="h-32 w-32 rounded-3xl bg-linear-to-br from-primary to-indigo-600 flex items-center justify-center text-white text-4xl font-black ring-4 ring-white/5 group-hover:scale-105 transition-all shadow-2xl overflow-hidden">
            {session?.user?.image ? (
              <img src={session.user.image} alt="" className="h-full w-full object-cover" />
            ) : (
              <span>{session?.user?.name?.[0] || "U"}</span>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-background border border-white/10 rounded-xl flex items-center justify-center text-primary shadow-lg">
             <Camera className="h-4 w-4" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
           <h3 className="text-2xl font-bold mb-2">{session?.user?.name || "System Resident"}</h3>
           <p className="text-muted-foreground text-xs font-medium mb-6">Pro Elite Member • Synchronized 12 days ago</p>
           <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button size="sm" className="rounded-xl font-bold text-[10px] tracking-wider px-6 h-10 bg-white text-black hover:bg-neutral-200" onClick={() => onFeedback("IMAGE SYNC", "Searching local neural storage for avatar data...", "info")}>UPDATE AVATAR</Button>
              <Button size="sm" variant="ghost" className="rounded-xl font-bold text-[10px] tracking-wider px-6 h-10 border border-white/5 hover:bg-white/5" onClick={() => onFeedback("REMOVAL SEQUENCE", "Avatar data purged from system memory.", "warning")}>REMOVE</Button>
           </div>
        </div>
      </div>
      
      {/* ... rest of inputs ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Display Name</label>
          <div className="relative group">
            <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              defaultValue={session?.user?.name || ""}
              className="w-full h-12 bg-white/2 border border-white/5 rounded-2xl pl-12 pr-4 outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm font-semibold"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Email Protocol</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="email" 
              defaultValue={session?.user?.email || ""}
              className="w-full h-12 bg-white/2 border border-white/5 rounded-2xl pl-12 pr-4 outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm font-semibold selection:bg-primary/20"
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-2">
           <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Bio Signature</label>
           <textarea 
             placeholder="Synchronizing peak performance..."
             className="w-full h-32 p-5 bg-white/2 border border-white/5 rounded-2xl outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm font-medium resize-none"
           />
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <Button 
          className="rounded-2xl h-14 px-10 font-bold text-sm bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 group"
          onClick={() => onFeedback("SYNC SUCCESS", "Your neural identity has been updated across the entire interface.", "success")}
        >
          SYNC CHANGES <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-bold mb-2">Neural Alerts</h3>
        <p className="text-muted-foreground text-xs font-medium">Control how Focusly communicates with your consciousness.</p>
      </div>

      <div className="space-y-6">
        <ToggleItem 
          title="Protocol Reminders" 
          desc="Get notified when it's time to initiate your deep work sessions." 
          checked={true} 
        />
        <ToggleItem 
          title="Community Sync" 
          desc="Receive updates when your guild reaches a new milestone." 
          checked={true} 
        />
        <ToggleItem 
          title="Achievement Unlocks" 
          desc="Instant feedback when you earn XP or unlock rare badges." 
          checked={false} 
        />
        <ToggleItem 
          title="Wellness Pings" 
          desc="Occasional nudges to check your neural equilibrium." 
          checked={true} 
        />
      </div>
    </div>
  );
}

function AppearanceSettings({ onFeedback }: any) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-bold mb-2">Interface HUD</h3>
        <p className="text-muted-foreground text-xs font-medium">Customize the visual density of your neural performance system.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
         <ThemeCard name="Midnight Drift" color="bg-[#030712]" active={true} onClick={() => onFeedback("THEME SYNC", "Midnight Drift theme applied to your local session.", "success")} />
         <ThemeCard name="Cyber Cyan" color="bg-[#020617]" accent="bg-cyan-500" onClick={() => onFeedback("THEME SYNC", "Cyber Cyan theme applied. Neural focus spectrum adjusted.", "success")} />
         <ThemeCard name="Emerald Deep" color="bg-[#051109]" accent="bg-emerald-500" onClick={() => onFeedback("THEME SYNC", "Emerald Deep theme applied. Bio-rhythm synchronized.", "success")} />
         <ThemeCard name="Void Indigo" color="bg-[#0a0a1a]" accent="bg-indigo-600" onClick={() => onFeedback("THEME SYNC", "Void Indigo theme applied. Maximum contrast protocol active.", "success")} />
      </div>

      <div className="pt-8 border-t border-white/5 space-y-6">
         <ToggleItem 
           title="Glassmorphism Intensified" 
           desc="Apply higher blur and transparency levels to the interface." 
           checked={true} 
         />
         <ToggleItem 
           title="Motion Optimization" 
           desc="Enable smooth micro-animations across the system." 
           checked={true} 
         />
      </div>
    </div>
  );
}

function FocusSettings() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-bold mb-2">Deep Work Protocol</h3>
        <p className="text-muted-foreground text-xs font-medium">Define your standard focus parameters for maximum throughput.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Standard Cycle (Min)</label>
            <input type="number" defaultValue="25" className="w-full h-12 bg-white/2 border border-white/5 rounded-xl px-4 outline-none focus:border-primary/40 font-bold" />
         </div>
         <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Long Break (Min)</label>
            <input type="number" defaultValue="15" className="w-full h-12 bg-white/2 border border-white/5 rounded-xl px-4 outline-none focus:border-primary/40 font-bold" />
         </div>
      </div>

      <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
         <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
            <Eye className="h-4 w-4 text-primary" /> Visual Isolation
         </h4>
         <p className="text-xs font-medium text-muted-foreground leading-relaxed mb-6">
            When active, Focusly will hide all non-essential elements like XP counters and sidebars during timer execution.
         </p>
         <ToggleItem title="Ghost Mode" desc="Enable total UI vanishing during sessions." checked={true} />
      </div>
    </div>
  );
}

function SecuritySettings({ onFeedback }: any) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-bold mb-2">Access Shield</h3>
        <p className="text-muted-foreground text-xs font-medium">Protect your data and manage account access credentials.</p>
      </div>

      <div className="space-y-6">
         <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
            <h4 className="text-sm font-bold text-red-500 mb-2">Danger Zone</h4>
            <p className="text-xs font-medium text-muted-foreground mb-8">Once you delete your account, there is no going back. All neural historical data will be purged.</p>
            <Button 
              variant="ghost" 
              className="rounded-xl font-bold text-[10px] tracking-wider px-6 h-10 border border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-500"
              onClick={() => onFeedback("TERMINATION PROTOCOL", "Are you sure you want to terminate your link? This action is irreversible.", "warning")}
            >
              DELETE DATA LOG
            </Button>
         </div>
      </div>
    </div>
  );
}

function ToggleItem({ title, desc, checked }: any) {
  const [enabled, setEnabled] = useState(checked);
  return (
    <div className="flex items-center justify-between gap-6 p-2">
      <div className="flex-1">
        <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{desc}</p>
      </div>
      <button 
        onClick={() => setEnabled(!enabled)}
        className={cn(
          "h-6 w-11 rounded-full transition-all relative flex items-center px-1",
          enabled ? "bg-primary" : "bg-white/10"
        )}
      >
        <motion.div 
          animate={{ x: enabled ? 20 : 0 }}
          className="h-4 w-4 rounded-full bg-white shadow-sm" 
        />
      </button>
    </div>
  );
}

function ThemeCard({ name, color, accent = "bg-primary", active = false, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "glass p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:border-white/10 transition-all group",
        active ? "border-primary/50" : "border-transparent"
      )}
    >
       <div className={cn("h-12 w-20 rounded-xl flex items-center justify-center relative overflow-hidden", color)}>
          <div className={cn("h-2 w-2 rounded-full absolute top-2 left-2", accent)} />
          <div className="h-1 w-8 bg-white/5 absolute bottom-4 left-2 rounded" />
          <div className="h-1 w-10 bg-white/5 absolute bottom-2 left-2 rounded" />
       </div>
       <div className="flex-1">
          <div className="text-xs font-bold text-white mb-1">{name}</div>
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">System Default</div>
       </div>
       {active && (
         <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
            <Check className="h-3.5 w-3.5" />
         </div>
       )}
    </div>
  );
}

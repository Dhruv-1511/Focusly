"use client";

import Link from"next/link";
import { usePathname } from"next/navigation";
import { 
  Home, 
  Search, 
  Calendar, 
  Timer, 
  BookOpen, 
  Users, 
  HeartPulse, 
  Trophy, 
  Settings,
  LayoutDashboard
} from"lucide-react";
import { cn } from"@/lib/utils";

const menuItems = [
  { name:"Home", icon: Home, href:"/" },
  { name:"Dashboard", icon: LayoutDashboard, href:"/dashboard" },
  { name:"Problems", icon: Search, href:"/problems" },
  { name:"Planner", icon: Calendar, href:"/planner" },
  { name:"Focus Mode", icon: Timer, href:"/focus" },
  { name:"Learning Tools", icon: BookOpen, href:"/tools" },
  { name:"Community", icon: Users, href:"/community" },
  { name:"Mental Health", icon: HeartPulse, href:"/mental-health" },
  { name:"Rewards", icon: Trophy, href:"/rewards" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-card hidden lg:flex flex-col z-50">
      <div className="p-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Study<span className="text-primary">Hub</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto pt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !=="/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group",
                isActive 
                  ?"bg-primary text-primary-foreground shadow-md" 
                  :"text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className={cn(
            "h-5 w-5",
                isActive ?"text-primary-foreground" :"text-muted-foreground group-hover:text-primary"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/50">
          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
            AR
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-sm font-bold truncate">Alex Rodriguez</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Level 15 Pro</div>
          </div>
          <Settings className="h-4 w-4 text-muted-foreground cursor-pointer hover:rotate-90 transition-transform" />
        </div>
      </div>
    </aside>
  );
}



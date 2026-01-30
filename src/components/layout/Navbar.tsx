import Link from"next/link";
import { Button } from"@/components/ui/button";
import { Github } from"lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 w-full border-b bg-background/80 backdrop-blur-md z-40">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Study<span className="text-primary">Hub</span>
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground">
          Welcome back, Alex. Let's conquer today's goals.
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-[10px] uppercase tracking-wider">
            🔥 12 Day Streak
          </div>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button size="sm" variant="secondary" className="hidden sm:flex transition-all active:scale-95" onClick={() => console.log("New session started")}>New Session</Button>
        </div>
      </div>
    </header>
  );
}


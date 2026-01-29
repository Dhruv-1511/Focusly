import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Next<span className="text-primary">Starter</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#templates" className="text-sm font-medium hover:text-primary transition-colors">
            Templates
          </Link>
          <Link href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}

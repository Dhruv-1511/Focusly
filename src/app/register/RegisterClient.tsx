"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Loader2, ArrowRight, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      router.push("/login?registered=true");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass max-w-md w-full p-10 md:p-12 rounded-3xl relative border-white/5"
      >
        <div className="text-center mb-10">
          <div className="h-14 w-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6 border border-secondary/20">
            <Zap className="h-6 w-6 fill-secondary" />
          </div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Join Focusly</h1>
          <p className="text-sm text-muted-foreground font-medium">Start your journey to cognitive mastery</p>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold p-4 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                required
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium placeholder:text-muted-foreground/30"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                required
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium placeholder:text-muted-foreground/30"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="password" 
                required
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium placeholder:text-muted-foreground/30"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-12 text-sm font-bold rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl shadow-secondary/20 transition-all active:scale-[0.98] mt-4"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : (
              <span className="flex items-center justify-center gap-2">
                Create Account <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>

        <p className="mt-10 text-center text-xs font-medium text-muted-foreground/60">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}

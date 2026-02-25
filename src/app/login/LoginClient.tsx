"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Loader2, ArrowRight, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
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
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass max-w-md w-full p-10 md:p-12 rounded-3xl relative border-white/5"
      >
        <div className="text-center mb-10">
          <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 border border-primary/20">
            <Zap className="h-6 w-6 fill-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-muted-foreground font-medium">Continue your high-performance journey</p>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold p-4 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex justify-between">
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 ml-1">Password</label>
              <Link href="#" className="text-[10px] font-bold text-primary hover:text-primary/80 transition-colors">Forgot password?</Link>
            </div>
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
            className="w-full h-12 text-sm font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-4"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : (
              <span className="flex items-center justify-center gap-2">
                Continue <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>

        <p className="mt-10 text-center text-xs font-medium text-muted-foreground/60">
          New to Focusly?{" "}
          <Link href="/register" className="text-primary font-bold hover:underline">Create account</Link>
        </p>
      </motion.div>
    </div>
  );
}

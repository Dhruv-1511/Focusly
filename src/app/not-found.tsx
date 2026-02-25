"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="h-32 w-32 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 flex items-center justify-center mx-auto shadow-2xl relative group">
            <Zap className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -top-4 -right-4 h-12 w-12 bg-destructive rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-12">
              404
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase"
        >
          Signal <span className="text-gradient">Lost.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-12 max-w-md mx-auto font-semibold"
        >
          The neural coordinates you requested are outside our current protocols. The link may have been severed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="glow" size="xl" asChild className="h-14 px-8 rounded-2xl font-black text-sm uppercase gap-2">
            <Link href="/">
              <Home className="h-4 w-4" /> Return to Base
            </Link>
          </Button>
          <Button variant="outline" size="xl" onClick={() => window.history.back()} className="h-14 px-8 rounded-2xl border-white/5 bg-white/2 backdrop-blur-xl hover:bg-white/5 transition-all font-black text-sm uppercase gap-2">
            <ArrowLeft className="h-4 w-4" /> Restore Link
          </Button>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

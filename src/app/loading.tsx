"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-100">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-20 w-20 bg-primary/20 rounded-3xl flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(99,102,241,0.3)]"
        >
          <Zap className="h-10 w-10 text-primary fill-primary animate-pulse" />
        </motion.div>
        
        {/* Loading ring */}
        <div className="absolute inset-[-10px] border-2 border-primary/10 border-t-primary rounded-full animate-spin" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">
          Neural Synchronization In Progress
        </span>
      </motion.div>
    </div>
  );
}

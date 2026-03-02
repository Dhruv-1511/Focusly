"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function NeuralGrid() {
  // Use useMemo with a fixed seed-like approach to ensure hydration consistency
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: `${(i * 7 + 13) % 100}%`,
      y: `${(i * 11 + 17) % 100}%`,
      duration: 10 + (i % 5) * 2,
      delay: i * 0.5,
      scale: 1 + (i % 3) * 0.2
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      
      {/* Animated Neural Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ 
            x: node.x, 
            y: node.y,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, node.scale, 0],
            y: [`${parseFloat(node.y) - 5}%`, `${parseFloat(node.y) + 5}%`]
          }}
          transition={{ 
            duration: node.duration, 
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          }}
          className="absolute h-1 w-1 bg-primary rounded-full blur-[2px]"
        />
      ))}

      {/* Pulsing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
    </div>
  );
}


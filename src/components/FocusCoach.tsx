"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Send, 
  X, 
  Brain, 
  Zap, 
  Activity, 
  ShieldAlert,
  Minimize2,
  Maximize2,
  Mic
} from "lucide-react";
import { cn } from "@/lib/utils";

const RESPONSES = [
  "Integrating your current neural feedback. Let's calibrate for a 25-minute deep work session.",
  "Your metabolic activity suggests a 15% increase in cognitive load. Optimal focus is now active.",
  "Distraction shield initialized. I've silenced all background protocols.",
  "Neural efficiency is at 94.2%. Ready to initiate the next protocol?",
  "Calibration complete. Your flow state is now synchronized with the study plan.",
];

export function FocusCoach() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Neural Link Initialized. I'm your Focus Coach. How are we calibrating today's flow?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput("");

    setTimeout(() => {
      const response = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={cn(
               "bg-white border border-white flex flex-col transition-all duration-500 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)]",
               isMinimized ? "w-72 h-32" : "w-96 h-[500px]"
            )}
          >
            {/* Header */}
            <div className="p-5 border-b border-black/5 flex items-center justify-between bg-primary">
              <div className="flex items-center gap-3">
                 <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-lg rotate-12 transition-transform hover:rotate-0">
                    <Brain className="h-6 w-6 text-primary" />
                 </div>
                 <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-white leading-none mb-1">Neural Coach</h3>
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-1.5 rounded-full bg-white/50 animate-pulse" />
                       <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none">AI Sync Active</span>
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-2">
                 <button onClick={() => setIsMinimized(!isMinimized)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                   {isMinimized ? <Maximize2 className="h-4 w-4 text-white" /> : <Minimize2 className="h-4 w-4 text-white" />}
                 </button>
                 <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                   <X className="h-4 w-4 text-white" />
                 </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6 bg-slate-50">
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: m.role === 'assistant' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "flex",
                        m.role === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div className={cn(
                        "max-w-[75%] p-4 rounded-2xl text-[12px] font-medium leading-relaxed shadow-sm",
                        m.role === 'user' 
                          ? "bg-primary text-white rounded-tr-none shadow-primary/20" 
                          : "bg-white text-slate-700 rounded-tl-none border border-slate-200"
                      )}>
                        {m.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-100 bg-white">
                  <div className="relative group">
                    <input 
                       placeholder="Message Sync..."
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                       onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                       className="w-full bg-slate-100 border border-slate-200 rounded-2xl py-3 pl-4 pr-12 text-sm font-medium text-slate-800 outline-none focus:border-primary/50 transition-colors"
                    />
                    <button 
                      onClick={handleSend}
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-primary rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
                    >
                      <Send className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}

            {isMinimized && (
               <div className="p-4 flex items-center justify-center h-full">
                  <Activity className="h-8 w-8 text-primary animate-pulse opacity-50" />
               </div>
            )}
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-3xl shadow-primary/20 group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-linear-to-tr from-primary via-indigo-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
             <Sparkles className="h-8 w-8 text-white relative z-10" />
             <div className="absolute top-0 right-0 h-4 w-4 bg-secondary rounded-full border-4 border-[#020203] animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

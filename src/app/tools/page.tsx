"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Upload, 
  Brain, 
  Zap, 
  Clock, 
  Eye, 
  Sparkles, 
  Settings2,
  ListRestart,
  ArrowRight,
  Monitor,
  Cpu,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FocuslyModal } from "@/components/ui/FocuslyModal";
import { cn } from "@/lib/utils";

const revisionTopics = [
  { name: "Newton's Laws", subject: "Physics", interval: "Due in 2h", status: "Urgent" },
  { name: "Organic Chemistry Basics", subject: "Chemistry", interval: "Due in 1d", status: "Pending" },
  { name: "World War II Timeline", subject: "History", interval: "Due in 3d", status: "Upcoming" },
];

export default function ToolsPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [toolMode, setToolMode] = useState("revision"); // revision, notes
  const [modal, setModal] = useState<{ open: boolean; title: string; message: string; type: "info" | "success" | "warning" }>({
    open: false,
    title: "",
    message: "",
    type: "info"
  });

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setModal({
        open: true,
        title: "Processing Complete",
        message: "Note processing complete! AI Summaries and Flashcards have been generated for your study session.",
        type: "success"
      });
    }, 3000);
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
            <Cpu className="h-3 w-3 text-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase text-secondary tracking-widest">Memory Augmentation v4.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            COGNITIVE <br />
            <span className="text-gradient">TOOLKIT.</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl"
        >
           <Button 
             variant={toolMode === "revision" ? "secondary" : "ghost"}
             onClick={() => setToolMode("revision")}
             className={cn(
               "h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all",
               toolMode === "revision" && "glow-secondary"
             )}
           >
              Spaced Repetition
           </Button>
           <Button 
             variant={toolMode === "notes" ? "secondary" : "ghost"}
             onClick={() => setToolMode("notes")}
             className={cn(
               "h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all",
               toolMode === "notes" && "glow-secondary shadow-secondary"
             )}
           >
              AI Notes
           </Button>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
           <AnimatePresence mode="wait">
              {toolMode === "revision" ? (
                 <motion.section 
                    key="revision"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                 >
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                          <Monitor className="h-64 w-64 text-primary" />
                       </div>
                       
                       <h2 className="text-2xl font-black mb-10 flex items-center gap-4 uppercase tracking-tight relative z-10">
                          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                            <Clock className="h-6 w-6" />
                          </div>
                          Neural Queue
                       </h2>
                       
                       <div className="space-y-4 relative z-10">
                          {revisionTopics.map((topic, i) => (
                             <motion.div 
                               key={i} 
                               initial={{ opacity: 0, x: -10 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ delay: i * 0.1 }}
                               className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group shimmer"
                             >
                                <div className="h-16 w-16 rounded-2xl bg-background border border-white/10 shadow-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                                   <BookOpen className="h-8 w-8" />
                                </div>
                                <div className="flex-1">
                                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{topic.subject}</div>
                                   <div className="text-xl font-black uppercase tracking-tight">{topic.name}</div>
                                   <div className={cn(
                                     "text-[10px] font-black uppercase tracking-widest mt-2 flex items-center gap-2",
                                     topic.status === 'Urgent' ? 'text-destructive animate-pulse' : 'text-primary'
                                   )}>
                                     <div className={cn("h-1.5 w-1.5 rounded-full bg-current")} />
                                     {topic.interval}
                                   </div>
                                </div>
                                 <Button 
                                   size="lg"
                                   className={cn(
                                     "w-full sm:w-auto px-10 rounded-xl font-black uppercase text-[10px] tracking-widest border-none transition-all",
                                     topic.status === 'Urgent' ? 'bg-destructive hover:bg-destructive/90 text-white' : 'bg-primary hover:bg-primary/90 text-white'
                                   )}
                                   onClick={() => setModal({
                                     open: true,
                                     title: "Active Recall Init",
                                     message: `Loading neural patterns for "${topic.name}". Optimization in progress.`,
                                     type: "info"
                                   })}
                                 >
                                    SYNC BRAIN
                                 </Button>
                             </motion.div>
                          ))}
                       </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <ToolFeatureCard 
                          icon={Brain} 
                          title="SMART TRIGGERS" 
                          desc="Neural notification engine identifies the precise moment of information decay." 
                          color="text-indigo-400"
                       />
                       <ToolFeatureCard 
                          icon={Zap} 
                          title="ACTIVE PROTOCOL" 
                          desc="High-intensity testing modules designed to force synaptic reconnection." 
                          color="text-secondary"
                       />
                    </div>
                 </motion.section>
              ) : (
                <motion.section 
                  key="notes"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                    <div className="glass-card rounded-[3rem] border-2 border-dashed border-primary/20 p-12 md:p-24 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden group">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                       
                       <div className="flex items-center justify-center mb-10 relative">
                          <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse-slow" />
                          <Image 
                            src="/logo.png" 
                            alt="Focusly AI Logo" 
                            width={160}
                            height={160}
                            priority
                            className="object-contain drop-shadow-[0_0_30px_rgba(129,140,248,0.6)] relative z-10 hover:scale-105 transition-transform duration-700"
                          />
                       </div>
                      <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Neural Transcriber</h2>
                      <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto font-medium">Inject your research papers, PDFs, or raw intellectual data. v4.0 will restructure it into actionable knowledge.</p>
                      
                      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl relative z-10">
                          <Button 
                            onClick={handleUpload} 
                            disabled={isUploading} 
                            size="xl" 
                            className="flex-1 shadow-2xl shadow-primary/20 font-black rounded-2xl bg-white text-black hover:scale-[1.02] border-none"
                          >
                             {isUploading ? (
                               <span className="flex items-center gap-3">
                                 <div className="h-4 w-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                 PROCESSING...
                               </span>
                             ) : "UPLOAD ARTIFACT"}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="xl" 
                            className="px-10 font-black uppercase text-[10px] tracking-widest rounded-2xl border-white/10 hover:bg-white/5 transition-all"
                            onClick={() => setModal({
                              open: true,
                              title: "Buffer Ready",
                              message: "Input stream detected. Ready for lexical analysis.",
                              type: "info"
                            })}
                          >
                            PASTE STREAM
                          </Button>
                      </div>

                      {isUploading && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-16 w-full max-w-lg"
                        >
                           <div className="flex justify-between text-[10px] font-black mb-4 uppercase tracking-[0.3em] text-primary">
                              <span className="flex items-center gap-2">
                                <Zap className="h-3 w-3 animate-pulse" />
                                ANALYZING QUANTUM_DYNAMICS.PDF
                              </span>
                              <span>89%</span>
                           </div>
                           <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                              <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: "89%" }} 
                                className="h-full bg-primary shadow-[0_0_15px_var(--primary)]" 
                              />
                           </div>
                        </motion.div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                       <NoteConvertCard icon={Eye} title="AI SUMMARY" setModal={setModal} />
                       <NoteConvertCard icon={Sparkles} title="AUTO CARDS" setModal={setModal} />
                       <NoteConvertCard icon={Settings2} title="GEN QUIZ" setModal={setModal} />
                    </div>
                </motion.section>
              )}
           </AnimatePresence>
        </div>

        <div className="lg:col-span-4 space-y-8">
           {/* Progress Widget */}
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-primary rounded-[2.5rem] p-10 shadow-2xl text-primary-foreground relative overflow-hidden shimmer group"
           >
              <div className="absolute top-[-10%] right-[-10%] h-48 w-48 bg-white/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
              
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 opacity-70 flex items-center gap-3">
                 <ShieldCheck className="h-4 w-4" /> 
                 Retention Engine
              </h3>
              
              <div className="flex items-end gap-4 mb-10">
                 <div className="text-8xl font-black tracking-tighter leading-none">84</div>
                 <div className="text-2xl font-black mb-2">%</div>
              </div>
              
              <div className="space-y-6">
                 <div className="text-[10px] font-black uppercase tracking-widest flex justify-between opacity-80">
                    <span>Active Synapses</span>
                    <span>1,242</span>
                 </div>
                 <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden border border-white/10 p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "84%" }}
                      className="h-full bg-white rounded-full shadow-[0_0_10px_white]" 
                    />
                 </div>
              </div>
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full mt-10 bg-white text-primary hover:bg-white hover:scale-[1.02] font-black uppercase text-[10px] tracking-[0.2em] rounded-xl transition-all shadow-xl"
              >
                 SYNC MAP
              </Button>
           </motion.div>

           {/* Tip Card */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden">
              <div className="absolute bottom-[-10%] left-[-10%] h-32 w-32 bg-primary/10 blur-[40px] rounded-full" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Neuro Concept</h3>
              <p className="text-2xl font-black leading-tight mb-6 uppercase tracking-tight italic text-gradient">"Retrieval is the act of creation."</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">— Dr. Focus | Neural Labs</p>
           </div>
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

function ToolFeatureCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="glass-card p-10 rounded-[2.5rem] hover:glow-primary transition-all group shimmer">
       <div className={cn(color, "h-14 w-14 rounded-2xl mb-8 bg-current/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all border border-current/20 shadow-xl")}>
          <Icon className="h-7 w-7" />
       </div>
       <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{title}</h3>
       <p className="text-muted-foreground text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function NoteConvertCard({ icon: Icon, title, setModal }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card p-8 rounded-[2rem] text-center cursor-pointer group shimmer relative overflow-hidden"
      onClick={() => setModal({
        open: true,
        title: `${title} INIT`,
        message: `Activating ${title} protocol. Interfacing with active intellectual streams.`,
        type: "info"
      })}
    >
       <div className="h-16 w-16 rounded-2xl bg-white/5 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-white/5 shadow-xl">
          <Icon className="h-8 w-8 transition-transform group-hover:scale-110" />
       </div>
       <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">{title}</div>
    </motion.div>
  );
}









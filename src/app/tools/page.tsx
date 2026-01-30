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
  ListRestart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const revisionTopics = [
  { name: "Newton's Laws", subject: "Physics", interval: "Due in 2h", status: "Urgent" },
  { name: "Organic Chemistry Basics", subject: "Chemistry", interval: "Due in 1d", status: "Pending" },
  { name: "World War II Timeline", subject: "History", interval: "Due in 3d", status: "Upcoming" },
];

export default function ToolsPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [toolMode, setToolMode] = useState("revision"); // revision, notes

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 3000);
  };

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2 italic">Learning Tools</h1>
          <p className="text-muted-foreground">Supercharge your memory and organize your knowledge.</p>
        </div>
        <div className="flex bg-muted p-1.5 rounded-2xl gap-2">
           <button 
             onClick={() => setToolMode("revision")}
             className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${toolMode === "revision" ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
           >
              Spaced Repetition
           </button>
           <button 
             onClick={() => setToolMode("notes")}
             className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${toolMode === "notes" ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
           >
              AI Notes
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <AnimatePresence mode="wait">
              {toolMode === "revision" ? (
                 <motion.section 
                    key="revision"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                 >
                    <div className="bg-card rounded-[40px] border-2 border-primary/20 p-8 md:p-12 shadow-sm">
                       <h2 className="text-2xl font-black mb-8 italic flex items-center gap-3">
                          <Clock className="h-6 w-6 text-primary" /> Spaced Repetition Queue
                       </h2>
                       <div className="space-y-4">
                          {revisionTopics.map((topic, i) => (
                             <div key={i} className="flex items-center gap-6 p-6 rounded-[28px] bg-muted/30 border-2 border-transparent hover:border-border transition-all group">
                                <div className="h-14 w-14 rounded-2xl bg-card border shadow-sm flex items-center justify-center text-primary">
                                   <BookOpen className="h-7 w-7" />
                                </div>
                                <div className="flex-1">
                                   <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{topic.subject}</div>
                                   <div className="text-lg font-black italic">{topic.name}</div>
                                   <div className={`text-xs font-bold mt-1 ${topic.status === 'Urgent' ? 'text-red-500' : 'text-primary'}`}>{topic.interval}</div>
                                </div>
                                <Button className={`h-12 px-8 rounded-2xl font-black italic ${topic.status === 'Urgent' ? 'bg-red-500 hover:bg-red-600' : 'bg-primary'}`}>
                                   Revise Now
                                </Button>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <ToolFeatureCard 
                          icon={Brain} 
                          title="Smart Reminders" 
                          desc="We notify you at the exact moment your brain is about to forget the info." 
                          color="text-purple-500"
                       />
                       <ToolFeatureCard 
                          icon={Zap} 
                          title="Active Recall" 
                          desc="Flashcard system built into every revision session for max retention." 
                          color="text-orange-500"
                       />
                    </div>
                 </motion.section>
              ) : (
                <motion.section 
                  key="notes"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                   <div className="bg-card rounded-[40px] border-2 border-dashed border-primary/20 p-12 md:p-20 flex flex-col items-center justify-center text-center">
                      <div className="h-24 w-24 rounded-[32px] bg-primary/10 flex items-center justify-center text-primary mb-8 animate-bounce">
                         <Upload className="h-10 w-10" />
                      </div>
                      <h2 className="text-3xl font-black mb-4 italic">AI Note Transformer</h2>
                      <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">Upload your PDFs or raw notes. Our AI will automatically generate summaries, flashcards, and quizzes.</p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                         <Button onClick={handleUpload} disabled={isUploading} size="lg" className="h-16 flex-1 rounded-2xl bg-foreground text-background font-black italic text-lg">
                            {isUploading ? "Reading Text..." : "Choose File"}
                         </Button>
                         <Button variant="outline" size="lg" className="h-16 px-8 rounded-2xl font-black italic">Paste Content</Button>
                      </div>
                      {isUploading && (
                        <div className="mt-8 w-full max-w-md">
                           <div className="flex justify-between text-xs font-bold mb-2">
                              <span>PROCESSING QUANTUM_PHYSICS.PDF</span>
                              <span>75%</span>
                           </div>
                           <div className="h-2 w-full bg-muted rounded-full">
                              <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} className="h-full bg-primary" />
                           </div>
                        </div>
                      )}
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <NoteConvertCard icon={Eye} title="AI Summary" />
                      <NoteConvertCard icon={Sparkles} title="Auto Flashcards" />
                      <NoteConvertCard icon={Settings2} title="Quiz Generator" />
                   </div>
                </motion.section>
              )}
           </AnimatePresence>
        </div>

        <div className="space-y-8">
           {/* Progress Widget */}
           <div className="bg-secondary text-white rounded-[40px] p-8 shadow-sm relative overflow-hidden">
              <h3 className="text-xl font-bold mb-6 italic">Memory Strength</h3>
              <div className="flex items-center gap-6 mb-8">
                 <div className="text-6xl font-black tracking-tighter italic">84%</div>
                 <div className="text-xs uppercase font-black tracking-widest text-white/70">Overall<br/>Retention</div>
              </div>
              <div className="space-y-4">
                 <div className="text-sm font-bold flex justify-between">
                    <span>Active Topics</span>
                    <span>12</span>
                 </div>
                 <div className="h-2 w-full bg-white/20 rounded-full">
                    <div className="h-full bg-white w-3/4" />
                 </div>
              </div>
              <Button className="w-full mt-8 bg-white text-secondary font-black italic">View Mastery Map</Button>
              <ListRestart className="absolute bottom-[-10px] right-[-10px] h-32 w-32 text-white/10 rotate-12" />
           </div>

           {/* Tip Card */}
           <div className="bg-card rounded-[32px] border p-8">
              <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Scientific Fact</h3>
              <p className="text-lg font-bold italic leading-tight mb-4">"Recalling information from memory is 3x more effective than re-reading it."</p>
              <p className="text-xs text-muted-foreground">— The Power of Retrieval Practice</p>
           </div>
        </div>
      </div>
    </div>
  );
}

function ToolFeatureCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="bg-card p-8 rounded-[32px] border shadow-sm">
       <div className={`${color} h-12 w-12 rounded-2xl mb-6 bg-current/10 flex items-center justify-center`}>
          <Icon className="h-6 w-6" />
       </div>
       <h3 className="text-xl font-bold mb-3 italic">{title}</h3>
       <p className="text-muted-foreground text-sm font-medium">{desc}</p>
    </div>
  );
}

function NoteConvertCard({ icon: Icon, title }: any) {
  return (
    <div className="bg-card border p-6 rounded-[28px] text-center hover:border-primary transition-colors cursor-pointer group shadow-sm">
       <div className="h-12 w-12 rounded-xl bg-muted mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <Icon className="h-6 w-6" />
       </div>
       <div className="text-sm font-black italic">{title}</div>
    </div>
  );
}

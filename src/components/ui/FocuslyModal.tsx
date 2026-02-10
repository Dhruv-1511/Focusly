"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Button } from "./button";

type ModalType = "success" | "warning" | "info";

interface FocuslyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: ModalType;
  onConfirm?: () => void;
  confirmLabel?: string;
}

export function FocuslyModal({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = "info",
  onConfirm,
  confirmLabel = "GOT IT"
}: FocuslyModalProps) {
  const getIcon = () => {
    switch (type) {
      case "success": return <CheckCircle2 className="h-10 w-10 text-secondary" />;
      case "warning": return <AlertTriangle className="h-10 w-10 text-yellow-400" />;
      default: return <Info className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100"
          />
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-101 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="pointer-events-auto w-full max-w-md glass rounded-4xl p-8 border border-white/20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary opacity-50" />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 h-8 w-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors text-muted-foreground hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="flex flex-col items-center text-center mt-4">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                  {getIcon()}
                </div>
                <h3 className="text-2xl font-black mb-3 text-white tracking-tight uppercase">
                  {title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                  {message}
                </p>
                <div className="flex gap-4 w-full">
                  {onConfirm && (
                    <Button 
                      variant="ghost"
                      onClick={onClose}
                      className="flex-1 h-14 rounded-xl font-black text-muted-foreground"
                    >
                      CANCEL
                    </Button>
                  )}
                  <Button 
                    onClick={() => {
                      if (onConfirm) onConfirm();
                      onClose();
                    }}
                    className="flex-1 h-14 rounded-xl font-black bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                  >
                    {confirmLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

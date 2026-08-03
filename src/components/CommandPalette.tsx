"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, CornerDownLeft, Copy, Download, Server, Code2, Briefcase } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export default function CommandPalette({ isOpen, onClose, onCopyEmail }: CommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const actions = [
    { id: "email", label: "Copy Email Address", category: "Action", icon: Copy, run: () => { onCopyEmail(); onClose(); } },
    { id: "resume", label: "Download Resume.pdf", category: "File", icon: Download, run: () => { window.open("/resume.pdf", "_blank"); onClose(); } },
    { id: "case1", label: "Jump to API Gateway Case Study", category: "Navigation", icon: Server, run: () => { document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { id: "stack", label: "Jump to Technical Stack Grid", category: "Navigation", icon: Code2, run: () => { document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { id: "experience", label: "Jump to Career Timeline", category: "Navigation", icon: Briefcase, run: () => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
  ];

  const filteredActions = actions.filter(action => 
    action.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    action.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-black/70 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg bg-zinc-900/95 border border-zinc-700/80 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-[120] backdrop-blur-2xl"
          >
            <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3">
              <Search className="w-4 h-4 text-cyan-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Type a command or jump to section..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none font-mono"
              />
              <button onClick={onClose} className="p-1 rounded text-zinc-500 hover:text-zinc-300 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-2 space-y-1">
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-zinc-500"> NO_COMMANDS_FOUND</div>
              ) : (
                filteredActions.map((action) => (
                  <motion.button
                    key={action.id}
                    whileHover={{ x: 4, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.run}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                        <action.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">{action.label}</div>
                        <div className="text-[10px] font-mono text-zinc-500">{action.category}</div>
                      </div>
                    </div>
                    <CornerDownLeft className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </motion.button>
                ))
              )}
            </div>
            <div className="px-4 py-2 bg-black/60 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>Navigate using arrows or click</span>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
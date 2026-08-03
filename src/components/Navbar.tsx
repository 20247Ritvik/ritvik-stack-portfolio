"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Activity, Command, Copy, Check, Download } from "lucide-react";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("alex.vantage@enterprise-arch.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} onCopyEmail={copyEmail} />

      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#050507]/80 border-b border-zinc-800/80 px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </span>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-zinc-200 font-bold tracking-wider uppercase hidden sm:inline">CANDIDATE STATUS: ACTIVE</span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-cyan-400 font-semibold flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 animate-pulse" /> Immediate Availability
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <motion.button 
              whileHover={{ scale: 1.04, borderColor: "rgba(34, 211, 238, 0.5)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setCmdOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-cyan-300 shadow-inner transition-all cursor-pointer"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span>CTRL+K</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-cyan-500/50 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? "COPIED!" : "COPY EMAIL"}</span>
            </motion.button>

            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/20247Ritvik" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              download 
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-bold text-xs px-4 py-2 rounded-lg shadow-[0_0_20px_-3px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </nav>
    </>
  );
}
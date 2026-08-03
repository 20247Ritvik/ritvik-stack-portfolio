"use client";

import { CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-10 px-6 text-center text-xs text-zinc-500 font-mono relative z-10 bg-[#050507]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} ALEX VANTAGE //</span>
          <span className="text-zinc-300 font-semibold">BUILT FOR ENTERPRISE RECRUITING</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>AVAILABLE FOR INTERVIEWS</span>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { motion } from "motion/react";
import { Briefcase, Target } from "lucide-react";

export default function Hero() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-b border-zinc-800/80 pb-12 mb-16"
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 mb-6 font-mono text-xs shadow-[0_0_15px_-3px_rgba(34,211,238,0.25)] backdrop-blur-md">
        <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
        <span className="font-semibold tracking-wide">AVAILABLE FOR OPPORTUNITIES // APPLICATION SUPPORT • CLOUD</span>
      </div>

      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-3 text-white">
        RITVIK SARDHYAL
      </h1>
      <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-zinc-400 bg-clip-text text-transparent mb-6">
        Application Support Engineer | Cloud Engineer
      </h2>

      <p className="text-zinc-300 max-w-3xl text-lg sm:text-xl font-normal leading-relaxed mb-8">
        Application Support Engineer specializing in Azure Cloud, modern web technologies, and production support. Experienced in building scalable applications, implementing cloud infrastructure, and troubleshooting complex systems with a strong focus on reliability, automation, and performance. Passionate about delivering secure, maintainable solutions while continuously advancing expertise in cloud engineering and application operations.      </p>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-zinc-900/60 to-zinc-900/40 border border-cyan-500/30 backdrop-blur-md max-w-3xl flex items-start gap-4 shadow-[0_0_25px_-10px_rgba(34,211,238,0.15)]">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-mono text-cyan-300 font-bold uppercase tracking-wider mb-1">
             Professional Objective
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Seeking an opportunity to contribute as an Application Support Engineer and Cloud Engineer by applying strong problem-solving skills, Azure cloud knowledge, and modern web development expertise to deliver reliable, high-performance, and business-focused solutions.</p>
        </div>
      </div>
    </motion.header>
  );
}
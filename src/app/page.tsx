"use client";

import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Competencies from "@/components/Competencies";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Scroll-Linked Telemetry Progress Bar Top Border */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-[100] shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
      />

      {/* Ambient Lighting & Dot Matrix Canvas */}
      <div className="fixed inset-0 bg-[radial-gradient(#1f2028_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-45 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[300px] bg-gradient-to-tl from-purple-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Modular Component Tree */}
      <Navbar />
      
      <main className="p-6 md:p-16 max-w-6xl mx-auto relative z-10">
        <Hero />
        <CaseStudies />
        <Competencies />
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}
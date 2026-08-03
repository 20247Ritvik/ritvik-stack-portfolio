"use client";

import { motion } from "motion/react";

export default function Timeline() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-800/80 pt-20 mb-24 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16"
      >
        <div>
          <div className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="h-1.5 w-6 bg-cyan-400 inline-block rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            CAREER PROGRESSION & HISTORY
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Journey
          </h2>
        </div>

        <p className="text-zinc-400 text-sm sm:text-base max-w-md mt-3 md:mt-0 font-normal leading-relaxed">
          Professional growth through enterprise application support, cloud
          engineering, production operations, and hands-on Azure infrastructure
          projects.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-zinc-800/80 ml-4 sm:ml-8 space-y-12">

        {/* Current */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative pl-8 sm:pl-12 group"
        >
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-all duration-300" />

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-[#0c0c10]/60 border border-zinc-800/80 group-hover:border-cyan-500/40 group-hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-md">

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
                2025 — PRESENT
              </span>

              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                CURRENT FOCUS
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
              Cloud Engineer // Enterprise Portfolio Development
            </h3>

            <p className="text-sm font-mono text-zinc-500 mb-3">
              Independent Professional Development
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
              Expanded expertise in Azure cloud engineering and enterprise
              application support by building production-inspired infrastructure,
              hands-on AZ-104 practical implementations, and full-stack
              applications. Designed Azure networking, Application Gateway,
              Azure Firewall, Backup & Recovery, Monitoring, ARM deployments,
              and enterprise documentation while developing modern web
              applications using Next.js, Node.js, Prisma, PostgreSQL, and
              Azure.
            </p>

          </div>
        </motion.div>

        {/* Application Support */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="relative pl-8 sm:pl-12 group"
        >
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 border-zinc-600 group-hover:border-zinc-300 transition-all duration-300" />

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-[#0c0c10]/40 border border-zinc-800/60 group-hover:border-zinc-600 group-hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-md">

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-zinc-500 font-semibold">
                2023 — 2025
              </span>

              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-700">
                FULL TIME
              </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors mb-1">
              Application Support Engineer
            </h3>

            <p className="text-sm font-mono text-zinc-500 mb-3">
              Religare Broking Limited
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
              Delivered L1/L2 production support for enterprise fintech
              applications supporting customer onboarding, account origination,
              portfolio management, and workflow automation. Managed production
              incidents, monitored application and server health, validated
              deployments, investigated SQL and API issues, and collaborated
              with infrastructure and networking teams to maintain reliable
              business operations.
            </p>

          </div>
        </motion.div>

        {/* Flutter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="relative pl-8 sm:pl-12 group"
        >
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 border-zinc-700 group-hover:border-zinc-500 transition-all duration-300" />

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-[#0c0c10]/40 border border-zinc-800/60 group-hover:border-zinc-600 group-hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-md">

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-zinc-500 font-semibold">
                2022 — 2023
              </span>

              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-700">
                FULL TIME
              </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors mb-1">
              Flutter Developer
            </h3>

            <p className="text-sm font-mono text-zinc-500 mb-3">
              ScalaCode Private limited
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
              Developed cross-platform mobile applications using Flutter and
              Dart with REST APIs, Firebase, state management, and responsive UI
              development. Built a strong foundation in software engineering,
              debugging, API integration, clean architecture, and application
              lifecycle management before transitioning into enterprise
              application support.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
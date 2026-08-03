"use client";
import { motion } from "motion/react";
import { Code2, Server, Database, Layers } from "lucide-react";

export default function Competencies() {
return (
<section id="stack" className="mb-24 scroll-mt-24">
<motion.div initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} className="flex flex-col md:flex-row md:items-end justify-between mb-10">
<div>
<div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-widest font-semibold flex items-center gap-2">
<span className="h-1.5 w-6 bg-purple-400 inline-block rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
CORE EXPERTISE & TECHNOLOGIES
</div>
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Core Competencies & Stack</h2>
</div>
<p className="text-zinc-400 text-sm max-w-sm mt-2 md:mt-0">
Practical expertise across enterprise application support, Microsoft Azure, cloud infrastructure, full-stack development, databases, and production operations.
</p>
</motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
<div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold mb-4"><Code2 className="w-4 h-4"/><span>01 // PROGRAMMING</span></div>
<ul className="space-y-2.5 font-mono text-sm text-zinc-300">
<li className="flex justify-between"><span>JavaScript (ES6+)</span><span className="text-xs text-purple-400">Professional</span></li>
<li className="flex justify-between"><span>TypeScript</span><span className="text-xs text-purple-400">Professional</span></li>
<li className="flex justify-between"><span>Dart (Flutter)</span><span className="text-xs text-purple-400">Professional</span></li>
<li className="flex justify-between"><span>HTML5 / CSS3</span><span className="text-xs text-purple-400">Advanced</span></li>
<li className="flex justify-between"><span>SQL</span><span className="text-xs text-purple-400">Professional</span></li>
</ul></div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
<div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-4"><Server className="w-4 h-4"/><span>02 // DEVELOPMENT</span></div>
<ul className="space-y-2.5 font-mono text-sm text-zinc-300">
<li className="flex justify-between"><span>Next.js</span><span className="text-xs text-cyan-400">Project</span></li>
<li className="flex justify-between"><span>Node.js</span><span className="text-xs text-cyan-400">Project</span></li>
<li className="flex justify-between"><span>REST APIs</span><span className="text-xs text-cyan-400">Professional</span></li>
<li className="flex justify-between"><span>Prisma ORM</span><span className="text-xs text-cyan-400">Project</span></li>
<li className="flex justify-between"><span>Git & GitHub</span><span className="text-xs text-cyan-400">Professional</span></li>
</ul></div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
<div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-4"><Database className="w-4 h-4"/><span>03 // CLOUD & INFRASTRUCTURE</span></div>
<ul className="space-y-2.5 font-mono text-sm text-zinc-300">
<li className="flex justify-between"><span>Microsoft Azure</span><span className="text-xs text-emerald-400">Hands-on</span></li>
<li className="flex justify-between"><span>VNet • NSG • Peering</span><span className="text-xs text-emerald-400">Hands-on</span></li>
<li className="flex justify-between"><span>RT • UDR • Firewall</span><span className="text-xs text-emerald-400">Hands-on</span></li>
<li className="flex justify-between"><span>LB • AGW • Monitor</span><span className="text-xs text-emerald-400">Hands-on</span></li>
<li className="flex justify-between"><span>Storage • Backup</span><span className="text-xs text-emerald-400">Hands-on</span></li>
</ul></div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
<div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold mb-4"><Layers className="w-4 h-4"/><span>04 // APPLICATION SUPPORT</span></div>
<ul className="space-y-2.5 font-mono text-sm text-zinc-300">
<li className="flex justify-between"><span>Production Support</span><span className="text-xs text-amber-400">Professional</span></li>
<li className="flex justify-between"><span>Incident Management</span><span className="text-xs text-amber-400">Professional</span></li>
<li className="flex justify-between"><span>Server & App Monitoring</span><span className="text-xs text-amber-400">Professional</span></li>
<li className="flex justify-between"><span>Deployment Validation</span><span className="text-xs text-amber-400">Professional</span></li>
<li className="flex justify-between"><span>SQL & API Troubleshooting</span><span className="text-xs text-amber-400">Professional</span></li>
</ul></div>

</div>
</section>
);
}
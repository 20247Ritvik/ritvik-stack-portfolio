"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { Server, Shield, Zap, ArrowUpRight, Briefcase, TrendingUp, Target, CheckCircle2, ChevronDown } from "lucide-react";

// Tooltip Helper
function TooltipPill({ label, rationale, badgeClass }: { label: string; rationale: string; badgeClass: string }) {
  return (
    <div className="relative group/pill inline-block mb-2">
      <span className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md shadow-sm cursor-help transition-all inline-block ${badgeClass}`}>
        {label}
      </span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 rounded-xl bg-zinc-900/95 border border-cyan-500/40 text-[11px] font-mono text-zinc-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] opacity-0 translate-y-1 group-hover/pill:opacity-100 group-hover/pill:translate-y-0 transition-all duration-200 pointer-events-none z-30 text-center leading-tight backdrop-blur-md">
        <div className="text-cyan-400 font-bold mb-1 flex items-center justify-center gap-1">
          <Zap className="w-3 h-3 fill-cyan-400" />
          <span>ARCH_RATIONALE</span>
        </div>
        {rationale}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-cyan-500/40" />
      </div>
    </div>
  );
}

// New Stylish Expanded List Component
function ExpandableResponsibilities({ items, accentColor }: { items: string[], accentColor: "cyan" | "emerald" }) {
  const [isOpen, setIsOpen] = useState(false);
  const colorMap = {
    cyan: { text: "text-cyan-400", bgHover: "hover:bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-500" },
    emerald: { text: "text-emerald-400", bgHover: "hover:bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-500" }
  };
  const theme = colorMap[accentColor];

  return (
    <div className={`mt-2 border border-zinc-800/80 rounded-xl overflow-hidden bg-zinc-900/30 transition-colors ${isOpen ? theme.border : ""}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-full flex items-center justify-between p-3 text-xs font-mono font-semibold ${theme.text} ${theme.bgHover} transition-all cursor-pointer`}
      >
        <span className="flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5"/> 
          {isOpen ? " HIDE RESPONSIBILITIES" : " VIEW RESPONSIBILITIES"}
        </span>
        
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4"/>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="p-4 pt-1 space-y-3 text-zinc-300 text-sm list-none">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className={`${theme.icon} mt-0.5 text-lg leading-none`}>▹</span>
                  <span className="leading-relaxed text-zinc-300/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExpandableKeyImplementations({ items, accentColor }: { items: string[], accentColor: "cyan" | "emerald" }) {
  const [isOpen, setIsOpen] = useState(false);
  const colorMap = {
    cyan: { text: "text-cyan-400", bgHover: "hover:bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-500" },
    emerald: { text: "text-emerald-400", bgHover: "hover:bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-500" }
  };
  const theme = colorMap[accentColor];

  return (
    <div className={`mt-2 border border-zinc-800/80 rounded-xl overflow-hidden bg-zinc-900/30 transition-colors ${isOpen ? theme.border : ""}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-full flex items-center justify-between p-3 text-xs font-mono font-semibold ${theme.text} ${theme.bgHover} transition-all cursor-pointer`}
      >
        <span className="flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5"/> 
          {isOpen ? " HIDE KEY IMPLEMENTATIONS" : " VIEW KEY IMPLEMENTATIONS"}
        </span>
        
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4"/>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="p-4 pt-1 space-y-3 text-zinc-300 text-sm list-none">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className={`${theme.icon} mt-0.5 text-lg leading-none`}>▹</span>
                  <span className="leading-relaxed text-zinc-300/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mb-24 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-widest font-semibold"
      >
        <span className="h-1.5 w-6 bg-cyan-400 inline-block rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" /> 
        FEATURED ENTERPRISE CASE STUDIES
      </motion.div>
      
      <div className="grid grid-cols-1 gap-8">
        


        {/* CASE STUDY 0 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="border border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 via-[#0d0d12]/90 to-[#07070a]/90 p-8 sm:p-10 rounded-3xl backdrop-blur-xl group hover:border-sky-500/50 hover:shadow-[0_0_35px_-10px_rgba(14,165,233,0.25)] transition-all duration-500 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-mono text-[11px] mb-3 font-semibold tracking-wider">
                <Server className="w-3.5 h-3.5" />
                <span>DOMAIN: Cloud Computing | Azure Administration | Infrastructure</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Enterprise Azure Infrastructure & Administration Labs
              </h3>
              <div className="flex items-center gap-2 text-zinc-400 text-sm font-semibold">
                <Briefcase className="w-4 h-4 text-zinc-500" />
                <span>Role: Azure Administrator (Hands-on Implementation Project)</span>
              </div>
            </div>

            <a
              href="https://github.com/20247Ritvik/azure-administration-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-sky-700/60 bg-sky-950/30 text-sky-300 text-sm font-semibold hover:bg-sky-900/40 hover:border-sky-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(14,165,233,0.25)]"
            >
<FaGithub className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Overview</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  A comprehensive Azure Administration project focused on designing, deploying, and managing enterprise cloud infrastructure through hands-on implementation of Microsoft Azure services. The project covers compute, networking, storage, monitoring, backup, security, and infrastructure deployment while following production-style documentation standards.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Key Implementations</h4>
                <ExpandableKeyImplementations
                  accentColor="cyan"
                  items={[
                    "Configured Azure Virtual Machines, Virtual Networks, Subnets and Storage Accounts.",
                    "Implemented NSGs, VNet Peering, Route Tables, Azure Firewall and Application Gateway.",
                    "Configured Azure Monitor, Metrics, Alert Rules and Action Groups.",
                    "Implemented Azure Backup using Recovery Services Vault and Restore Point Collections.",
                    "Deployed infrastructure using ARM Templates.",
                    "Validated networking, routing and security configurations.",
                    "Documented every practical with GitHub-ready documentation, screenshots and architecture diagrams.",
                    "Troubleshot deployment validation, backup conflicts and networking issues."
                  ]}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Challenges Solved</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Implemented and validated Azure networking, monitoring, storage and backup scenarios while resolving deployment validation failures, backup conflicts, listener association issues and routing configurations through practical troubleshooting.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Technical Outcomes</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Developed a comprehensive Azure administration portfolio featuring production-inspired implementations, structured documentation, architecture-driven deployments, and validated cloud infrastructure scenarios demonstrating end-to-end administration capabilities.</p>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mr-2 mb-2">Technologies:</span>
            <TooltipPill label="Azure Portal" rationale="Azure resource deployment and administration." badgeClass="bg-sky-950/40 border border-sky-800/60 text-sky-300" />
            <TooltipPill label="Azure VMs" rationale="Compute infrastructure." badgeClass="bg-sky-950/40 border border-sky-800/60 text-sky-300" />
            <TooltipPill label="Azure Networking" rationale="VNets, NSGs, Peering and Routing." badgeClass="bg-sky-950/40 border border-sky-800/60 text-sky-300" />
            <TooltipPill label="Azure Monitor" rationale="Monitoring and alerts." badgeClass="bg-sky-950/40 border border-sky-800/60 text-sky-300" />
            <TooltipPill label="Recovery Services Vault" rationale="Backup and recovery." badgeClass="bg-sky-950/40 border border-sky-800/60 text-sky-300" />
            <TooltipPill label="ARM Templates" rationale="Infrastructure as Code." badgeClass="bg-sky-950/40 border border-sky-800/60 text-sky-300" />
          </div>
        </motion.div>


        {/* CASE STUDY 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="border border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 via-[#0d0d12]/90 to-[#07070a]/90 p-8 sm:p-10 rounded-3xl backdrop-blur-xl group hover:border-cyan-500/50 hover:shadow-[0_0_35px_-10px_rgba(34,211,238,0.25)] transition-all duration-500 relative overflow-hidden"
        >
          {/* Top Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] mb-3 font-semibold tracking-wider">
                <Server className="w-3.5 h-3.5" />
                <span>DOMAIN: FinTech | Capital Markets | Customer Onboarding</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                 Customer Onboarding & Account Origination Platform
              </h3>
              <div className="flex items-center gap-2 text-zinc-400 text-sm font-semibold">
                <Briefcase className="w-4 h-4 text-zinc-500" />
                <span>Role: Application Support Engineer (L1/L2 Production Support)</span>
              </div>
            </div>
            
          </div>

          {/* Enterprise Brief Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Overview</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  A mission-critical enterprise platform designed to streamline customer onboarding and account origination for a leading fintech brokerage ecosystem. The application enables the creation of customer profiles, Demat and Trading accounts, relationship mapping, branch allocation, Business Partner (BP) onboarding, and workflow-driven approvals. It integrates with multiple internal brokerage and portfolio management systems through secure APIs, ensuring seamless customer lifecycle management and consistent data synchronization across the organization`s applications.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Core Responsibilities</h4>
                
                {/* UPGRADED ACCORDION COMPONENT */}
                <ExpandableResponsibilities 
                  accentColor="cyan"
                  items={[
                    "Provided L1/L2 production support for the Customer Onboarding & Account Origination Platform.",
                    "Investigated and resolved application incidents related to customer onboarding, account creation, workflow execution, and API integrations.",
                    "Monitored production servers, application health, and system availability to ensure uninterrupted business operations.",
                    "Performed root cause analysis using application logs, SQL validation, and server diagnostics.",
                    "Coordinated with Infrastructure, Server, and Networking teams to resolve server-side issues and restore application services during critical incidents.",
                    "Supported production deployments, post-release validations, and routine maintenance activities.",
                    "Responded to advisory alerts, monitored server availability, and ensured timely communication during outages or degraded system performance.",
                    "Validated customer data, account creation workflows, and integration points across interconnected enterprise applications while maintaining SLA compliance."
                  ]} 
                />

              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><Target className="w-3 h-3 text-amber-500" /> Challenges Solved</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Diagnosed and resolved production incidents involving customer onboarding workflows, account origination, API integrations, and server availability by analyzing application logs, SQL data, and system behavior. Collaborated with Server, Infrastructure, and Networking teams to investigate server-side issues, restore application availability, monitor advisory alerts, and ensure stable production operations with minimal business disruption.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-emerald-500" /> Business Impact</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Contributed to uninterrupted customer onboarding and account origination processes by maintaining application stability, resolving production incidents within SLA timelines, supporting critical deployment activities, and ensuring seamless integration across interconnected brokerage systems. Helped minimize operational downtime through proactive monitoring, timely incident response, and effective cross-team collaboration, enabling reliable business operations for internal users and customers.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Footer (Rationales Fixed) */}
          <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mr-2 mb-2">Technologies:</span>
            <TooltipPill label="Azure" rationale="Enterprise cloud infrastructure for scalable deployment." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />
            <TooltipPill label="SQL" rationale="Relational data management and complex query optimization." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />
            <TooltipPill label="Windows Server IIS" rationale="Primary web server for hosting secure enterprise applications." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />
            <TooltipPill label="ServiceNow/Jira" rationale="ITSM integration for incident tracking and agile workflows." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />
            <TooltipPill label="Site24x7 Monitoring" rationale="Real-time telemetry and infrastructure health monitoring." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />  
            <TooltipPill label="REST APIs" rationale="Stateless endpoints for cross-platform system integration." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />  
            <TooltipPill label="Log Analysis" rationale="Root cause identification through diagnostic trace inspection." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />  
            <TooltipPill label="L1/L2 Support" rationale="Incident resolution across network and infra teams." badgeClass="bg-cyan-950/40 border border-cyan-800/60 text-cyan-300" />  
          </div>
        </motion.div>

        {/* CASE STUDY 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 via-[#0d0d12]/90 to-[#07070a]/90 p-8 sm:p-10 rounded-3xl backdrop-blur-xl group hover:border-emerald-500/50 hover:shadow-[0_0_35px_-10px_rgba(16,185,129,0.2)] transition-all duration-500 relative overflow-hidden"
        >
          {/* Top Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] mb-3 font-semibold tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>DOMAIN: FinTech | Capital Markets | Customer Lifecycle</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Customer Lifecycle & Portfolio Management Platform              
              </h3>
              <div className="flex items-center gap-2 text-zinc-400 text-sm font-semibold">
                <Briefcase className="w-4 h-4 text-zinc-500" />
                <span>Role: Application Support Engineer (L1/L2 Production Support)</span>
              </div>
            </div>
            
          </div>

          {/* Enterprise Brief Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Overview</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  A mission-critical enterprise platform designed to manage the post-onboarding customer lifecycle within a fintech brokerage ecosystem. The application enables users to update customer profiles, maintain portfolio information, manage Business Partners (BP), Relationship Managers (RM), branch mappings, and workflow-driven account modifications. Integrated with multiple internal brokerage and operational systems through secure APIs, it ensured consistent customer data, seamless portfolio management, and synchronized business operations across the organization`s ecosystem.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Core Responsibilities</h4>
                
                {/* UPGRADED ACCORDION COMPONENT */}
                <ExpandableResponsibilities 
                  accentColor="emerald"
                  items={[
                    "Provided L1/L2 production support for the Customer Lifecycle & Portfolio Management Platform.",
                    "Investigated and resolved production incidents related to customer profile updates, portfolio management, workflow execution, and API integrations.",
                    "Supported business operations involving customer information, Relationship Managers (RM), Business Partners (BP), branch mappings, and account maintenance workflows.",
                    "Monitored production servers, application health, and system availability to ensure continuous service reliability.",
                    "Performed root cause analysis using application logs, SQL validation, and server diagnostics to resolve application issues.",
                    "Coordinated with Infrastructure, Server, and Networking teams to troubleshoot server-side incidents, maintenance activities, and production outages.",
                    "Responded to advisory alerts, monitored server availability, and communicated production incidents to relevant stakeholders.",
                    "Supported production deployments, routine maintenance, post-release validation, and ensured SLA compliance across interconnected enterprise applications."
                  ]} 
                />

              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><Target className="w-3 h-3 text-amber-500" /> Challenges Solved</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Resolved complex production issues affecting customer profile management, portfolio updates, workflow execution, and API-based integrations by performing root cause analysis, SQL validation, and application log investigation. Collaborated with Server, Infrastructure, and Networking teams to address server outages, maintenance activities, and performance issues while monitoring advisory alerts to restore service availability with minimal operational disruption.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-emerald-500" /> Business Impact</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Enabled reliable customer lifecycle and portfolio management by maintaining application stability, resolving production incidents, and ensuring accurate synchronization across integrated brokerage systems. Supported uninterrupted business operations through proactive monitoring, timely issue resolution, and effective collaboration with infrastructure teams, helping deliver a seamless experience for internal business users and customers.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Footer (Rationales Fixed) */}
          <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mr-2 mb-2">Technologies:</span>
            <TooltipPill label="Azure" rationale="Enterprise cloud infrastructure for scalable deployment." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />
            <TooltipPill label="SQL" rationale="Relational data management and complex query optimization." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />
            <TooltipPill label="Windows Server IIS" rationale="Primary web server for hosting secure enterprise applications." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />
            <TooltipPill label="ServiceNow/Jira" rationale="ITSM integration for incident tracking and agile workflows." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />
            <TooltipPill label="Site24x7 Monitoring" rationale="Real-time telemetry and infrastructure health monitoring." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />  
            <TooltipPill label="REST APIs" rationale="Stateless endpoints for cross-platform system integration." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />  
            <TooltipPill label="Log Analysis" rationale="Root cause identification through diagnostic trace inspection." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />  
            <TooltipPill label="L1/L2 Support" rationale="Incident resolution across network and infra teams." badgeClass="bg-emerald-950/40 border border-emerald-800/60 text-emerald-300" />  
          </div>
        </motion.div>

      </div>
    </section>
  );
}
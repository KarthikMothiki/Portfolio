import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Cpu,
  ShieldCheck,
  X,
  CheckCircle2,
  Bot,
  Code2,
  Sparkles,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

interface Project {
  id: string;
  category: 'robotics' | 'ai' | 'cpp';
  categoryLabel: string;
  title: string;
  subtitle: string;
  role: string;
  img: string;
  summary: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string;

  // Deep-dive specifications for optional inspection modal
  problem?: string;
  constraints?: string[];
  alternativesConsidered?: string[];
  systemBoundaries?: string;
  keyDecisions?: string[];
  failureModes?: string[];
  validationMetrics?: string[];
  organizationalImpact?: string;
  v2Improvements?: string;
}

export const CaseStudiesSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'robotics' | 'ai' | 'cpp'>('all');
  const [modalTab, setModalTab] = useState<'arch' | 'reliability' | 'impact'>('arch');

  const projects: Project[] = [
    {
      id: 'oro-base',
      category: 'robotics',
      categoryLabel: 'ROBOTICS & ROS',
      title: 'ORo Base Autonomous Robotics Platform',
      subtitle: 'Modular C++17 HAL, Thread-Safe Safety Queues & Vision Docking',
      role: 'Technical Owner / Senior Robotics Engineer',
      img: 'assets/img/robotics_hal.png',
      summary:
        'Architected modular C++17 Hardware Abstraction Layer (HAL) isolating 13+ sensors/actuators with 1Gbps ZeroMQ IPC and autonomous vision docking.',
      tags: ['C++17', 'ROS2', 'ESP32-S3', 'ZeroMQ', 'Vision Docking'],
      highlights: [
        '78/100 Vision Docking Trial Success Rate',
        '1Gbps IPC Telemetry with <1ms Latency',
        'Zero Deadlocks across 100+ Hours Test Suite',
      ],
      githubUrl: 'https://github.com/KarthikMothiki',
      problem:
        'Architect an autonomous mobile wellness robot managing 13+ heterogeneous sensors and actuators with deterministic safety routines and precision vision docking under tight compute limits.',
      constraints: [
        'Heterogeneous compute: ESP32-S3 microcontroller + onboard Linux host',
        'Strict real-time actuation limits for motor driver communication',
        'Physical docking geometry with narrow alignment tolerances',
      ],
      alternativesConsidered: [
        'Monolithic Thread Architecture: Rejected due to lock contention risk and safety thread starvation.',
        'HTTP REST Inter-Process Telemetry: Rejected due to >15ms serialization latency.',
      ],
      systemBoundaries:
        'Sensors/Actuators ↔ ESP32-S3 Microcontroller (FreeRTOS HAL) ↔ POSIX UART/V4L2 ↔ ZeroMQ 1Gbps IPC Bus ↔ Linux Host ROS2 Controller ↔ Vision Docking Node.',
      keyDecisions: [
        'Designed modular C++17 HAL isolating physical hardware drivers from upper-level ROS decision software.',
        'Implemented thread-safe safety execution queues with non-blocking emergency overrides.',
        'Created 1Gbps ZeroMQ socket layer for low-latency inter-process telemetry.',
        'Engineered vision-guided rear docking pipeline using custom fiducial markers.',
      ],
      failureModes: [
        'UART Packet Corruption: Auto-recovering CRC check state machine with fallback safety stop.',
        'Docking Fiducial Occlusion: Motion-estimator odometry fallback preventing sudden trajectory jumps.',
      ],
      validationMetrics: [
        '78/100 successful autonomous docking trials in variable lighting',
        '1Gbps inter-process telemetry throughput at <1ms latency',
        'Zero deadlocks across 100+ continuous test hours',
      ],
      organizationalImpact:
        'Reduced sensor integration time from weeks to 2 days by enforcing standard C++17 HAL interfaces.',
      v2Improvements:
        'Integrate hardware-accelerated Depth AI vision sensors directly into the HAL bus for sub-millimeter docking accuracy.',
    },
    {
      id: 'sutradhara',
      category: 'ai',
      categoryLabel: 'AI & ORCHESTRATION',
      title: 'Sūtradhāra (सूत्रधार — The Orchestrator)',
      subtitle: 'Autonomous Multi-Agent Productivity Orchestrator',
      role: 'Lead AI Systems & Backend Architect',
      img: 'assets/img/sutradhara_ui.png',
      summary:
        'Architected a deterministic multi-agent AI orchestrator using Google ADK, Gemini 2.0/2.5, and Model Context Protocol (MCP) with stateful HITL rollback.',
      tags: ['Python 3.10+', 'Google ADK', 'Gemini 2.0/2.5', 'MCP', 'FastAPI'],
      highlights: [
        '97.5% Reduction in Workflow Time (~10m to ~15s)',
        '100% Write Safety via Mandatory HITL Staging',
        '<50ms WS Latency & 10Hz Token Streaming',
      ],
      githubUrl: 'https://github.com/KarthikMothiki/sutradhara',
      problem:
        'Fragmented workflow management across Google Workspace & Notion creates high context-switching overhead. Autonomous LLMs mutating databases pose hallucination risks (calendar deletions/erroneous task updates). Single-agent LLMs lack delegation topologies and safety gating.',
      constraints: [
        'Stateless GCP Cloud Run footprint (1 vCPU, 512MB RAM) requiring async DB persistence for session continuity.',
        'WebSocket latency budget <50ms for real-time thought trace broadcasting ("The Loom") & API response <100ms.',
        'Continuous token streaming at 10 Hz for dynamic Mermaid workflow diagrams without UI freeze.',
        'Zero unauthorized write mutations—all write operations MUST be staged as draft PendingAction objects.',
      ],
      alternativesConsidered: [
        'Monolithic Single-Agent Prompting (15+ Tools): Rejected due to context clutter, higher costs, and tool hallucination.',
        'Hardcoded Sequential Chains (LangChain/Zapier): Rejected due to lack of dynamic non-linear delegation.',
        'Polling HTTP UI: Rejected due to high latency and zero visibility into real-time LLM reasoning steps.',
      ],
      systemBoundaries:
        'User Input (Voice/Vision/Text) ↔ FastAPI REST/WebSockets ↔ Google ADK Session Service ↔ Root Manager Agent ↔ 7 Sub-Agent Crew ↔ MCP Server Tools ↔ PendingAction Staging Gate ↔ User HITL Approval ↔ Execution Engine & ActionLog Rollback.',
      keyDecisions: [
        'Hierarchical 7-Agent Crew Topology: Google ADK Manager delegating to Planner, Calendar, Notion, Focus, Anticipator, and Research agents.',
        'MCP Server Abstraction: Standardized tool interface layer connecting agents to SaaS APIs, decoupling LLM orchestration from SDK changes.',
        'Mandatory HITL Staging Engine: Destructive actions return staged action_id in a PendingAction transaction requiring explicit approval.',
        'Stateful Dual-Layer Rollback Engine: Captures pre-change resource states (reverse_data) for atomic single-click undo.',
      ],
      failureModes: [
        'SaaS API Downtime / Missing Credentials: Dynamic Demo Mode switch (DEMO_MODE=true) routing to pre-seeded mock datasets.',
        'Multi-Model LLM Outages: Automated fallback chain (gemini-2.5-flash → gemini-2.0-flash → 2.0-flash-lite → Vertex AI).',
        'Timezone & Relative Date Drift: Dynamic IANA timezone & ISO 8601 offset (+05:30) injection into instructions.',
        'Schedule Overlaps: Deterministic conflict detection algorithm (_detect_conflicts) surfacing CONFLICT_RED_ZONE alerts.',
      ],
      validationMetrics: [
        'WebSocket Latency: <50ms real-time event delivery',
        'FastAPI API Latency: <100ms for core backend routes',
        'Token Streaming: Real-time chunk updates at 10 Hz',
        'Execution Accuracy: 95%+ task execution accuracy across Tier 2 workflows',
        'Write Safety: 100% protection against unauthorized mutations via HITL staging',
      ],
      organizationalImpact:
        'Reduced multi-step cross-app planning time from ~10 minutes to ~15 seconds (97.5% reduction), reduced task switching by 60%, and cut tool integration time from 2 weeks to 2 days.',
      v2Improvements:
        '1. Distributed Session Management via Redis / Cloud SQL for stateless scaling.\n2. Bi-Directional Streaming Voice via Gemini Live API.\n3. Enterprise MCP Network Expansion (Slack, Gmail, Jira, GitHub).\n4. Local SLM Fallback (Gemma 2 2B) for offline privacy tasks.',
    },
    {
      id: 'cppsentry',
      category: 'cpp',
      categoryLabel: 'C++ & EMBEDDED',
      title: 'CppSentry Static Analysis & Quality Engine',
      subtitle: 'Compiler-Level Static Safety Verification for Embedded C++',
      role: 'Creator & Lead Developer',
      img: 'assets/img/cppsentry_ui.png',
      summary:
        'AI-assisted C++17 static analysis engine combining AST parsing with LLM reasoning to evaluate memory safety and detect ISR blocking calls.',
      tags: ['C++17', 'Static Analysis', 'AST Parsing', 'LLM Reasoning', 'FastAPI'],
      highlights: [
        '10k+ Lines Analyzed in <500ms',
        '100% Catch Rate on Dynamic Memory in ISR Loops',
        'Automated Memory Safety Verification',
      ],
      githubUrl: 'https://github.com/KarthikMothiki',
      problem:
        'Automate static safety enforcement for C++17 codebase rules (memory leaks, uninitialized pointers, non-deterministic dynamic allocations in real-time loops).',
      constraints: [
        'Fast execution speed requirement for CI/CD pre-commit hooks',
        'Zero false positive target on critical real-time code patterns',
      ],
      alternativesConsidered: [
        'Pure Regex Matching: Rejected due to inability to resolve C++ templates and complex AST scopes.',
        'Heavyweight Compiler Plugins: Rejected due to build toolchain lock-in and high setup friction.',
      ],
      systemBoundaries:
        'C++ Source Files ↔ Tree-Sitter AST Parser ↔ Static Rule Analyzer ↔ LLM Context Reasoner ↔ FastAPI REST / CLI Output.',
      keyDecisions: [
        'Created custom static checks targeting thread-safety and dynamic memory allocation in ISRs.',
        'Combined AST tree-sitter analysis with structured LLM diagnostic reasoning.',
        'Integrated zero-dependency CLI executable for fast local runs.',
      ],
      failureModes: [
        'Syntax Parse Errors: Tree-sitter fault-tolerant error node recovery maintaining partial AST scanning.',
      ],
      validationMetrics: [
        'Analyzed 10k+ lines of C++ code in <500ms',
        'Caught 100% of dynamic memory allocation calls inside deterministic HAL loops',
      ],
      organizationalImpact:
        'Prevented non-deterministic malloc calls and unhandled raw pointer leaks from entering production firmware branches.',
      v2Improvements:
        'Add automatic fix-it refactoring hints for detected safety violations.',
    },
    {
      id: 'hv100-ros',
      category: 'robotics',
      categoryLabel: 'ROBOTICS & ROS',
      title: 'HV-100 Agricultural Robot ROS Modernization',
      subtitle: 'Legacy Architecture Modernization & 5-DOF Manipulator',
      role: 'Mechatronics Engineer',
      img: 'assets/img/robotics_hal.png',
      summary:
        'Modernized legacy control software for the Harvest Automation HV-100 agricultural platform and integrated an IGUS 5-DOF robotic arm for crop handling.',
      tags: ['ROS / ROS2', 'MoveIt', 'Manipulators', 'Raspberry Pi', 'Embedded Linux'],
      highlights: [
        '50+ Pick-and-Place Field Trial Executions',
        '100% Collision-Free Trajectory Planning',
        'Raspberry Pi OEM Protocol ROS Bridge',
      ],
      githubUrl: 'https://github.com/KarthikMothiki',
      problem:
        'Modernize legacy control software for the HV-100 agricultural mobile platform and integrate an IGUS 5-DOF robotic manipulator for automated crop handling.',
      constraints: [
        'Rugged outdoor agricultural terrain and power fluctuation limits',
        'Legacy code compatibility without breaking field operational safety',
      ],
      keyDecisions: [
        'Refactored legacy monolithic control code into modular ROS packages.',
        'Integrated MoveIt motion planning pipeline customized for IGUS 5-DOF joint limits.',
        'Designed deterministic trajectory execution controller with safety envelope checks.',
      ],
      validationMetrics: [
        'Successfully completed 50+ manipulator pick-and-place trials',
        'Achieved 100% collision-free motion planning in field test environments',
      ],
      organizationalImpact:
        'Enabled automated plant positioning in greenhouse facilities, reducing manual labor intervention.',
      v2Improvements:
        'Upgrade to ROS2 Humble with micro-ROS on joint motor controllers for real-time EtherCAT bus communication.',
    },
    {
      id: 'mobile-manipulator',
      category: 'robotics',
      categoryLabel: 'ROBOTICS & ROS',
      title: 'Autonomous Navigation with Mobile Manipulator',
      subtitle: 'KUKA youBot Simulation & Dynamic Obstacle Avoidance',
      role: 'Robotics Developer',
      img: 'assets/img/robotics_hal.png',
      summary:
        'Developed high-fidelity mobile manipulator simulation using KUKA youBot in CoppeliaSim, implementing MoveIt trajectory generation and dynamic avoidance.',
      tags: ['ROS', 'KUKA youBot', 'CoppeliaSim', 'MoveIt', 'Trajectory Planning'],
      highlights: [
        'Real-time Dynamic Obstacle Avoidance',
        'CoppeliaSim Physics Engine Synchronization',
        'Full Kinematic Trajectory Generation',
      ],
      githubUrl: 'https://github.com/KarthikMothiki',
      problem:
        'Develop autonomous navigation and mobile manipulation routines for complex indoor environments with moving obstacles.',
      constraints: [
        'Non-holonomic mobility constraints and joint torque boundaries',
        'Real-time collision calculation in physics engine',
      ],
      keyDecisions: [
        'Implemented MoveIt motion planner for simultaneous mobile base and 5-DOF arm coordination.',
        'Configured ROS sensor costmaps for dynamic obstacle re-routing.',
      ],
      validationMetrics: [
        'Smooth path planning execution across simulated obstacle courses',
        'Zero physical collision events in CoppeliaSim benchmark tests',
      ],
      organizationalImpact:
        'Provided a reusable ROS simulation harness for mobile manipulator research.',
      v2Improvements:
        'Transition to Gazebo Ignition with ROS2 Control interfaces.',
    },
    {
      id: 'flower-classifier',
      category: 'ai',
      categoryLabel: 'AI & ORCHESTRATION',
      title: 'Deep Learning Image Classifier Engine',
      subtitle: 'PyTorch Neural Vision Network & CLI Interface',
      role: 'Machine Learning Engineer',
      img: 'assets/img/sutradhara_ui.png',
      summary:
        'Trained a deep learning computer vision model using PyTorch and pre-trained VGG16 architecture to predict flower species with top-5 confidence scoring.',
      tags: ['PyTorch', 'VGG16', 'Deep Learning', 'Computer Vision', 'Python CLI'],
      highlights: [
        '78.09% Validation Classification Accuracy',
        'Pre-trained VGG16 Transfer Learning',
        'Command Line Inference App',
      ],
      githubUrl: 'https://github.com/KarthikMothiki',
      problem:
        'Construct a fine-tuned deep learning classifier capable of accurately distinguishing flower categories with top-K probability metrics.',
      constraints: [
        'Limited dataset size requiring data augmentation techniques',
        'Efficient training speed on standard GPU acceleration',
      ],
      keyDecisions: [
        'Utilized pre-trained VGG16 architecture with custom classification head fine-tuning.',
        'Implemented CLI prediction app accepting arbitrary images for fast verification.',
      ],
      validationMetrics: [
        'Achieved 78.09% top-1 accuracy on validation test set',
      ],
      organizationalImpact:
        'Demonstrated rapid transfer learning pipeline for domain-specific vision tasks.',
      v2Improvements:
        'Upgrade backbone to Vision Transformers (ViT) for higher accuracy.',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'robotics':
        return <Bot className="w-3.5 h-3.5" />;
      case 'ai':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'cpp':
        return <Code2 className="w-3.5 h-3.5" />;
      default:
        return <Cpu className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section className="py-12 md:py-16 grid-blueprint border-t border-[var(--border-color)] relative" id="case-studies">
      <SciFiContainer>
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-2 tracking-widest">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SYSTEMS & PROJECTS GALLERY</span>
            </div>
            <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              FEATURED PROJECTS & SYSTEMS
            </h2>
            <p className="text-slate-700 dark:text-zinc-300 text-xs sm:text-sm max-w-2xl mt-1 font-normal">
              Production robotics platforms, distributed multi-agent orchestrators, and static code verification engines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[var(--card-bg)] p-1.5 rounded-xl border border-[var(--border-color)] font-tech text-xs shrink-0">
            {[
              { id: 'all', label: 'ALL PROJECTS' },
              { id: 'robotics', label: 'ROBOTICS & ROS' },
              { id: 'ai', label: 'AI & ORCHESTRATION' },
              { id: 'cpp', label: 'C++ & EMBEDDED' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveFilter(tab.id as any);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3 py-1.5 rounded-lg font-bold tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[var(--tech-cyan)] text-white dark:text-black shadow-[0_0_12px_var(--header-glow)]'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Decluttered Structured Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="clean-card flex flex-col justify-between cyber-bracket overflow-hidden group"
              >
                <div>
                  {/* Image / Banner Header */}
                  <div className="relative h-40 overflow-hidden border-b border-[var(--border-color)] bg-slate-900/80">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-85" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[var(--tech-cyan)]/40 text-[var(--tech-cyan)] font-tech text-[10px] font-bold">
                      {getCategoryIcon(project.category)}
                      <span>{project.categoryLabel}</span>
                    </div>

                    {/* Quick Specs Inspector Trigger Button */}
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setModalTab('arch');
                        setSelectedProject(project);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-black/70 hover:bg-[var(--tech-cyan)] text-white hover:text-black border border-white/20 transition-all cursor-pointer"
                      title="Inspect Technical Specifications"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5">
                    <div className="text-[10px] font-tech text-[var(--tech-cyan)] font-bold mb-1 tracking-wider uppercase">
                      {project.role}
                    </div>

                    <h3 className="font-orbitron font-extrabold text-base text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[var(--tech-cyan)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-700 dark:text-zinc-300 text-xs font-normal leading-relaxed mb-4 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* High-Signal Bullet Chips (Capped at 3) */}
                    <div className="space-y-1.5 mb-4 font-tech text-[11px]">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-800 dark:text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--tech-emerald)] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Primary Tech Stack Tags (Capped at 5) */}
                    <div className="flex flex-wrap gap-1.5 font-tech">
                      {project.tags.slice(0, 5).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[var(--inner-box-bg)] border border-[var(--inner-box-border)] text-slate-700 dark:text-zinc-300 text-[10px] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 mt-auto flex items-center justify-between gap-3 border-t border-[var(--border-color)]/50 pt-3">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setModalTab('arch');
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className="inline-flex items-center gap-1.5 font-tech text-xs font-bold text-[var(--tech-cyan)] hover:underline cursor-pointer"
                  >
                    Tech Breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      onMouseEnter={() => soundFx.playHover()}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--inner-box-bg)] hover:bg-[var(--tech-cyan)] hover:text-white dark:hover:text-black border border-[var(--inner-box-border)] text-slate-700 dark:text-zinc-300 font-tech text-[11px] font-bold transition-all"
                    >
                      <ExternalLink className="w-3 h-3" /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tabbed Interactive Spec Modal (Fits Comfortably in Viewport <82vh) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="clean-card w-full max-w-4xl max-h-[82vh] flex flex-col cyber-bracket bg-[var(--bg-primary)] border-[var(--tech-cyan)] p-5 sm:p-6 shadow-[0_0_40px_rgba(0,240,255,0.3)] relative overflow-hidden"
              >
                {/* Modal Top Header Bar */}
                <div className="flex items-start justify-between gap-4 border-b border-[var(--border-color)] pb-3 mb-4 shrink-0">
                  <div>
                    <div className="flex items-center gap-2 text-[var(--tech-cyan)] font-tech text-xs font-bold mb-1">
                      {getCategoryIcon(selectedProject.category)}
                      <span>{selectedProject.categoryLabel}</span>
                      <span>•</span>
                      <span>{selectedProject.role}</span>
                    </div>
                    <h3 className="font-orbitron font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(null);
                    }}
                    className="p-1.5 rounded-lg bg-[var(--inner-box-bg)] text-slate-500 hover:text-slate-900 dark:hover:text-white border border-[var(--inner-box-border)] transition-all cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Tab Navigation (Recruiter & Staff Engineer Quick Access) */}
                <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3 mb-4 shrink-0 font-tech text-xs">
                  {[
                    { id: 'arch', label: '01. ARCHITECTURE & BOUNDARIES' },
                    { id: 'reliability', label: '02. RELIABILITY & METRICS' },
                    { id: 'impact', label: '03. IMPACT & V2 ROADMAP' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        soundFx.playClick();
                        setModalTab(tab.id as any);
                      }}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                        modalTab === tab.id
                          ? 'bg-[var(--tech-cyan)] text-white dark:text-black shadow-[0_0_12px_var(--header-glow)]'
                          : 'bg-[var(--inner-box-bg)] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-[var(--inner-box-border)]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Modal Tab Content Area (Scrollable flex-1 inside 82vh) */}
                <div className="flex-1 overflow-y-auto pr-1 font-tech text-xs space-y-4">
                  {/* TAB 1: ARCHITECTURE & BOUNDARIES */}
                  {modalTab === 'arch' && (
                    <div className="space-y-4">
                      {selectedProject.problem && (
                        <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                          <h4 className="font-orbitron text-xs font-bold text-[var(--tech-cyan)] uppercase mb-2">
                            01. Core Problem Statement
                          </h4>
                          <p className="text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                            {selectedProject.problem}
                          </p>
                        </div>
                      )}

                      {selectedProject.keyDecisions && (
                        <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                          <h4 className="font-orbitron text-xs font-bold text-[var(--tech-cyan)] uppercase mb-2">
                            02. Key Architectural Decisions & Innovations
                          </h4>
                          <ul className="space-y-1.5 text-slate-700 dark:text-zinc-300">
                            {selectedProject.keyDecisions.map((kd, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[var(--tech-emerald)] font-bold">✓</span>
                                <span>{kd}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProject.systemBoundaries && (
                        <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                          <h4 className="font-orbitron text-xs font-bold text-[var(--tech-cyan)] uppercase mb-2">
                            03. System Boundaries & Dataflow Topology
                          </h4>
                          <p className="text-[var(--tech-emerald)] font-tech text-[11px] leading-relaxed bg-black/40 p-3 rounded border border-[var(--border-color)] font-mono">
                            {selectedProject.systemBoundaries}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 2: RELIABILITY & METRICS */}
                  {modalTab === 'reliability' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.constraints && (
                          <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                            <h4 className="font-orbitron text-xs font-bold text-[var(--tech-cyan)] uppercase mb-2">
                              01. Engineering Constraints
                            </h4>
                            <ul className="space-y-1.5 text-slate-700 dark:text-zinc-300">
                              {selectedProject.constraints.map((c, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[var(--tech-amber)]">•</span>
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedProject.failureModes && (
                          <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                            <h4 className="font-orbitron text-xs font-bold text-[var(--tech-amber)] uppercase mb-2 flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-[var(--tech-amber)]" />
                              02. Failure Modes & Resilience
                            </h4>
                            <ul className="space-y-1.5 text-slate-700 dark:text-zinc-300">
                              {selectedProject.failureModes.map((fm, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[var(--tech-amber)] font-bold">•</span>
                                  <span>{fm}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {selectedProject.validationMetrics && (
                        <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                          <h4 className="font-orbitron text-xs font-bold text-[var(--tech-emerald)] uppercase mb-2 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[var(--tech-emerald)]" />
                            03. Hard Ground-Truth Metrics & Validation
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-zinc-300">
                            {selectedProject.validationMetrics.map((vm, i) => (
                              <li key={i} className="flex items-start gap-1.5 bg-black/20 p-2 rounded border border-[var(--border-color)]">
                                <span className="text-[var(--tech-emerald)] font-bold">✓</span>
                                <span>{vm}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 3: IMPACT & V2 ROADMAP */}
                  {modalTab === 'impact' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.alternativesConsidered && (
                          <div className="bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
                            <h4 className="font-orbitron text-xs font-bold text-[var(--tech-cyan)] uppercase mb-2">
                              01. Alternatives Considered & Rejected
                            </h4>
                            <ul className="space-y-1.5 text-slate-700 dark:text-zinc-300">
                              {selectedProject.alternativesConsidered.map((alt, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[var(--tech-amber)]">•</span>
                                  <span>{alt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedProject.organizationalImpact && (
                          <div className="bg-[var(--tech-emerald)]/10 p-4 rounded-xl border border-[var(--tech-emerald)]/30">
                            <h4 className="font-orbitron text-xs font-bold text-[var(--tech-emerald)] uppercase mb-2">
                              02. Business & Engineering Impact
                            </h4>
                            <p className="text-slate-900 dark:text-white leading-relaxed">
                              {selectedProject.organizationalImpact}
                            </p>
                          </div>
                        )}
                      </div>

                      {selectedProject.v2Improvements && (
                        <div className="bg-[var(--tech-cyan)]/10 p-4 rounded-xl border border-[var(--tech-cyan)]/30">
                          <h4 className="font-orbitron text-xs font-bold text-[var(--tech-cyan)] uppercase mb-2">
                            03. V2 Next-Gen Evolution Roadmap
                          </h4>
                          <p className="text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                            {selectedProject.v2Improvements}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Modal Bottom Footer Actions */}
                <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex justify-between items-center font-tech text-xs shrink-0">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(null);
                    }}
                    className="px-4 py-2 rounded-lg bg-[var(--inner-box-bg)] hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold transition-all cursor-pointer"
                  >
                    Close Specs
                  </button>

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="px-4 py-2 rounded-lg bg-[var(--tech-cyan)] text-white dark:text-black font-orbitron font-bold flex items-center gap-2 shadow-[0_0_15px_var(--header-glow)]"
                    >
                      <ExternalLink className="w-4 h-4" /> View Repository
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </SciFiContainer>
    </section>
  );
};

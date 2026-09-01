import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Cpu, Terminal as TerminalIcon, Box } from 'lucide-react';
import { Robotics3DCanvas } from './Robotics3DCanvas';
import { CyberTerminal } from './CyberTerminal';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const HeroSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'terminal'>('3d');

  const selectedImpacts = [
    {
      metric: 'C++17 PLATFORM OWNERSHIP',
      detail: 'Architected C++17 HAL & runtime daemons unifying 10+ sensor/actuator modules across physical hardware & Linux boundaries.',
    },
    {
      metric: 'VISION DOCKING RELIABILITY',
      detail: 'Engineered vision-guided rear autonomous docking pipeline, raising field trial success rate to 78% (78/100 trials).',
    },
    {
      metric: 'CROSS-FUNCTIONAL LEADERSHIP',
      detail: 'Led 3 engineering streams (mechanical, electronics, software) translating technical complexity into production execution.',
    },
  ];

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 grid-blueprint relative" id="hero">
      <SciFiContainer>
        {/* Top Status Diagnostics Banner */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-[var(--card-bg)] p-3 rounded-xl border border-[var(--border-color)] backdrop-blur-md font-tech text-xs">
          <div className="flex items-center gap-3 text-[var(--tech-cyan)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="font-bold tracking-widest">SYSTEM STATUS: OPERATIONAL</span>
            <span className="text-slate-400 dark:text-zinc-600 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-zinc-400 hidden sm:inline">LOCATION: NEW DELHI, INDIA</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--tech-amber)]">
            <ShieldCheck className="w-4 h-4 text-[var(--tech-amber)]" />
            <span className="font-bold tracking-wider">OPEN FOR SENIOR ROBOTICS ROLES</span>
          </div>
        </div>

        {/* Main Cybernetic Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Left Column: Intro & Value Prop */}
          <div className="lg:col-span-7 clean-card p-6 sm:p-10 flex flex-col justify-between cyber-bracket">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-4 tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>ROBOTICS SYSTEMS ARCHITECT & PLATFORM LEAD</span>
              </div>

              <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
                KARTHIK MOTHIKI
              </h1>

              <h2 className="font-rajdhani text-lg sm:text-2xl text-[var(--tech-cyan)] font-bold mb-6 tracking-wide text-glow-cyan">
                SENIOR ROBOTICS ENGINEER</h2>

              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Building production robotic platforms that bridge physical dynamics, C++17 firmware, Linux systemd daemons, ROS2 middleware, and multi-agent AI. Focused on deterministic safety, zero-deadlock IPC, and cross-functional hardware execution.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="#case-studies"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-6 py-3.5 rounded-xl bg-[var(--tech-cyan)] hover:opacity-90 text-white dark:text-black font-orbitron font-extrabold text-xs tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_var(--header-glow)] hover:shadow-[0_0_30px_var(--header-glow)]"
                >
                  EXPLORE CASE STUDIES <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="Karthik_Mothiki_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-6 py-3.5 rounded-xl bg-[var(--card-bg)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-slate-900 dark:text-white font-orbitron font-bold text-xs tracking-wider flex items-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4 text-[var(--tech-cyan)]" /> DOWNLOAD RESUME
                </a>
              </div>
            </div>

            {/* Motivation Quote */}
            <div className="pt-6 border-t border-[var(--border-color)] font-tech">
              <span className="text-[11px] font-bold text-[var(--tech-amber)] block mb-1 tracking-widest">// ARCHITECTURAL MOTIVATION</span>
              <p className="text-slate-700 dark:text-zinc-300 text-xs italic leading-relaxed">
                "Physical dynamics, real-time software architecture, and field-tested reliability are the non-negotiable pillars of production robotics."
              </p>
            </div>
          </div>

          {/* Right Column: Interactive 3D Kinematics / Cyber Terminal Switcher */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* View Mode Toggle Controls */}
            <div className="flex items-center justify-between bg-[var(--card-bg)] p-1.5 rounded-xl border border-[var(--border-color)] font-tech text-xs">
              <span className="text-slate-600 dark:text-zinc-400 text-[11px] pl-2 font-bold">INTERACTIVE TELEMETRY:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setViewMode('3d');
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition-all cursor-pointer ${viewMode === '3d'
                    ? 'bg-[var(--tech-cyan)] text-white dark:text-black shadow-[0_0_15px_var(--header-glow)]'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <Box className="w-3.5 h-3.5" /> 3D KINEMATICS
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setViewMode('terminal');
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition-all cursor-pointer ${viewMode === 'terminal'
                    ? 'bg-[var(--tech-cyan)] text-white dark:text-black shadow-[0_0_15px_var(--header-glow)]'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5" /> CYBER CLI
                </button>
              </div>
            </div>

            {/* Display Canvas or Terminal */}
            {viewMode === '3d' ? <Robotics3DCanvas /> : <CyberTerminal />}
          </div>
        </div>

        {/* Selected Impact Anchors Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {selectedImpacts.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="clean-card p-5 cyber-bracket flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 font-orbitron text-xs font-extrabold text-[var(--tech-cyan)] mb-2 tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[var(--tech-emerald)] shrink-0" />
                <span>{item.metric}</span>
              </div>
              <p className="text-slate-700 dark:text-zinc-300 text-xs leading-relaxed font-tech">{item.detail}</p>
            </div>
          ))}
        </div>
      </SciFiContainer>
    </section>
  );
};

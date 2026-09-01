import React from 'react';
import { Cpu, CheckCircle2, Wrench, Radio, LayoutGrid, Users } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const CapabilitiesSection: React.FC = () => {
  const capabilityDomains = [
    {
      title: 'Production Robotics Platform Engineering',
      icon: LayoutGrid,
      proofPoint:
        'Architected modular C++17 Hardware Abstraction Layer (HAL) unifying 10+ sensors/actuators with non-blocking thread-safe safety execution queues.',
      techStack: 'C++17 · Modular HAL · POSIX · systemd · V4L2 · Linux Daemons',
    },
    {
      title: 'Real-Time Embedded & Hardware Integration',
      icon: Cpu,
      proofPoint:
        'Engineered ESP32-S3 FreeRTOS firmware interfacing motor drivers, quadrature encoders, and safety interrupts with deterministic real-time execution.',
      techStack: 'ESP32-S3 · FreeRTOS · FOC Motor Control · UART · GPIO ISRs',
    },
    {
      title: 'Autonomous Navigation & Physical Docking',
      icon: Radio,
      proofPoint:
        'Designed vision-guided rear autonomous docking pipeline, achieving 78% success rate (78/100 field trials) under physical alignment constraints.',
      techStack: 'ROS2 · Nav2 · BehaviorTree.CPP · OpenCV · SLAM · Docking',
    },
    {
      title: 'Distributed Robot Infrastructure',
      icon: Wrench,
      proofPoint:
        'Developed 1Gbps Unix socket IPC framework for inter-process telemetry, maintaining <1ms latency across high-throughput sensor streams.',
      techStack: 'ZeroMQ · Unix Sockets · IPC · FastAPI · Cloud Run · WebSockets',
    },
    {
      title: 'Engineering Leadership & System Integration',
      icon: Users,
      proofPoint:
        'Led cross-functional engineering execution across mechanical, hardware/electronics, and software streams to ship production platforms.',
      techStack: 'Technical Ownership · Cross-Functional Sprints · Architecture Specs',
    },
  ];

  return (
    <section className="py-20 md:py-28 grid-blueprint border-t border-[var(--border-color)] relative" id="capabilities">
      <SciFiContainer>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-3 tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>EVIDENCE-BACKED COMPETENCIES</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            CORE ENGINEERING CAPABILITIES
          </h2>
          <p className="text-slate-700 dark:text-zinc-300 text-sm max-w-2xl mt-2 font-normal">
            Each capability domain is anchored in a concrete production proof point rather than superficial keyword lists.
          </p>
        </div>

        <div className="space-y-5">
          {capabilityDomains.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="clean-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cyber-bracket"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3.5 rounded-xl bg-[var(--inner-box-bg)] border border-[var(--inner-box-border)] text-[var(--tech-cyan)] shrink-0 shadow-[0_0_15px_var(--header-glow)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-extrabold text-lg text-slate-900 dark:text-white mb-2">
                      {cap.title}
                    </h3>
                    {/* Concrete Proof Point */}
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300 bg-[var(--inner-box-bg)] p-3 rounded-lg border border-[var(--inner-box-border)] font-tech mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--tech-emerald)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--tech-amber)] font-orbitron">GROUND TRUTH PROOF POINT: </strong>
                        {cap.proofPoint}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supporting Stack */}
                <div className="md:w-64 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-[var(--border-color)] md:pl-6 font-tech">
                  <span className="text-[10px] font-bold text-[var(--tech-cyan)] uppercase tracking-wider block mb-1">
                    SUPPORTING STACK
                  </span>
                  <span className="text-xs text-slate-600 dark:text-zinc-400 font-mono leading-normal block">
                    {cap.techStack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </SciFiContainer>
    </section>
  );
};

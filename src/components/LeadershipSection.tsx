import React from 'react';
import { Users, Layers, GitMerge, Cpu, CheckCircle } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const LeadershipSection: React.FC = () => {
  const leadershipHighlights = [
    {
      title: 'Technical Ownership of ORo Base Platform',
      icon: Layers,
      detail:
        'Technical Owner for ORo Base (Intelligent Canine Wellness Station). Leading 3 cross-functional engineering streams across mechanical, electronics/hardware, and software engineering.',
    },
    {
      title: 'System Integration & Boundary Bridge',
      icon: Cpu,
      detail:
        'Operating at the critical interface between physical hardware, low-level ESP32-S3 FreeRTOS firmware, C++17 HAL, Linux systemd daemons, ROS2 middleware, and cloud services.',
    },
    {
      title: 'Sprint Planning & Business Translation',
      icon: GitMerge,
      detail:
        'Translating complex multi-disciplinary technical challenges across mechanical, electronic, and software domains into actionable engineering sprints and business execution decisions.',
    },
  ];

  return (
    <section className="py-20 md:py-28 grid-blueprint border-t border-[var(--border-color)] relative" id="leadership">
      <SciFiContainer>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-3 tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>CROSS-FUNCTIONAL PLATFORM LEADERSHIP</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            SYSTEM OWNERSHIP & LEADERSHIP
          </h2>
          <p className="text-slate-700 dark:text-zinc-300 text-sm max-w-2xl mt-2 font-normal">
            Demonstrated capability leading cross-functional engineering streams, managing multi-disciplinary dependencies, and owning production robotics platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {leadershipHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="clean-card p-6 flex flex-col justify-between cyber-bracket"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[var(--inner-box-bg)] border border-[var(--inner-box-border)] text-[var(--tech-cyan)] w-fit mb-4 shadow-[0_0_15px_var(--header-glow)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-orbitron font-extrabold text-base text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-700 dark:text-zinc-300 text-xs leading-relaxed font-tech">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Breakdown Box */}
        <div className="clean-card p-6 sm:p-10 cyber-bracket">
          <h3 className="font-orbitron font-extrabold text-xl text-slate-900 dark:text-white mb-6">
            ROBOTICS ENGINEERING EXECUTION METHODOLOGY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 dark:text-zinc-300 font-tech">
            <div className="flex items-start gap-3 bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
              <CheckCircle className="w-5 h-5 text-[var(--tech-emerald)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block font-orbitron mb-1 text-xs">Cross-Disciplinary Coordination</strong>
                Aligning mechanical spatial limits, electrical power constraints, and software bus protocols into a unified architecture spec.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
              <CheckCircle className="w-5 h-5 text-[var(--tech-emerald)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block font-orbitron mb-1 text-xs">Risk Mitigation & HIL Prototyping</strong>
                De-risking critical hardware/software interface boundaries early through rapid hardware-in-the-loop (HIL) integration.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
              <CheckCircle className="w-5 h-5 text-[var(--tech-emerald)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block font-orbitron mb-1 text-xs">Production Quality Standards</strong>
                Enforcing strict code review guidelines, deterministic task queue bounds, and hardware safety monitors before deployment.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[var(--inner-box-bg)] p-4 rounded-xl border border-[var(--inner-box-border)]">
              <CheckCircle className="w-5 h-5 text-[var(--tech-emerald)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block font-orbitron mb-1 text-xs">Mentorship & Architecture Specs</strong>
                Establishing clear HAL driver abstractions so embedded and application engineers can build features independently.
              </div>
            </div>
          </div>
        </div>
      </SciFiContainer>
    </section>
  );
};

import React from 'react';
import { Compass, ShieldCheck, Cpu, Layers, AlertTriangle, CheckSquare } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const EngineeringPrinciples: React.FC = () => {
  const principles = [
    {
      title: 'Reliability Over Novelty',
      icon: ShieldCheck,
      desc: 'Production stability, fault isolation, and deterministic execution outweigh trendy abstractions. Code must operate predictably under hardware faults and high load.',
    },
    {
      title: 'Determinism Where It Matters',
      icon: Cpu,
      desc: 'Strict real-time execution at firmware and IPC layers; asynchronous flexibility at high-level orchestration and cloud layers.',
    },
    {
      title: 'Modularity With Measurable Boundaries',
      icon: Layers,
      desc: 'Clean C++17 Hardware Abstraction Layers (HAL) that isolate physical component changes from upper-level navigation and decision logic.',
    },
    {
      title: 'Failure-Aware System Design',
      icon: AlertTriangle,
      desc: 'Designing for sensor dropouts, bus noise, communication timeouts, and physical environment edge cases as normal state transitions.',
    },
    {
      title: 'Production Validation Over Simulation',
      icon: CheckSquare,
      desc: 'Real-world field testing and quantitative trial benchmarks are the ultimate ground truth. Simulation informs design; physical trials validate reality.',
    },
  ];

  return (
    <section className="py-20 md:py-28 grid-blueprint border-t border-[var(--border-color)] relative" id="principles">
      <SciFiContainer>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-3 tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL TENETS</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            ROBOTICS ENGINEERING PRINCIPLES
          </h2>
          <p className="text-slate-700 dark:text-zinc-300 text-sm max-w-2xl mt-2 font-normal">
            The technical values that govern how I architect platforms, evaluate trade-offs, and make production design decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="clean-card p-6 flex flex-col justify-between cyber-bracket"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[var(--inner-box-bg)] border border-[var(--inner-box-border)] text-[var(--tech-cyan)] shadow-[0_0_10px_var(--header-glow)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-tech text-xs text-[var(--tech-amber)] font-bold">NODE 0{idx + 1}</span>
                  </div>
                  <h3 className="font-orbitron font-extrabold text-base text-slate-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-slate-700 dark:text-zinc-300 text-xs leading-relaxed font-tech">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SciFiContainer>
    </section>
  );
};

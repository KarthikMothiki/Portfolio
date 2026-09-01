import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Network, Eye, Layers, Sparkles } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const InteractiveArchitecture: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState(0);

  const layers = [
    {
      id: 0,
      title: 'Modular C++17 Hardware Abstraction Layer (HAL)',
      icon: Cpu,
      tag: 'HAL LAYER // DRIVER ARCHITECTURE',
      description:
        'Architected a framework-independent C++17 HAL unifying real-time telemetry and control across 13+ sensor & 8+ actuator modules for autonomous mobile robots like ORO Buddy and ORo Base.',
      tech: ['C++17', 'ESP32-S3', 'FreeRTOS', 'POSIX', 'UART', 'V4L2'],
      metrics: [
        { label: 'Sensor Modules', value: '13 Integrated' },
        { label: 'Actuator Channels', value: '8 Closed-Loop' },
        { label: 'Latency Jitter', value: '< 2.5 ms' },
      ],
    },
    {
      id: 1,
      title: 'Task Management & Safety Execution System',
      icon: ShieldCheck,
      tag: 'DETERMINISTIC SAFETY // TASK QUEUE',
      description:
        'Built a thread-safe priority task queue and dedicated safety-monitoring nodes for deterministic scheduling and real-time orchestration, validated under high concurrent task influx.',
      tech: ['Thread-Safe Queues', 'BehaviorTree.CPP', 'Mutex Locks', 'Priority Scheduling'],
      metrics: [
        { label: 'Task Throughput', value: '1,000 req/sec' },
        { label: 'Queue Overhead', value: '0 Deadlocks' },
        { label: 'Safety Response', value: 'Deterministic' },
      ],
    },
    {
      id: 2,
      title: 'Heterogeneous IPC & FOC Motor Control',
      icon: Network,
      tag: 'IPC & ACTUATION // BUS BRIDGE',
      description:
        'Socket programming framework enabling low-latency bi-directional data exchange at 1 Gbps across compute nodes, paired with ODESC V4.2 Field-Oriented Control motor tuning.',
      tech: ['Socket Programming', '1Gbps Ethernet', 'ODESC V4.2', 'FOC Motor Tuning'],
      metrics: [
        { label: 'IPC Bandwidth', value: '1.0 Gbps' },
        { label: 'Motor Protocol', value: 'FOC Closed-Loop' },
        { label: 'Compute Nodes', value: 'Heterogeneous' },
      ],
    },
    {
      id: 3,
      title: 'Vision-Guided Rear Autonomous Docking',
      icon: Eye,
      tag: 'PERCEPTION & NAV2 DOCKING',
      description:
        'Engineered a vision-guided rear docking pipeline for front-drive mobile robots with uneven mass distribution, raising docking success from functionally undockable to 78% (78/100 trials).',
      tech: ['OpenCV', 'GStreamer', 'V4L2', 'Nav2 Docking', 'Visual Telemetry'],
      metrics: [
        { label: 'Success Rate', value: '78 / 100 Trials' },
        { label: 'Patent Status', value: 'Evaluated' },
        { label: 'Precision Alignment', value: '± 3.8 mm' },
      ],
    },
  ];

  const current = layers[selectedLayer];

  return (
    <section className="py-20 md:py-28 grid-blueprint relative overflow-hidden" id="architecture">
      <SciFiContainer>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-3 tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>PLATFORM STACK DIAGNOSTICS</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
            PRODUCTION ROBOTICS PLATFORM ARCHITECTURE
          </h2>
          <p className="text-slate-700 dark:text-zinc-300 text-base max-w-2xl font-normal">
            Interactive system architecture breakdown spanning C++17 HAL drivers, deterministic safety task queues, heterogeneous IPC, and vision-guided docking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {layers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = selectedLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedLayer(layer.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer cyber-bracket ${
                    isSelected
                      ? 'bg-[var(--tech-cyan)]/20 border-[var(--tech-cyan)] text-slate-900 dark:text-white shadow-[0_0_25px_var(--header-glow)]'
                      : 'bg-[var(--card-bg)] border-[var(--border-color)] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-[var(--tech-cyan)]/50'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg border transition-colors ${
                      isSelected
                        ? 'bg-[var(--tech-cyan)] text-white dark:text-black border-[var(--tech-cyan)] shadow-[0_0_15px_var(--header-glow)]'
                        : 'bg-[var(--inner-box-bg)] text-[var(--tech-cyan)] border-[var(--inner-box-border)]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div
                      className={`font-tech text-[10px] font-bold mb-1 tracking-wider ${
                        isSelected ? 'text-[var(--tech-amber)]' : 'text-[var(--tech-cyan)]'
                      }`}
                    >
                      {layer.tag}
                    </div>
                    <div className="font-orbitron font-bold text-sm leading-snug">{layer.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Layer Deep Dive Display */}
          <motion.div
            key={selectedLayer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 clean-card rounded-2xl p-6 sm:p-10 flex flex-col justify-between cyber-bracket border-[var(--border-color)] bg-[var(--card-bg)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-tech text-xs px-3 py-1 rounded bg-[var(--tech-cyan)]/15 text-[var(--tech-cyan)] border border-[var(--border-color)] font-bold tracking-widest">
                  {current.tag}
                </span>
                <span className="font-tech text-xs text-[var(--tech-amber)] flex items-center gap-1 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--tech-amber)]" /> NODE 0{selectedLayer + 1} ACTIVE
                </span>
              </div>

              <h3 className="font-orbitron font-extrabold text-2xl text-slate-900 dark:text-white mb-4">{current.title}</h3>
              <p className="text-slate-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 font-normal">{current.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="font-tech text-xs text-[var(--tech-cyan)] font-bold mb-2 tracking-wider">// INTEGRATED HARDWARE & SOFTWARE TECH:</div>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-[var(--inner-box-bg)] border border-[var(--inner-box-border)] text-[var(--tech-emerald)] font-tech text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border-color)] font-tech">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="bg-[var(--inner-box-bg)] p-3 rounded-xl border border-[var(--inner-box-border)]">
                  <div className="font-orbitron font-black text-sm text-[var(--tech-amber)] text-glow-amber">{m.value}</div>
                  <div className="font-tech text-[10px] text-slate-600 dark:text-zinc-400 font-bold tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SciFiContainer>
    </section>
  );
};

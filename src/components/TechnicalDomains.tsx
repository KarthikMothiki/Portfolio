import React from 'react';
import { Container } from './Container';
import { ArrowUpRight } from 'lucide-react';

export const TechnicalDomains: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Understand the boundary',
      detail: 'Hardware, firmware, middleware, software. I like understanding the interfaces where small engineering decisions determine real-world reliability.',
    },
    {
      num: '02',
      title: 'Make complexity observable',
      detail: "If I can't measure it, debug it, or explain its failure mode, I don't consider it finished.",
    },
    {
      num: '03',
      title: 'Build before I over-theorize',
      detail: 'I learn unfamiliar technology by pushing it into a real system rather than consuming it abstractly.',
    },
    {
      num: '04',
      title: 'Own the whole system',
      detail: 'Architecture matters as much as implementation. I take accountability for end-to-end performance.',
    },
  ];

  const experiments = [
    {
      name: 'CppSentry',
      domain: 'C++17 Static Analysis',
      desc: 'AST-based static analyzer for safety-critical C++ patterns, lifetime safety, and memory leak detection.',
      link: 'https://github.com/KarthikMothiki/CppSentry',
    },
    {
      name: 'Sūtradhāra',
      domain: 'Multi-Agent Orchestration',
      desc: 'MCP-compliant agentic system for robotic task decomposition with human-in-the-loop safety gating.',
      link: 'https://github.com/KarthikMothiki/Sutradhara',
    },
    {
      name: 'ROS 2 Internals',
      domain: 'Middleware Benchmarking',
      desc: 'Deep-dive into rclcpp executor scheduling, lock-free memory allocators, and zero-copy intra-process transport.',
    },
    {
      name: 'Real-Time Systems',
      domain: 'Kernel Latency & Scheduling',
      desc: 'Evaluating PREEMPT_RT kernel latency bounds, priority inheritance, and deterministic FreeRTOS task queues.',
    },
  ];

  const skillCategories = [
    {
      category: 'Languages & Core',
      skills: ['C++17', 'Python', 'C', 'MATLAB', 'POSIX C API'],
    },
    {
      category: 'Robotics & Autonomy',
      skills: ['ROS2 / ROS', 'MoveIt', 'BehaviorTree.CPP', 'Nav2', 'SLAM', 'Managed Nodes'],
    },
    {
      category: 'Embedded & Firmware',
      skills: ['Embedded Linux', 'ESP32-S3', 'FreeRTOS', 'UART/SPI/I2C', 'systemd', 'V4L2', 'GStreamer'],
    },
    {
      category: 'Distributed & Cloud',
      skills: ['ZeroMQ', 'Socket Programming', 'GCP Cloud Run', 'REST & WebSockets'],
    },
    {
      category: 'AI Infrastructure',
      skills: ['Google ADK', 'Gemini 2.0', 'MCP (Model Context Protocol)', 'Pydantic', 'FastAPI'],
    },
    {
      category: 'Motor Control & Hardware',
      skills: ['Field-Oriented Control (FOC)', 'ODESC V4.2 Motor Controllers', 'Closed-Loop Motion Tuning'],
    },
  ];

  const values = [
    'System boundaries',
    'Real-world reliability',
    'Learning by building',
    'Simple interfaces',
    'Technical ownership',
  ];

  return (
    <section className="py-16 md:py-24 border-t border-[var(--border)] scroll-mt-24 space-y-20" id="about">
      <Container>

        {/* 1. Human Personal Positioning Statement */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest">
            About & Identity
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight leading-tight">
            I like building systems that are difficult to build well.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            I'm a robotics engineer working across embedded systems, robotics software, and autonomous platforms.
            I enjoy understanding systems from the hardware boundary upward, finding the constraints that actually matter,
            and turning prototypes into reliable machines.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {values.map((v, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-[var(--surface-solid)] border border-[var(--border)] text-[var(--text-secondary)]"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* 2. How I Think */}
        <div className="space-y-8 mb-20">
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-1">
              Engineering Philosophy
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              How I think
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="glass-panel p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[var(--accent)] mb-3">{p.num}</div>
                  <h4 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-2">
                    {p.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Currently Experimenting With */}
        <div className="space-y-8 mb-20">
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-1">
              Continuous Exploration
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Currently experimenting with
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiments.map((exp, i) => (
              <div key={i} className="glass-panel p-6 flex flex-col justify-between group">
                <div>
                  <div className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                    {exp.domain}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {exp.name}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-sans font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    <span>View repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Technical Capabilities Matrix */}
        <div className="space-y-8 mb-16" id="capabilities">
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-1">
              Technical Matrix
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className="glass-panel p-6">
                <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border)]">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

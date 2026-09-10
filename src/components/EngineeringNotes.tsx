import React from 'react';
import { Container } from './Container';
import { ArrowUpRight } from 'lucide-react';

interface Note {
  type: 'NOTE' | 'DECISION' | 'EXPERIMENT';
  number: string;
  title: string;
  body: string;
  link?: { label: string; url: string };
}

const notes: Note[] = [
  {
    type: 'NOTE',
    number: '01',
    title: 'Reliability over novelty',
    body: 'Production stability, fault isolation, and deterministic execution outweigh trendy abstractions. Code must operate predictably under hardware faults and high load. The interesting engineering is in making the reliable thing, not the novel thing.',
  },
  {
    type: 'NOTE',
    number: '02',
    title: 'Determinism where it matters',
    body: 'Strict real-time execution bounds for motor HAL loops and safety overrides. Asynchronous flexibility at orchestration and cloud layers. Know which layer needs guarantees and which can tolerate jitter.',
  },
  {
    type: 'NOTE',
    number: '03',
    title: 'Hardware and software co-design',
    body: 'The robot is one system, not isolated layers. Joint optimization across mechanical spatial constraints, MCU timing budgets, and host ROS nodes. The best architecture emerges when you understand the physical machine.',
  },
  {
    type: 'DECISION',
    number: '01',
    title: 'Why ZeroMQ instead of HTTP REST for inter-process telemetry',
    body: 'HTTP REST introduced >15ms serialization overhead per telemetry frame. ZeroMQ Unix domain sockets achieved 1 Gbps throughput at <1ms latency. For real-time sensor streams between compute nodes, the protocol overhead matters more than the API convenience.',
  },
  {
    type: 'DECISION',
    number: '02',
    title: 'Custom fiducial markers over ArUco for vision docking',
    body: 'Standard ArUco markers failed under the rear-docking geometry and variable lighting conditions of our deployment environment. A custom fiducial system optimized for our specific camera angle and docking approach improved success of autonomous docking.',
  },
  {
    type: 'DECISION',
    number: '03',
    title: 'Multi-agent delegation over monolithic prompting',
    body: 'A single large prompt accumulates context clutter and tool hallucination. Hierarchical agent topology via Google ADK isolates failure domains and enables independent recovery. The architecture overhead pays for itself in reliability.',
  },
  {
    type: 'EXPERIMENT',
    number: '01',
    title: 'Can an LLM audit a real C++ robotics codebase without becoming another noisy static analyzer?',
    body: 'CppSentry combines deterministic AST parsing with LLM diagnostic reasoning. The deterministic layer catches structural violations (dynamic allocation in real-time loops, uninitialized pointers). The LLM layer provides contextual explanations. Neither alone is sufficient.',
    link: { label: 'CppSentry on GitHub', url: 'https://github.com/KarthikMothiki/cppsentry' },
  },
  {
    type: 'EXPERIMENT',
    number: '02',
    title: 'Deterministic multi-agent orchestration with human-in-the-loop safety',
    body: 'Sūtradhāra automates complex multi-step workflows across Google Workspace using Google ADK and Gemini 2.0. Every write mutation is staged as a draft PendingAction requiring explicit human approval. The system proves you can have automation velocity without sacrificing control.',
    link: { label: 'Sūtradhāra on GitHub', url: 'https://github.com/KarthikMothiki/sutradhara' },
  },
];

export const EngineeringNotes: React.FC = () => {
  return (
    <section className="py-12 md:py-16 border-t border-[var(--border)] scroll-mt-24" id="thinking">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-2">
              Engineering Notebook
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Engineering notes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-[500px]">
            Principles, decisions, and experiments from building production robotics systems.
          </p>
        </div>

        {/* 3-Column Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, i) => (
            <div
              key={i}
              className={`glass-panel p-6 flex flex-col justify-between h-full group transition-all duration-300 relative ${note.type === 'EXPERIMENT' ? 'border-t-2 border-t-[var(--accent)]' : ''
                }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full border ${note.type === 'DECISION'
                      ? 'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/20'
                      : note.type === 'EXPERIMENT'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                        : 'bg-[var(--surface)] text-[var(--text-tertiary)] border-[var(--border)]'
                    }`}>
                    {note.type} {note.number}
                  </span>
                  <span className="text-[10px] text-[var(--text-tertiary)] font-sans font-semibold uppercase tracking-widest">
                    {note.type === 'DECISION' ? 'SYSTEM DECISION' : note.type === 'EXPERIMENT' ? 'EXPERIMENT' : 'PRINCIPLE'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {note.title}
                </h3>

                {/* Body */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {note.body}
                </p>
              </div>

              {/* Optional Link Footer */}
              {note.link && (
                <div className="pt-3 border-t border-[var(--border)] mt-auto">
                  <a
                    href={note.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors text-xs font-mono font-medium"
                  >
                    {note.link.label}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

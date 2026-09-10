import React from 'react';
import { Container } from './Container';
import { ArrowLeft, Cpu } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-subtle)_0,transparent_70%)] pointer-events-none opacity-50" />

      <Container>
        <div className="max-w-xl mx-auto text-center space-y-6 relative z-10 glass-card p-8 sm:p-12 rounded-3xl border border-[var(--border-strong)]">
          <div className="w-16 h-16 rounded-2xl bg-[var(--accent-subtle)] border border-[var(--accent)]/30 flex items-center justify-center mx-auto text-[var(--accent)] mb-2">
            <Cpu className="w-8 h-8" />
          </div>

          <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">
            ERROR 404 · HARDWARE HALT
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--text-primary)] tracking-tight">
            Node Not Found
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            The system address or execution path you requested is unavailable or has been re-routed in the HAL telemetry bus.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href="/"
              className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-sans font-medium transition-all inline-flex items-center gap-2 shadow-md"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Primary System
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import { Container } from './Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArchitectureDiagram } from './architecture/ArchitectureDiagram';
import { ArchitectureStage, stagesData } from './architecture/ArchitectureStage';
import { prefersReducedMotion } from '../motion/motionConfig';

gsap.registerPlugin(ScrollTrigger);

export const InteractiveArchitecture: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<number>(0);

  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    setIsReducedMotion(prefersReducedMotion());

    if (prefersReducedMotion() || !sectionRef.current || !stickyRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: stickyRef.current,
        scrub: 0.8,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);

          const nextStage = Math.min(3, Math.floor(p * 4.0));
          if (nextStage !== stageRef.current) {
            stageRef.current = nextStage;
            setActiveStage(nextStage);
          }
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Fallback for reduced motion preferences
  if (isReducedMotion) {
    return (
      <section className="py-16 md:py-24 border-t border-[var(--border)] scroll-mt-24" id="architecture">
        <Container>
          <div className="mb-12">
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-2">
              Signature System Assembly
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight mb-4">
              Systems Architecture
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-[600px] leading-relaxed">
              Full physical-to-digital system stack. Each layer boundary represents a verified architectural trade-off.
            </p>
          </div>

          <div className="space-y-8">
            {stagesData.map((_, idx) => (
              <div key={idx} className="glass-panel p-6 sm:p-8">
                <ArchitectureStage stageIndex={idx} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[400vh] border-t border-[var(--border)]" id="architecture">
      {/* Sticky 100vh Viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] py-8">
        <Container className="h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0 pb-4 border-b border-[var(--border)]">
            <div>
              <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-1">
                Signature System Assembly
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Systems Architecture
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm max-w-[480px] leading-relaxed hidden sm:block">
              Scroll down to progressively assemble the 4-stage system stack.
            </p>

            {/* Stage Selector Dots */}
            <div className="flex items-center gap-2">
              {stagesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stageRef.current = idx;
                    setActiveStage(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeStage === idx
                      ? 'w-7 bg-[var(--accent)]'
                      : 'bg-[var(--border-strong)] hover:bg-[var(--text-tertiary)]'
                  }`}
                  aria-label={`Go to stage ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Main 2-Column Scrollytelling Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center grow py-4 overflow-hidden">
            {/* Left Column: Stage Details (40% width on LG) */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full max-h-[580px] overflow-y-auto pr-2">
              <ArchitectureStage stageIndex={activeStage} />
            </div>

            {/* Right Column: SVG Interactive Architecture Diagram (60% width on LG) */}
            <div className="lg:col-span-7 flex items-center justify-center h-full">
              <ArchitectureDiagram activeStage={activeStage} progress={scrollProgress} />
            </div>
          </div>

          {/* Progress Bar Footer */}
          <div className="shrink-0 pt-3 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>STAGE {activeStage + 1} OF 4 ACCUMULATED</span>
            </div>
            <div className="flex items-center gap-3">
              <span>SYSTEM HANDSHAKE</span>
              <div className="w-32 sm:w-48 h-1.5 rounded-full bg-[var(--surface)] overflow-hidden border border-[var(--border)]">
                <div
                  className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

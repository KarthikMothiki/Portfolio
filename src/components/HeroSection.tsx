import React, { useEffect, useRef } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !photoRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        y: -30,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center relative snap-item-center scroll-mt-20 overflow-hidden" id="hero">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--text-tertiary)] uppercase tracking-widest">
              Senior Robotics Engineer · New Delhi
            </div>

            <div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight leading-tight whitespace-pre-line">
                I build robots{'\n'}from the system level up.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              I work across embedded systems, robotics software, perception{'\n'}
              and autonomous systems. I turn complex engineering problems{'\n'}
              into systems that work in the real world.
            </p>

            <div className="font-mono text-[13px] sm:text-sm text-[var(--text-tertiary)] pt-2">
              C++17 · ROS 2 · Embedded Linux · Autonomous Systems
            </div>

            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs sm:text-sm text-[var(--text-secondary)]">
                <span className="flex items-center">28+ sensors & actuators</span>
                <span className="hidden sm:block text-[var(--border-strong)]">·</span>
                <span className="flex items-center">ZeroMQ IPC</span>
                <span className="hidden sm:block text-[var(--border-strong)]">·</span>
                <span className="flex items-center">78% docking success</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#selected-work"
                className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-base font-medium transition-all flex items-center gap-2"
              >
                View work <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="Karthik_Mothiki_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] text-[var(--text-primary)] text-base font-medium transition-all flex items-center gap-2"
              >
                <FileText className="w-5 h-5" /> Download résumé
              </a>
            </div>
          </div>

          {/* Right Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <div ref={photoRef} className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]">
              {/* Subtle Restrained Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-[var(--accent)]/12 blur-2xl pointer-events-none opacity-75 dark:opacity-40" />

              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-strong)] shadow-xl bg-[var(--surface)] aspect-square ring-1 ring-[var(--border-strong)]">
                <img
                  src="/assets/img/Profile Pic.jpeg"
                  alt="Karthik Mothiki - Senior Robotics Systems Engineer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

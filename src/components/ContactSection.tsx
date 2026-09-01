import React, { useState } from 'react';
import { FileText, Copy, Check, Send } from 'lucide-react';
import { MagneticDock, MagneticDockItem } from './MagneticDock';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    soundFx.playBeep(1200, 0.06);
    navigator.clipboard.writeText('karthik1111mothiki@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 grid-blueprint border-t border-[var(--border-color)] relative" id="contact">
      <SciFiContainer>
        <div className="clean-card p-8 sm:p-14 text-center flex flex-col items-center cyber-bracket">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-4 tracking-widest">
            <Send className="w-3.5 h-3.5" />
            <span>DIRECT PLATFORM CONNECTIVITY</span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4 tracking-tight">
            PLATFORM LEADERSHIP & RECRUITMENT CONNECT
          </h2>

          <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Open for Senior Robotics Engineer, Robotics Systems Architect, & Platform Leadership roles. Interested in discussing autonomous systems, C++17 HAL drivers, or technical ownership.
          </p>

          {/* Quick Action Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={copyEmail}
              onMouseEnter={() => soundFx.playHover()}
              className="px-6 py-3.5 rounded-xl bg-[var(--inner-box-bg)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_var(--header-glow)] cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[var(--tech-emerald)]" /> : <Copy className="w-4 h-4 text-[var(--tech-cyan)]" />}
              <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : 'karthik1111mothiki@gmail.com'}</span>
            </button>

            <a
              href="Karthik_Mothiki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="px-6 py-3.5 rounded-xl bg-[var(--tech-cyan)] hover:opacity-90 text-white dark:text-black font-orbitron font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_var(--header-glow)]"
            >
              <FileText className="w-4 h-4 fill-current" /> DOWNLOAD RESUME PDF
            </a>
          </div>

          {/* Magnetic Dock with Authentic Brand Icons */}
          <div className="mt-2 flex justify-center">
            <MagneticDock
              baseSize={56}
              magnification={84}
              distance={140}
              gap={14}
              aria-label="Social and Technical Publications Dock"
            >
              {/* LinkedIn */}
              <MagneticDockItem
                label="LinkedIn Profile"
                href="https://www.linkedin.com/in/karthikmothiki/"
                external
              >
                <svg className="w-5 h-5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
                </svg>
              </MagneticDockItem>

              {/* GitHub */}
              <MagneticDockItem
                label="GitHub Repositories"
                href="https://github.com/KarthikMothiki"
                external
              >
                <svg className="w-5 h-5 fill-current text-[#00F0FF]" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
              </MagneticDockItem>

              {/* Medium */}
              <MagneticDockItem
                label="Medium Articles"
                href="https://karthik-mothiki.medium.com/"
                external
              >
                <svg className="w-5 h-5 fill-current text-[#00FF9D]" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </MagneticDockItem>

              {/* AI Tech Web */}
              <MagneticDockItem
                label="AI Tech Web Publications"
                href="https://aitechweb.com/author/karthik/"
                external
              >
                <svg className="w-5 h-5 fill-none stroke-current text-[#FFD700] stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </MagneticDockItem>
            </MagneticDock>
          </div>
        </div>
      </SciFiContainer>
    </section>
  );
};

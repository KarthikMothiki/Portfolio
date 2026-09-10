import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Copy, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('karthik1111mothiki@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 border-t border-[var(--border)] scroll-mt-24 relative" id="contact">
      <Container>
        <div className="max-w-4xl space-y-8">
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-3">
              Initiate Contact · New Delhi, India
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-tight mb-4">
              Let's build something difficult.
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Robotics systems, embedded platforms, autonomy, or something that doesn't have a clean solution yet.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5 flex-wrap">
            {/* Primary Email CTA */}
            <a
              href="mailto:karthik1111mothiki@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-base font-medium transition-all shadow-md w-fit"
            >
              <Mail className="w-4 h-4" />
              <span>Let's talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm font-sans font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all cursor-pointer w-fit"
              title="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Email copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[var(--text-tertiary)]" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            {/* Communication Platform Links with Icons */}
            <div className="flex items-center gap-5 pt-2 sm:pt-0 sm:ml-2">
              <a
                href="https://github.com/KarthikMothiki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/karthikmothiki/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

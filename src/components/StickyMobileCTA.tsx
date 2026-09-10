import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export const StickyMobileCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile sticky bar when scrolled past hero (400px)
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[var(--surface-solid)]/90 backdrop-blur-lg border-t border-[var(--border)] shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-full duration-300">
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xs text-[var(--text-primary)]">Karthik Mothiki</span>
        <span className="text-[10px] text-[var(--text-tertiary)] font-mono">Senior Robotics Engineer</span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="Karthik_Mothiki_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg border border-[var(--border)] text-xs font-sans font-medium text-[var(--text-primary)] flex items-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5" /> Résumé
        </a>
        <a
          href="mailto:karthik1111mothiki@gmail.com"
          className="px-3.5 py-2 rounded-lg bg-[var(--accent)] text-white text-xs font-sans font-medium flex items-center gap-1.5 shadow-sm"
        >
          Let's talk <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

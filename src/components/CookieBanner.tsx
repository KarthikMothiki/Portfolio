import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('km_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('km_cookie_consent', 'accepted');
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem('km_cookie_consent', 'dismissed');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="glass-card p-5 border border-[var(--border-strong)] bg-[var(--surface-solid)]/95 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col gap-3 text-xs text-[var(--text-secondary)]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-heading font-semibold text-sm text-[var(--text-primary)]">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            Privacy & Cookie Preference
          </div>
          <button
            onClick={dismiss}
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="leading-relaxed">
          This site uses minimal local storage strictly for theme preferences and session state. Zero tracking pixels or commercial ad scripts are used.
        </p>

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={accept}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-sans font-medium text-xs transition-all"
          >
            Accept & Continue
          </button>
          <button
            onClick={dismiss}
            className="px-3 py-2 rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] font-sans text-xs transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Shield, Scale } from 'lucide-react';

export const LegalModals: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      {/* Trigger links for footer / metadata */}
      <div className="hidden" id="legal-triggers">
        <button onClick={() => setActiveModal('privacy')}>Privacy Policy</button>
        <button onClick={() => setActiveModal('terms')}>Terms of Service</button>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card p-6 sm:p-8 bg-[var(--surface-solid)] border border-[var(--border-strong)] rounded-2xl shadow-2xl space-y-6 text-[var(--text-primary)] cursor-default"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                {activeModal === 'privacy' ? (
                  <Shield className="w-6 h-6 text-[var(--accent)]" />
                ) : (
                  <Scale className="w-6 h-6 text-[var(--accent)]" />
                )}
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                  {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h2>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-lg border border-[var(--border)]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            {activeModal === 'privacy' ? (
              <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                <p className="font-medium text-[var(--text-primary)]">
                  Last Updated: September 11, 2026
                </p>
                <p>
                  This portfolio website is operated by Karthik Mothiki. Your privacy is respected unconditionally.
                </p>
                <h3 className="font-heading font-bold text-sm text-[var(--text-primary)] pt-2">1. Data Collection & Analytics</h3>
                <p>
                  No personal identity tracking, commercial advertising cookies, or fingerprinting scripts are deployed on this website. Any analytics collected are strictly aggregated, anonymized telemetry used to measure total page visits.
                </p>
                <h3 className="font-heading font-bold text-sm text-[var(--text-primary)] pt-2">2. Email & Communication</h3>
                <p>
                  If you contact Karthik Mothiki directly via email (`karthik1111mothiki@gmail.com`), your message and contact address are kept confidential and used solely for direct communication.
                </p>
                <h3 className="font-heading font-bold text-sm text-[var(--text-primary)] pt-2">3. Local Storage</h3>
                <p>
                  This site uses browser `localStorage` solely to persist your theme preference (`light` / `dark`) and cookie notice acknowledgment.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                <p className="font-medium text-[var(--text-primary)]">
                  Last Updated: September 11, 2026
                </p>
                <p>
                  Welcome to the senior robotics engineering portfolio of Karthik Mothiki. By accessing this site, you agree to the following terms:
                </p>
                <h3 className="font-heading font-bold text-sm text-[var(--text-primary)] pt-2">1. Intellectual Property</h3>
                <p>
                  All engineering design documentation, system architectural diagrams, case study narratives, and code snippets presented on this portfolio are the intellectual property of Karthik Mothiki, unless specified as open-source code repositories on GitHub.
                </p>
                <h3 className="font-heading font-bold text-sm text-[var(--text-primary)] pt-2">2. Disclaimer of Warranty</h3>
                <p>
                  The technical notes and benchmark code samples provided on this site are for demonstration and portfolio inspection purposes.
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-[var(--border)] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white text-xs font-sans font-medium hover:bg-[var(--accent-hover)] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

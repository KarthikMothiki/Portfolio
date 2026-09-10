import React from 'react';
import { Container } from './Container';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="py-8 border-t border-[var(--border)] bg-[var(--bg-primary)] text-xs font-sans text-[var(--text-tertiary)]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[var(--text-primary)] font-medium">Karthik Mothiki</span>
            <span className="mx-2">·</span>
            <span>Senior Robotics Engineer</span>
          </div>

          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Karthik Mothiki. All rights reserved.</span>
            {onOpenPrivacy && (
              <>
                <span>·</span>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </>
            )}
            {onOpenTerms && (
              <>
                <span>·</span>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

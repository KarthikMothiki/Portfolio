import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { Container } from './Container';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'selected-work', 'architecture', 'thinking', 'about', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'selected-work', label: 'Work' },
    { id: 'architecture', label: 'Systems' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface)] backdrop-blur-xl border-b border-[var(--border)] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors tracking-tight">
              Karthik Mothiki
            </span>
          </a>

          {/* Quiet Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 font-sans text-base sm:text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-150 ${
                  activeSection === link.id
                    ? 'text-[var(--text-primary)] font-bold border-b-2 border-[var(--text-primary)] pb-0.5'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => {
                if (theme === 'light') setTheme('dark');
                else if (theme === 'dark') setTheme('system');
                else setTheme('light');
              }}
              className="text-sm font-sans font-medium tracking-wide text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer px-2 py-1"
              title={`Theme: ${theme}`}
              aria-label={`Theme: ${theme}`}
            >
              {theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'Auto'}
            </button>

            <a
              href="Karthik_Mothiki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-sans font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--surface-solid)] border-b border-[var(--border)] px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileOpen(false)}
              className="text-lg text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[var(--border)] flex items-center gap-4">
            <a
              href="https://github.com/KarthikMothiki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/karthikmothiki/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="Karthik_Mothiki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[var(--accent)] text-white text-base font-medium flex items-center gap-2"
            >
              <FileText className="w-5 h-5" /> Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

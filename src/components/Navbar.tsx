import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sun, Moon, Monitor, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { soundFx } from '../lib/sound';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'principles', 'leadership', 'case-studies', 'capabilities', 'timeline', 'contact'];
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

  const toggleAudio = () => {
    const state = soundFx.toggleSound();
    setSoundEnabled(state);
  };

  const navLinks = [
    { id: 'hero', label: 'OVERVIEW' },
    { id: 'principles', label: 'PRINCIPLES' },
    { id: 'leadership', label: 'LEADERSHIP' },
    { id: 'case-studies', label: 'CASE STUDIES' },
    { id: 'capabilities', label: 'CAPABILITIES' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'contact', label: 'CONNECT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-[var(--border-color)] py-3 shadow-[0_10px_30px_var(--header-glow)]'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Cyber Brand Identifier */}
        <a
          href="#hero"
          onClick={() => soundFx.playClick()}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 rounded-xl bg-slate-900 dark:bg-black border border-[var(--tech-cyan)] text-[var(--tech-cyan)] flex items-center justify-center font-orbitron font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform">
            <span className="z-10">KM</span>
            <div className="absolute inset-0 bg-[var(--tech-cyan)]/10 rounded-xl blur-xs" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold text-sm text-slate-900 dark:text-white tracking-wider group-hover:text-[var(--tech-cyan)] transition-colors">
                KARTHIK MOTHIKI
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            </div>
            {/* <div className="flex items-center gap-2 font-tech text-[11px] text-slate-600 dark:text-zinc-400">
              <Cpu className="w-3 h-3 text-[var(--tech-cyan)]" />
              <span className="text-[var(--tech-cyan)]">SENIOR ROBOTICS ENGINEER</span>
            </div> */}
          </div>
        </a>

        {/* HUD Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--card-bg)] backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-color)] shadow-[0_0_20px_var(--header-glow)]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-3.5 py-1 rounded-full font-tech text-xs tracking-wider transition-all duration-200 ${activeSection === link.id
                  ? 'text-white dark:text-black font-bold bg-[#007799] dark:bg-[#00F0FF] shadow-[0_0_12px_#00F0FF]'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-[var(--tech-cyan)] hover:bg-[var(--tech-cyan)]/10'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Sound Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundFx.playHover()}
            className={`p-2 rounded-lg border font-tech text-xs flex items-center gap-1.5 transition-all cursor-pointer ${soundEnabled
                ? 'border-[#00FF9D]/40 bg-[#00FF9D]/10 text-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.3)]'
                : 'border-slate-300 dark:border-zinc-800 bg-white/60 dark:bg-black/60 text-slate-500 dark:text-zinc-500'
              }`}
            title={soundEnabled ? 'Audio FX Enabled' : 'Audio FX Muted'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00FF9D]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Selector */}
          <button
            onClick={() => {
              soundFx.playClick();
              if (theme === 'light') setTheme('dark');
              else if (theme === 'dark') setTheme('system');
              else setTheme('light');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--tech-cyan)] hover:border-[var(--tech-cyan)] transition-all cursor-pointer flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)] active:scale-95 gap-1.5"
            title={`Theme: ${theme.toUpperCase()} (Click to cycle Light -> Dark -> System)`}
            aria-label={`Theme Toggle Button. Current theme: ${theme}`}
          >
            {theme === 'light' && <Sun className="w-4 h-4 text-[#D97706] dark:text-[#FFD700]" />}
            {theme === 'dark' && <Moon className="w-4 h-4 text-[#007799] dark:text-[#00F0FF]" />}
            {theme === 'system' && <Monitor className="w-4 h-4 text-slate-600 dark:text-zinc-300" />}
            <span className="font-tech text-[10px] font-bold uppercase tracking-wider hidden md:inline">{theme}</span>
          </button>

          {/* Resume PDF Action Button */}
          <a
            href="Karthik_Mothiki_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="px-4 py-2 rounded-lg bg-[var(--tech-cyan)] hover:opacity-90 text-white dark:text-black font-orbitron text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_var(--header-glow)] hover:shadow-[0_0_30px_var(--header-glow)]"
          >
            <FileText className="w-4 h-4 fill-current" /> RESUME PDF
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 text-[#00F0FF] hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile HUD Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#040814]/95 border-b border-[#00F0FF]/30 px-6 py-5 flex flex-col gap-3 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                soundFx.playClick();
                setMobileOpen(false);
              }}
              className="font-tech text-sm text-zinc-300 hover:text-[#00F0FF] py-1 border-b border-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex items-center justify-between">
            <button
              onClick={toggleAudio}
              className="px-3 py-1.5 rounded border border-[#00FF9D]/40 bg-[#00FF9D]/10 text-[#00FF9D] text-xs font-tech flex items-center gap-2"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{soundEnabled ? 'AUDIO ON' : 'AUDIO OFF'}</span>
            </button>
            <a
              href="Karthik_Mothiki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-[#00F0FF] text-black font-orbitron font-bold text-xs flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> RESUME PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { soundFx } from '../lib/sound';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-slate-600 dark:text-zinc-400 font-tech text-xs">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
          <span>© {new Date().getFullYear()} KARTHIK MOTHIKI // SENIOR ROBOTICS ENGINEER</span>
        </div>
        <div className="flex items-center gap-4 text-slate-600 dark:text-zinc-400 font-bold">
          <a
            href="#hero"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hover:text-[var(--tech-cyan)] transition-colors"
          >
            OVERVIEW
          </a>
          <a
            href="#principles"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hover:text-[var(--tech-cyan)] transition-colors"
          >
            PRINCIPLES
          </a>
          <a
            href="#leadership"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hover:text-[var(--tech-cyan)] transition-colors"
          >
            LEADERSHIP
          </a>
          <a
            href="#case-studies"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hover:text-[var(--tech-cyan)] transition-colors"
          >
            CASE STUDIES
          </a>
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hover:text-[var(--tech-cyan)] transition-colors"
          >
            CONNECT
          </a>
        </div>
      </div>
    </footer>
  );
};

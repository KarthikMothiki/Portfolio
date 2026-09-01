import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { soundFx } from '../lib/sound';

interface SciFiContainerProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
}

export const SciFiContainer: React.FC<SciFiContainerProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [hasBeenRead, setHasBeenRead] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Timer: After being in view at normal reading pace (1.8s), trigger "READ VERIFIED" state change
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isInView && !hasBeenRead) {
      timer = setTimeout(() => {
        setHasBeenRead(true);
        soundFx.playBeep(1050, 0.03);
      }, 1800);
    }
    return () => clearTimeout(timer);
  }, [isInView, hasBeenRead]);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovered(true);
        soundFx.playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 transition-all duration-500 rounded-2xl p-2 sm:p-4 ${
        isHovered
          ? 'bg-[#00F0FF]/10 border border-[#00F0FF] shadow-[0_0_40px_rgba(0,240,255,0.25)] scale-[1.005]'
          : hasBeenRead
          ? 'bg-[#00FF9D]/5 border border-[#00FF9D]/30 shadow-[0_0_20px_rgba(0,255,157,0.1)]'
          : 'bg-transparent border border-transparent'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

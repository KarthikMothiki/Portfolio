import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return (
    <>
      {/* Target Reticle Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#00F0FF]/60 shadow-[0_0_20px_rgba(0,240,255,0.6)] hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isClicking ? 0.75 : 1,
          borderColor: isHovered ? '#FFD700' : '#00F0FF',
          rotate: isHovered ? 90 : 0,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 350, mass: 0.15 }}
      >
        {/* Reticle Crosshairs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-full h-[1px] ${isHovered ? 'bg-[#FFD700]/40' : 'bg-[#00F0FF]/30'}`} />
          <div className={`h-full w-[1px] absolute ${isHovered ? 'bg-[#FFD700]/40' : 'bg-[#00F0FF]/30'}`} />
        </div>
      </motion.div>

      {/* Inner Laser Precision Pointer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full shadow-[0_0_10px_#00F0FF] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: 6,
          height: 6,
          backgroundColor: isHovered ? '#FFD700' : '#00F0FF',
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 900, mass: 0.02 }}
      />

      {/* Dynamic Telemetry HUD Tag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 font-tech text-[9px] font-bold text-[#00F0FF]/70 tracking-widest hidden lg:block bg-black/80 px-1.5 py-0.5 rounded border border-[#00F0FF]/30 backdrop-blur-sm"
        animate={{
          x: mousePosition.x + 18,
          y: mousePosition.y + 18,
          opacity: isHovered ? 1 : 0.6,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      >
        TGT:[{Math.round(mousePosition.x)},{Math.round(mousePosition.y)}]
      </motion.div>
    </>
  );
};

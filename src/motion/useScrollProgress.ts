import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 40%',
        end: 'bottom 40%',
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return { activeSection };
}

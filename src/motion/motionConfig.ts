export const motionTokens = {
  duration: {
    micro: 0.2,
    standard: 0.35,
    emphasis: 0.6,
    cinematic: 0.9,
  },
  ease: {
    standard: 'power2.out',
    smooth: 'power3.out',
    reveal: 'power2.inOut',
    bounce: 'back.out(1.4)',
  },
  distance: {
    micro: 8,
    small: 16,
    medium: 32,
    large: 64,
  },
  architecture: {
    stages: 4,
    scrollDistance: '500vh',
  },
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

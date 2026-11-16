import {useEffect, useRef, type ReactNode} from 'react';
import {animate} from 'motion/react';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

interface HeroEntranceProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Animates hero elements on mount with fade + rise (transform & opacity only).
 * Always settles at opacity: 1 and transform: none, and stays visible if JS or motion is disabled.
 */
export function HeroEntrance({children, delay = 0, className = ''}: HeroEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) {
      return;
    }

    const controls = animate(
      el,
      {opacity: [0.05, 1], y: [14, 0]},
      {duration: 0.55, delay, ease: [0.16, 1, 0.3, 1]}
    );

    return () => {
      controls.stop();
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Scroll-reveal wrapper that NEVER sits at opacity: 0 waiting for a trigger.
 * Elements are fully visible in the DOM at rest; when scrolled into view from below,
 * they gently fade and rise using transform and opacity only.
 */
export function RevealSection({children, delay = 0, className = ''}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) {
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.96) {
      return;
    }

    let hasAnimated = false;
    let activeControls: ReturnType<typeof animate> | null = null;

    const triggerReveal = () => {
      if (hasAnimated) {
        return;
      }
      hasAnimated = true;
      activeControls = animate(
        el,
        {opacity: [0.15, 1], y: [18, 0]},
        {duration: 0.55, delay, ease: [0.16, 1, 0.3, 1]}
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            triggerReveal();
            observer.disconnect();
            break;
          }
        }
      },
      {threshold: 0.02, rootMargin: '40px 0px -10px 0px'}
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      activeControls?.stop();
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

import {useEffect, useRef, type ReactNode} from 'react';
import {AnimatePresence, animate, motion, stagger, useReducedMotion} from 'framer-motion';

function getStaggerTargets(container: HTMLElement): HTMLElement[] {
  const directChildren = Array.from(container.children).filter(
    (node): node is HTMLElement => node instanceof HTMLElement
  );
  if (directChildren.length > 1) {
    return directChildren;
  }
  const nestedTargets = Array.from(
    container.querySelectorAll<HTMLElement>(
      ':scope > div > h1, :scope > div > h2, :scope > div > p, :scope > div > div, :scope > h1, :scope > h2, :scope > p'
    )
  );
  return nestedTargets.length > 1 ? nestedTargets : [container];
}

function resetElements(elements: HTMLElement[]) {
  for (const el of elements) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }
}

interface PageTransitionProps {
  routeKey: string;
  children: ReactNode;
}

/**
 * Global page transition wrapper that triggers a soft cross-fade when navigating between routes.
 * Respects prefers-reduced-motion and ensures main content remains visible and accessible at all times.
 */
export function PageTransition({routeKey, children}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || shouldReduceMotion) {
      if (el) {
        el.style.opacity = '1';
      }
      return;
    }

    const controls = animate(
      el,
      {opacity: [0.18, 1]},
      {duration: 0.26, ease: [0.16, 1, 0.3, 1]}
    );

    return () => {
      controls.stop();
      if (el) {
        el.style.opacity = '1';
      }
    };
  }, [routeKey, shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={routeKey}
        ref={containerRef}
        initial={shouldReduceMotion ? false : {opacity: 0.18}}
        animate={{opacity: 1}}
        exit={shouldReduceMotion ? {opacity: 1} : {opacity: 0.18}}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface HeroEntranceProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

/**
 * Staggered fade-and-rise entrance animation for hero headers and content containers.
 * Respects prefers-reduced-motion via framer-motion's useReducedMotion hook and never leaves elements hidden.
 */
export function HeroEntrance({
  children,
  delay = 0,
  staggerChildren = 0.08,
  className = '',
}: HeroEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const targets = getStaggerTargets(el);
    if (shouldReduceMotion) {
      resetElements(targets);
      resetElements([el]);
      return;
    }

    const controls = animate(
      targets,
      {opacity: [0.08, 1], y: [16, 0]},
      {
        duration: 0.52,
        delay: stagger(staggerChildren, {startDelay: delay}),
        ease: [0.16, 1, 0.3, 1],
      }
    );

    return () => {
      controls.stop();
      resetElements(targets);
      resetElements([el]);
    };
  }, [delay, staggerChildren, shouldReduceMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

/**
 * Staggered scroll-reveal wrapper for primary section headers and content containers.
 * Respects prefers-reduced-motion and guarantees elements remain visible at rest.
 */
export function RevealSection({
  children,
  delay = 0,
  staggerChildren = 0.07,
  className = '',
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const targets = getStaggerTargets(el);
    if (shouldReduceMotion) {
      resetElements(targets);
      resetElements([el]);
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
        targets,
        {opacity: [0.12, 1], y: [18, 0]},
        {
          duration: 0.52,
          delay: stagger(staggerChildren, {startDelay: delay}),
          ease: [0.16, 1, 0.3, 1],
        }
      );
    };

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.92) {
      triggerReveal();
      return () => {
        activeControls?.stop();
        resetElements(targets);
        resetElements([el]);
      };
    }

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
      {threshold: 0.05, rootMargin: '30px 0px -10px 0px'}
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      activeControls?.stop();
      resetElements(targets);
      resetElements([el]);
    };
  }, [delay, staggerChildren, shouldReduceMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

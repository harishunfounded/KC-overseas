'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  defaultRevealed?: boolean;
}

export default function SectionReveal({
  children,
  className = '',
  id,
  as: Component = 'div',
  defaultRevealed = false,
}: SectionRevealProps) {
  const [isRevealed, setIsRevealed] = useState(defaultRevealed);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (defaultRevealed) {
      setIsRevealed(true);
      return;
    }

    // Immediate reveal if user prefers reduced motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsRevealed(true);
      return;
    }

    // Immediate reveal if IntersectionObserver not supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [defaultRevealed]);

  return (
    <Component
      ref={ref}
      id={id}
      className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}

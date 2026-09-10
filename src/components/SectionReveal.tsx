'use client';

import React from 'react';

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
}: SectionRevealProps) {
  return (
    <Component id={id} className={`reveal-on-scroll is-revealed ${className}`}>
      {children}
    </Component>
  );
}

'use client';

import { ComponentPropsWithoutRef, useRef } from 'react';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { cn } from '@/lib/cn';

type SectionRevealProps = ComponentPropsWithoutRef<'section'>;

export function SectionReveal({ children, className, ...props }: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section ref={ref} className={cn('opacity-0 will-change-transform', className)} {...props}>
      {children}
    </section>
  );
}

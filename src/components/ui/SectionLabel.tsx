import type React from 'react';
import { cn } from '../../lib/cn';

export function SectionLabel({
  children,
  tone = 'dark',
}: {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}): React.JSX.Element {
  return (
    <p
      className={cn(
        'text-xs font-bold tracking-[0.16em] uppercase',
        tone === 'light' ? 'text-gold' : 'text-navy',
      )}
    >
      {children}
    </p>
  );
}

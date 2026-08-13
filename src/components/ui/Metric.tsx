import type React from 'react';
import type { MetricData } from '../../data/content';
import { cn } from '../../lib/cn';

export function Metric({
  label,
  tone = 'dark',
  value,
}: MetricData & { tone?: 'light' | 'dark' }): React.JSX.Element {
  return (
    <div className={cn(tone === 'light' ? 'text-white' : 'text-ink')}>
      <strong className="block text-4xl leading-none font-semibold tracking-[-0.06em]">{value}</strong>
      <span className={cn('mt-2 block text-xs font-bold tracking-[0.12em] uppercase', tone === 'light' ? 'text-white/65' : 'text-slate')}>
        {label}
      </span>
    </div>
  );
}

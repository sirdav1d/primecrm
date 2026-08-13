import type React from 'react';
import { cn } from '../../lib/cn';

export function Avatar({
  alt,
  size = 'md',
  src,
}: {
  src: string;
  alt: string;
  size?: 'sm' | 'md';
}): React.JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'shrink-0 rounded-full border border-paper object-cover',
        size === 'sm' ? 'h-8 w-8' : 'h-11 w-11',
      )}
    />
  );
}

import type React from 'react';
import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../lib/cn';

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): React.JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

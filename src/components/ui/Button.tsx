import type React from 'react';
import { cn } from '../../lib/cn';

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'dark';
}

const variantClasses = {
  primary: 'bg-gold text-ink hover:bg-[#ffbf1c]',
  secondary: 'border border-ink/20 bg-paper text-ink hover:border-ink/45',
  dark: 'bg-navy text-white hover:bg-navy-deep',
};

export function Button({
  className,
  href,
  style,
  variant = 'primary',
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <a
      {...props}
      href={href ?? '#demo'}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors',
        variantClasses[variant],
        className,
      )}
      style={{ ...style, minWidth: '44px', minHeight: '44px' }}
    />
  );
}

import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
};

const classes = {
  primary:
    'bg-accent-600 text-white hover:bg-accent-500 focus-visible:ring-accent-500 [@media(prefers-color-scheme:dark)]:bg-accent-500 [@media(prefers-color-scheme:dark)]:hover:bg-accent-400',
  secondary:
    'bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-100 focus-visible:ring-accent-500 [@media(prefers-color-scheme:dark)]:bg-slate-800 [@media(prefers-color-scheme:dark)]:text-slate-100 [@media(prefers-color-scheme:dark)]:ring-slate-600 [@media(prefers-color-scheme:dark)]:hover:bg-slate-700',
  ghost:
    'text-accent-600 ring-1 ring-accent-600/25 hover:bg-accent-50 focus-visible:ring-accent-500 [@media(prefers-color-scheme:dark)]:text-accent-300 [@media(prefers-color-scheme:dark)]:ring-accent-300/40 [@media(prefers-color-scheme:dark)]:hover:bg-slate-800/80',
};

export const Button = ({ children, href, variant = 'primary', external, className }: ButtonProps) => {
  const base = cn(
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [@media(prefers-color-scheme:dark)]:focus-visible:ring-offset-slate-900',
    classes[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={base} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={base}>
      {children}
    </a>
  );
};

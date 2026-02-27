import { Link } from 'react-router-dom';
import type { MouseEventHandler, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const classes = {
  primary: 'bg-accent-600 text-white hover:bg-accent-500 focus-visible:ring-accent-500',
  secondary: 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 ring-1 ring-slate-300 hover:bg-slate-100 dark:bg-slate-800 focus-visible:ring-accent-500',
  ghost: 'text-accent-600 ring-1 ring-accent-600/25 hover:bg-accent-50 focus-visible:ring-accent-500',
};

export const Button = ({ children, href, variant = 'primary', external, className, onClick }: ButtonProps) => {
  const base = cn(
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [@media(prefers-color-scheme:dark)]:focus-visible:ring-offset-slate-900',
    classes[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={base} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={base} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={base} onClick={onClick}>
      {children}
    </a>
  );
};

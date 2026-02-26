import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionProps = {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({ id, title, intro, children, className }: SectionProps) => (
  <section id={id} className={cn('py-16 md:py-24', className)}>
    <div className="mx-auto w-full max-w-6xl px-6">
      {(title || intro) && (
        <div className="mb-8 max-w-3xl">
          {title && <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 md:text-4xl">{title}</h2>}
          {intro && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{intro}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

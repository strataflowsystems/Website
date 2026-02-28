import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionProps = {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  headingLevel?: 1 | 2 | 3;
};

export const Section = ({ id, title, intro, children, className, headingLevel = 2 }: SectionProps) => {
  const HeadingTag = `h${headingLevel}` as ElementType;

  return (
    <section id={id} className={cn('py-12 md:py-16', className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(title || intro) && (
          <div className="mb-8 max-w-3xl">
            {title && <HeadingTag className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 md:text-4xl">{title}</HeadingTag>}
            {intro && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

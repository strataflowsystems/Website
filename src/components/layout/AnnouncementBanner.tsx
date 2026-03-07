import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const AnnouncementBanner = () => {
  const reduce = useReducedMotion();

  if (!site.announcement.enabled) return null;

  return (
    <motion.div
      className="border-b border-emerald-400/70 bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200 dark:border-emerald-900/90 dark:from-emerald-950 dark:via-emerald-900 dark:to-emerald-950"
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-3 px-6 py-2 text-sm text-emerald-950 dark:text-emerald-100 sm:items-center">
        <div className="flex min-w-0 flex-1 items-start gap-2 sm:items-center">
          <motion.span
            className="inline-block h-2 w-2 rounded-full bg-emerald-700 dark:bg-emerald-400"
            animate={reduce ? {} : { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <p className="min-w-0 leading-tight">{site.announcement.text}</p>
        </div>
        <a className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium text-emerald-900 transition hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100" href={site.announcement.href}>
          Learn more
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
};

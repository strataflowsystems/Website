import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const AnnouncementBanner = () => {
  const reduce = useReducedMotion();

  if (!site.announcement.enabled) return null;

  return (
    <motion.div
      className="border-b border-accent-200/70 bg-gradient-to-r from-accent-50 via-white to-accent-50"
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            className="inline-block h-2 w-2 rounded-full bg-accent-500"
            animate={reduce ? {} : { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <p className="leading-tight">{site.announcement.text}</p>
        </div>
        <a className="inline-flex items-center gap-1.5 font-medium text-accent-700 transition hover:text-accent-600" href={site.announcement.href}>
          Learn more
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
};

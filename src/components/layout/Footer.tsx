import { site } from '@/content/site';

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/70 py-8 dark:border-slate-800 dark:bg-slate-900/60">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 dark:text-slate-400 md:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
        <a href="/contact" className="inline-flex w-fit items-center rounded-md bg-accent-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-accent-500">
          Book a discovery call
        </a>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">Evidence-led Microsoft 365 automation for operations-heavy teams across the UK.</p>
      <nav className="flex flex-wrap items-center gap-4">
        <a href="/privacy" className="hover:text-accent-600">Privacy</a>
        <a href="/terms" className="hover:text-accent-600">Terms</a>
        <a href="mailto:hello@strataflowsystems.com" className="text-slate-600 dark:text-slate-400 hover:text-accent-600" aria-label="Email">
          Email
        </a>
        <a
          href="https://www.linkedin.com/company/strataflow-systems/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-accent-600"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>
);

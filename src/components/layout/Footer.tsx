import { site } from '@/content/site';

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/70 py-8 dark:border-slate-800 dark:bg-slate-900/60">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
      <p>© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
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

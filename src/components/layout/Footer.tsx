import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '@/content/site';

export const Footer = () => (
  <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:items-end">
      <div>
        <h3 className="text-sm font-semibold tracking-[0.11em] text-slate-950 dark:text-slate-100">{site.company}</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{site.motto}</p>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">© {new Date().getFullYear()} Strataflow Systems. All rights reserved.</p>
      </div>
      <div className="space-y-4 md:text-right">
        <div className="flex gap-4 md:justify-end">
          <a href="mailto:hello@strataflowsystems.com" className="text-slate-600 dark:text-slate-400 hover:text-accent-600" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-accent-600" aria-label="LinkedIn placeholder">
            <Linkedin size={18} />
          </a>
        </div>
        <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400 md:justify-end">
          <Link to="/privacy" className="hover:text-accent-600">Privacy</Link>
          <Link to="/terms" className="hover:text-accent-600">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

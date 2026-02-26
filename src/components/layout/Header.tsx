import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/95 backdrop-blur dark:border-slate-800 dark:bg-[#0f1115]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center" aria-label="Go to homepage">
          <img src={logo} alt="Strataflow Systems" className="h-auto w-auto max-h-10 max-w-[220px] object-contain" />
        </NavLink>

        <button
          className="rounded-md p-2 text-slate-700 dark:text-slate-300 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100',
                  isActive && 'font-medium text-slate-950 dark:text-slate-100',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href={site.primaryCta.href} className="py-2">
            {site.primaryCta.label}
          </Button>
          <button
            className="inline-flex items-center gap-2 rounded-md border border-accent-500/40 bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 ring-1 ring-accent-400/30 hover:bg-accent-500 dark:border-accent-400/40 dark:bg-accent-500 dark:hover:bg-accent-600"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <NavLink key={item.href} to={item.href} className="text-slate-700 dark:text-slate-300" onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-md border border-accent-500/40 bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 ring-1 ring-accent-400/30 hover:bg-accent-500 dark:border-accent-400/40 dark:bg-accent-500 dark:hover:bg-accent-600"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

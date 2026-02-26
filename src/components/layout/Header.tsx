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
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-[#0f1115]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center" aria-label="Go to homepage">
          <img src={logo} alt="Strataflow Systems" className="h-auto w-auto max-h-10 max-w-[220px] object-contain" />
        </NavLink>

        <div className="flex items-center gap-2">
          <button
            className="rounded-md border border-slate-200 dark:border-slate-800 p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="rounded-md p-2 text-slate-700 dark:text-slate-300 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'text-sm text-slate-600 dark:text-slate-400 transition hover:text-slate-950 dark:hover:text-slate-100',
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
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <NavLink key={item.href} to={item.href} className="text-slate-700 dark:text-slate-300" onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

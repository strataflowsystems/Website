import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

const isStrataBotTestingRoute = (href: string) => href === '/stratabot-testing';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, setLightTheme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/95 backdrop-blur dark:border-slate-800 dark:bg-[#0f1115]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center" aria-label="Go to homepage">
          <img src={logo} alt="Strataflow Systems" className="h-auto w-auto max-h-10 max-w-[220px] object-contain transition duration-500 dark:brightness-0 dark:invert" />
        </NavLink>

        <button
          className="rounded-md p-2 text-slate-700 dark:text-slate-300 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          {site.nav.map((item) =>
            isStrataBotTestingRoute(item.href) ? (
              <Button key={item.href} href={item.href} variant="ghost" className="px-4 py-2 text-xs">
                {item.label}
              </Button>
            ) : (
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
            ),
          )}
          <Button href={site.primaryCta.href} className="px-4 py-2 text-xs whitespace-nowrap">
            {site.primaryCta.label}
          </Button>
          <button
            type="button"
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-11 items-center rounded-full border border-slate-300 bg-slate-200 transition-colors hover:bg-slate-300 dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
          >
            <span
              className={cn(
                'pointer-events-none inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow transition-transform dark:bg-slate-950 dark:text-slate-200',
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5',
              )}
            >
              {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
            </span>
          </button>
          {theme === 'dark' && (
            <button
              type="button"
              onClick={setLightTheme}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              Prefer Light mode?
            </button>
          )}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((item) =>
              isStrataBotTestingRoute(item.href) ? (
                <Button key={item.href} href={item.href} variant="ghost" className="w-fit" onClick={() => setOpen(false)}>
                  {item.label}
                </Button>
              ) : (
                <NavLink key={item.href} to={item.href} className="text-slate-700 dark:text-slate-300" onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ),
            )}
            <div className="flex items-center gap-3">
              <Button href={site.primaryCta.href} className="whitespace-nowrap" onClick={() => setOpen(false)}>{site.primaryCta.label}</Button>
              <button
                type="button"
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full border border-slate-300 bg-slate-200 transition-colors hover:bg-slate-300 dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={theme === 'dark'}
              >
                <span
                  className={cn(
                    'pointer-events-none inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow transition-transform dark:bg-slate-950 dark:text-slate-200',
                    theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5',
                  )}
                >
                  {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
                </span>
              </button>
              {theme === 'dark' && (
                <button
                  type="button"
                  onClick={setLightTheme}
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                >
                  Prefer Light mode?
                </button>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

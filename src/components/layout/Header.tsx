import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/strataflow-logo-tall-simple.svg';
import logoDark from '@/assets/strataflow-logo-tall-simple-dark.svg';
import { site } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center" aria-label="Go to homepage">
          <picture>
            <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
            <img src={logo} alt="Strataflow Systems" className="h-auto w-auto max-h-14 max-w-[120px] object-contain" />
          </picture>
        </NavLink>

        <button
          className="rounded-md p-2 text-slate-700 md:hidden"
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
                cn('text-sm text-slate-600 transition hover:text-slate-950', isActive && 'font-medium text-slate-950')
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
        <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <NavLink key={item.href} to={item.href} className="text-slate-700" onClick={() => setOpen(false)}>
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

import { ArrowRight } from 'lucide-react';
import { site } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/analytics';

export const HeroSection = () => (
  <section className="border-b border-slate-200 dark:border-slate-800/80 py-14 md:py-20">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.3fr_1fr] md:items-end">
      <div>
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-accent-600">{site.motto}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 md:text-5xl">{site.hero.heading}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{site.hero.subheading}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.primaryCta.href} onClick={() => trackEvent('cta_click', { cta: 'hero_primary' })}>{site.primaryCta.label}</Button>
            <Button href={site.secondaryCtas[0].href} variant="secondary" onClick={() => trackEvent('deck_download_click', { cta: 'hero_secondary' })}>{site.secondaryCtas[0].label}</Button>
          </div>
          <a
            href={site.secondaryCtas[1].href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition hover:text-accent-500"
            onClick={() => trackEvent('cta_click', { cta: 'hero_case_studies' })}
          >
            {site.secondaryCtas[1].label}
            <ArrowRight size={14} />
          </a>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card">
          <p className="text-sm text-slate-600 dark:text-slate-400">{site.hero.proof}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-accent-600">
            Engagements designed for measurable outcomes <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

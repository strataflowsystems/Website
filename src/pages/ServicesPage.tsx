import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo, site } from '@/content/site';

export const ServicesPage = () => (
  <>
    <Seo {...seo.pages.services} />
    <Section title="Service packages" intro="Structured for measurable outcomes, clear governance, and executive-ready reporting.">
      <div className="grid gap-4 lg:grid-cols-3">
        {site.services.map((service) => (
          <article key={service.name} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{service.name}</h2>
            <p className="mt-4 text-sm font-medium text-accent-600">Outcomes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {service.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm font-medium text-accent-600">Deliverables</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {service.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{service.timeline}</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{service.bestFor}</p>
            <Button href="/contact" className="mt-6 w-full">Book a Discovery Call</Button>
          </article>
        ))}
      </div>
    </Section>

    <Section title="Engagement model">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-card">
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          {site.engagementModel.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Section>
  </>
);

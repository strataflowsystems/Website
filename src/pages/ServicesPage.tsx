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
          <article key={service.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
            <h2 className="text-xl font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-4 text-sm font-medium text-accent-600">Outcomes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {service.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm font-medium text-accent-600">Deliverables</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {service.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-slate-700">{service.timeline}</p>
            <p className="mt-2 text-sm text-slate-700">{service.bestFor}</p>
            <Button href="/contact" className="mt-6 w-full">Book a Discovery Call</Button>
          </article>
        ))}
      </div>
    </Section>

    <Section title="Engagement model">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card">
        <ul className="list-disc space-y-2 pl-5 text-slate-600">
          {site.engagementModel.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Section>
  </>
);

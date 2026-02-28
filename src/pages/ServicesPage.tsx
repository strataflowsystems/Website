import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo, site } from '@/content/site';

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'Microsoft 365 Workflow Automation',
      url: 'https://strataflowsystems.com/services/microsoft-365-workflow-automation',
    },
    {
      '@type': 'Service',
      name: 'Operations Compliance & Audit Trails',
      url: 'https://strataflowsystems.com/services/operations-compliance-audit-trails',
    },
    {
      '@type': 'Service',
      name: 'Geospatial Field-Ops Workflow Integration',
      url: 'https://strataflowsystems.com/services/geospatial-field-ops-workflows',
    },
  ],
};

export const ServicesPage = () => (
  <>
    <Seo {...seo.pages.services} />
    <StructuredData data={serviceListSchema} />

    <Section title="Service packages" headingLevel={1} intro="Structured for measurable outcomes, clear governance, and executive-ready reporting.">
      <div className="grid gap-4 lg:grid-cols-3">
        {site.services.map((service) => (
          <article key={service.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
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

    <Section title="Dedicated service areas" intro="Explore focused service pages tailored to specific operational outcomes.">
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsoft 365 workflow automation</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Deploy scalable M365-native workflows that reduce manual admin and improve execution reliability.</p>
          <Button href="/services/microsoft-365-workflow-automation" variant="secondary" className="mt-4 w-full">View details</Button>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Operations compliance & audit trails</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Build governance-ready process controls with evidence capture designed into each workflow step.</p>
          <Button href="/services/operations-compliance-audit-trails" variant="secondary" className="mt-4 w-full">View details</Button>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Geospatial field-ops integration</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Unify location context with workflows to speed field decisions and improve traceability.</p>
          <Button href="/services/geospatial-field-ops-workflows" variant="secondary" className="mt-4 w-full">View details</Button>
        </article>
      </div>
    </Section>

    <Section title="Engagement model">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          {site.engagementModel.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Section>
  </>
);

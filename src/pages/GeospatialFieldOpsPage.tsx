import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Geospatial field operations workflow integration',
  provider: {
    '@type': 'Organization',
    name: 'Strataflow Systems',
    url: 'https://strataflowsystems.com',
  },
  areaServed: 'United Kingdom',
  serviceType: 'Geospatial workflow automation',
};

export const GeospatialFieldOpsPage = () => (
  <>
    <Seo {...seo.pages.geospatialFieldOps} />
    <StructuredData data={serviceSchema} />
    <Section title="Geospatial field-ops workflow integration" headingLevel={1} intro="Connect location context to operational decision-making in Microsoft 365.">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          For field-intensive organizations, we blend geospatial context into workflow steps so site status, route, zone, and
          asset information are available where decisions happen. Teams execute faster and produce stronger evidence quality.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Location-aware forms and approvals</li>
          <li>Field-to-office workflow synchronization</li>
          <li>Geotagged evidence and traceability</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Discuss field-ops integration</Button>
          <Button href="/case-studies" variant="secondary">See relevant outcomes</Button>
        </div>
      </div>
    </Section>
  </>
);

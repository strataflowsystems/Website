import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const faqItems = [
  {
    q: 'How do you integrate GIS with Microsoft 365?',
    a: 'We connect mapping platforms and APIs to Power Platform workflows so location data can trigger actions and be logged with each process event.',
  },
  {
    q: 'Do teams need specialist GIS software?',
    a: 'No. Most solutions run via cloud dashboards and mobile-friendly forms, so field and office teams can collaborate without desktop GIS tooling.',
  },
];

export const GeospatialFieldOpsPage = () => (
  <>
    <Seo {...seo.pages.geospatialFieldOps} />
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
    <Section title="Spatially-aware workflow automation" headingLevel={1} intro="Combine GIS data with Microsoft 365 workflows for smarter operations.">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          Strataflow uniquely combines location intelligence with Microsoft 365 automation. Work orders, inspections, and site records can include location context and geotagged evidence automatically,
          making field decisions faster and easier to validate.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Location-aware forms, routing, and assignment logic</li>
          <li>Field-to-office synchronization with complete action history</li>
          <li>Geotagged evidence trails for compliance and reporting</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Explore Spatial Workflow Solutions</Button>
          <Button href="/case-studies" variant="secondary">See field-ops outcomes</Button>
        </div>
      </div>
    </Section>

    <Section title="FAQ">
      <div className="space-y-3">
        {faqItems.map((faq) => (
          <details key={faq.q} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="cursor-pointer font-medium text-slate-900 dark:text-slate-100">{faq.q}</summary>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{faq.a}</p>
          </details>
        ))}
      </div>
    </Section>
  </>
);

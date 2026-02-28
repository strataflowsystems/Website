import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Operations compliance and audit trails',
  provider: {
    '@type': 'Organization',
    name: 'Strataflow Systems',
    url: 'https://strataflowsystems.com',
  },
  areaServed: 'United Kingdom',
  serviceType: 'Compliance workflow automation',
};

export const ComplianceAuditTrailsPage = () => (
  <>
    <Seo {...seo.pages.complianceAuditTrails} />
    <StructuredData data={serviceSchema} />
    <Section title="Operations compliance & audit trails" headingLevel={1} intro="Move from reactive evidence gathering to always-on operational traceability.">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          We embed governance controls directly into everyday execution so approvals, decisions, documents, and timestamps are
          captured in real time. This reduces audit prep effort and increases confidence in compliance reporting.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Control point and retention-policy design</li>
          <li>Approval history and decision-trace architecture</li>
          <li>Executive-ready evidence and KPI reporting</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Request a compliance workflow review</Button>
          <Button href="/services" variant="secondary">Back to services</Button>
        </div>
      </div>
    </Section>
  </>
);

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft 365 Workflow Automation',
  provider: {
    '@type': 'Organization',
    name: 'Strataflow Systems',
    url: 'https://strataflowsystems.com',
  },
  areaServed: 'United Kingdom',
  serviceType: 'Workflow automation consulting',
};

export const M365AutomationPage = () => (
  <>
    <Seo {...seo.pages.m365Automation} />
    <StructuredData data={serviceSchema} />
    <Section title="Microsoft 365 workflow automation" headingLevel={1} intro="Eliminate process friction while preserving governance and auditability.">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          We design and implement Microsoft 365-native workflows across SharePoint, Teams, Power Apps, and Power Automate so
          operational teams can execute consistently, reduce manual handoffs, and produce reliable evidence trails.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Workflow mapping and process redesign</li>
          <li>Role-based approvals and exception routing</li>
          <li>Evidence capture by default for audits and governance</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Book a discovery call</Button>
          <Button href="/case-studies" variant="secondary">View case studies</Button>
        </div>
      </div>
    </Section>
  </>
);

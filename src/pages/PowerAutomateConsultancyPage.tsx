import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const faqItems = [
  {
    q: 'What kinds of processes work best for Power Automate?',
    a: 'Repetitive and rule-based work such as approvals, notifications, file routing, and system-to-system syncing deliver the fastest ROI.',
  },
  {
    q: 'How do you keep Power Automate flows reliable?',
    a: 'We build with error handling, governance standards, and post-launch monitoring so critical flows are visible and recoverable.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Power Automate Consultancy',
    serviceType: 'Power Automate consulting services',
    areaServed: 'United Kingdom',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  },
];

export const PowerAutomateConsultancyPage = () => (
  <>
    <Seo {...seo.pages.powerAutomateConsultancy} />
    <StructuredData data={schema} />
    <Section title="Power Automate consulting services" headingLevel={1} intro="Harness low-code automation for everyday tasks across Microsoft 365.">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          Strataflow audits your current processes, identifies high-impact automation opportunities, and builds secure Power Automate flows for business-critical operations.
          From Outlook and Teams to Excel, SharePoint, and legacy systems, we connect the tools your teams already use.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Automation opportunity assessment and prioritization</li>
          <li>Flow build, testing, and managed deployment</li>
          <li>Monitoring, optimization, and support for live workflows</li>
        </ul>
        <p className="text-slate-600 dark:text-slate-400">
          Typical outcomes include fewer manual errors and substantial time savings. Recent engagements have returned 10+ hours per week to finance and operations teams.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Get a Power Automate Health Check</Button>
          <Button href="/services" variant="secondary">View all services</Button>
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

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const faqItems = [
  {
    q: 'What does Microsoft 365 workflow automation include?',
    a: 'It usually includes SharePoint, Teams, and Power Automate workflows for approvals, forms, document control, notifications, and reporting.',
  },
  {
    q: 'How quickly can workflows go live?',
    a: 'Most teams can launch initial high-value workflows in 2–6 weeks depending on process complexity and integrations.',
  },
];

export const M365AutomationPage = () => (
  <>
    <Seo {...seo.pages.m365Automation} />
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
    <Section title="Automate your Microsoft 365 workflows" headingLevel={1} intro="Reduce manual work, ensure compliance, and never lose a document.">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          Strataflow builds Microsoft 365 workflow automation services for UK operations teams that need faster execution and stronger governance. We design SharePoint and Power Automate solutions that route approvals automatically and store every key action in auditable records.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Typical results include reduced admin overhead, fewer process bottlenecks, and clear evidence trails for compliance and leadership reporting.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Workflow mapping and process redesign</li>
          <li>Role-based approvals and exception routing</li>
          <li>Evidence capture by default for audits and governance</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Book a Microsoft 365 Workflow Demo</Button>
          <Button href="/case-studies" variant="secondary">View case studies</Button>
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

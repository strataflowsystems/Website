import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const faqItems = [
  {
    q: 'Can SharePoint workflows be used on mobile?',
    a: 'Yes. Users can submit forms, approve tasks, and review status from mobile-friendly SharePoint and Power Automate experiences.',
  },
  {
    q: 'Can you reuse existing SharePoint lists and forms?',
    a: 'In most cases yes. We typically modernize your current structures and connect them to robust approval and evidence-capture flows.',
  },
];

export const SharePointWorkflowAutomationPage = () => (
  <>
    <Seo {...seo.pages.sharepointWorkflowAutomation} />
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
    <Section title="Automate SharePoint workflows" headingLevel={1} intro="From document approvals to asset tracking, all in SharePoint Online.">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          Strataflow turns SharePoint into a dependable workflow engine. When forms are submitted or status changes, flows can trigger approvals, alerts, and updates automatically while preserving complete audit history.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>Contract and policy approvals with traceable handoffs</li>
          <li>Asset, maintenance, and inspection workflows</li>
          <li>Retention-aware document control with evidence trails</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">View a SharePoint Workflow Demo</Button>
          <Button href="/services/power-platform-governance" variant="secondary">Need governance too?</Button>
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

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo } from '@/content/site';

const faqItems = [
  {
    q: 'What is a Power Platform Center of Excellence?',
    a: 'A CoE is a governance framework that combines policies, tooling, and ownership models to scale automation safely.',
  },
  {
    q: 'Can governance help reduce licensing costs?',
    a: 'Yes. Governance reporting identifies underused resources, helps right-size licensing, and prevents unnecessary environment sprawl.',
  },
];

export const PowerPlatformGovernancePage = () => (
  <>
    <Seo {...seo.pages.powerPlatformGovernance} />
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
    <Section title="Power Platform governance services" headingLevel={1} intro="Frameworks and oversight to scale automation safely.">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">
          Strataflow helps IT and operational teams implement governance for Power Apps and Power Automate. We establish DLP policies, environment strategy,
          naming standards, and approval controls so innovation happens with clear guardrails.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          <li>CoE design and rollout for Microsoft 365 tenants</li>
          <li>DLP policy and connector risk controls</li>
          <li>Executive reporting for adoption, risk, and ROI</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Schedule a Governance Workshop</Button>
          <Button href="/services/power-automate-consultancy" variant="secondary">Pair with consultancy</Button>
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

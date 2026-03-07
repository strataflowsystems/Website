import { CheckCircle2 } from 'lucide-react';
import { FinalCtaBand } from '@/components/sections/FinalCtaBand';
import { HeroSection } from '@/components/sections/HeroSection';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { StructuredData } from '@/components/ui/StructuredData';
import { seo, site } from '@/content/site';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.company,
  url: 'https://strataflowsystems.com',
  email: 'hello@strataflowsystems.com',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.company,
  url: 'https://strataflowsystems.com',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: site.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export const HomePage = () => (
  <>
    <Seo {...seo.pages.home} />
    <StructuredData data={[orgSchema, websiteSchema, faqSchema]} />
    <HeroSection />

    <Section title="The operational bottleneck" headingLevel={2}>
      <ul className="grid gap-3 md:grid-cols-3">
        {site.problem.map((item) => (
          <li key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </Section>

    <Section className="bg-slate-100/70 dark:bg-slate-900/40" title="Why teams choose Strataflow" intro="Microsoft 365 workflow automation built for operational outcomes, not just technical delivery.">
      <div className="grid gap-4 md:grid-cols-3">
        {site.pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{pillar.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{pillar.description}</p>
          </article>
        ))}
      </div>
    </Section>

    <Section title="How we deliver" intro="A proven model from diagnostic through managed optimization.">
      <div className="grid gap-4 md:grid-cols-4">
        {site.howItWorks.map((step) => (
          <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-slate-100/70 dark:bg-slate-900/40" title="Industry focus">
      <div className="grid gap-4 md:grid-cols-3">
        {site.industries.map((industry) => (
          <div key={industry.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{industry.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{industry.description}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Proof from similar engagements" intro="Conservative outcomes from operations-heavy UK teams.">
      <div className="grid gap-4 md:grid-cols-3">
        {site.caseStudies.map((cs) => (
          <article key={cs.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-500">{cs.clientType}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{cs.title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{cs.challenge}</p>
            <p className="mt-3 text-sm text-accent-600">Available on request</p>
          </article>
        ))}
      </div>
    </Section>

    <Section className="bg-slate-100/70 dark:bg-slate-900/40" title="Capabilities across Microsoft 365 and Power Platform">
      <ul className="grid gap-3 md:grid-cols-2">
        {site.capabilities.map((item) => (
          <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <CheckCircle2 className="mt-0.5 text-accent-600" size={18} />
            {item}
          </li>
        ))}
      </ul>
    </Section>

    <Section title="Trust signals" intro="Built on Microsoft cloud patterns with governance and audit readiness designed in.">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">Microsoft 365-native architecture</div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">Power Platform governance and CoE controls</div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">Evidence trails for approvals, files, and location context</div>
      </div>
    </Section>

    <Section className="bg-slate-100/70 dark:bg-slate-900/40" title="Chat with our team" intro="Use the chat bubble in the bottom-right corner to ask questions and get quick guidance via our assistant.">
      <p className="text-slate-600 dark:text-slate-400">The assistant is available on every page except contact, where we minimize distractions for form completion.</p>
    </Section>

    <Section title="FAQ">
      <div className="space-y-3">
        {site.faqs.map((faq) => (
          <details key={faq.q} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="cursor-pointer font-medium text-slate-900 dark:text-slate-100">{faq.q}</summary>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{faq.a}</p>
          </details>
        ))}
      </div>
    </Section>

    <FinalCtaBand />
  </>
);

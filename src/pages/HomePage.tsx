import { CheckCircle2 } from 'lucide-react';
import { FinalCtaBand } from '@/components/sections/FinalCtaBand';
import { HeroSection } from '@/components/sections/HeroSection';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo, site } from '@/content/site';

export const HomePage = () => (
  <>
    <Seo {...seo.pages.home} />
    <HeroSection />

    <Section title="Why operations teams struggle to prove work">
      <div className="grid gap-4 md:grid-cols-3">
        {site.problem.map((item, index) => (
          <Reveal key={item} delay={index * 0.08}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-card transition-transform duration-300 hover:-translate-y-1">{item}</div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section title="Solution pillars">
      <div className="grid gap-4 md:grid-cols-3">
        {site.pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.1}>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section title="How it works">
      <ol className="grid gap-4 md:grid-cols-4">
        {site.howItWorks.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <p className="text-sm font-medium text-accent-600">Step {index + 1}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>

    <Section title="Industries served">
      <div className="grid gap-4 md:grid-cols-3">
        {site.industries.map((industry, index) => (
          <Reveal key={industry.title} delay={index * 0.08}>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-slate-900">{industry.title}</h3>
              <p className="mt-2 text-slate-600">{industry.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section title="Case study preview" intro="Detailed versions available on request.">
      <div className="grid gap-4 md:grid-cols-3">
        {site.caseStudies.map((cs, index) => (
          <Reveal key={cs.title} delay={index * 0.08}>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <p className="text-sm text-slate-500">{cs.clientType}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{cs.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{cs.challenge}</p>
              <p className="mt-3 text-sm text-accent-600">Available on request</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section title="Capability snapshot">
      <ul className="grid gap-3 md:grid-cols-2">
        {site.capabilities.map((item, index) => (
          <Reveal key={item} delay={index * 0.05}>
            <li className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 transition-transform duration-300 hover:-translate-y-0.5">
              <CheckCircle2 className="mt-0.5 text-accent-600" size={18} />
              {item}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>

    <Section title="Chat with our team" intro="Use the chat bubble in the bottom-right corner to ask questions and get quick guidance via our assistant.">
      <Reveal>
        <p className="text-slate-600">The assistant is available on every page via the floating widget.</p>
      </Reveal>
    </Section>

    <Section title="FAQ">
      <div className="space-y-3">
        {site.faqs.map((faq, index) => (
          <Reveal key={faq.q} delay={index * 0.06}>
            <details className="rounded-lg border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-card">
              <summary className="cursor-pointer font-medium text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-slate-600">{faq.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>

    <FinalCtaBand />
  </>
);

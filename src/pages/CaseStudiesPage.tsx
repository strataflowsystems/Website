import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo, site } from '@/content/site';

export const CaseStudiesPage = () => (
  <>
    <Seo {...seo.pages.caseStudies} />
    <Section title="Selected case studies" intro="Conservative, operations-focused outcomes from real implementations.">
      <div className="space-y-4">
        {site.caseStudies.map((study) => (
          <article key={study.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm text-slate-500">{study.clientType}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{study.title}</h2>
            <p className="mt-4 text-slate-600"><span className="font-medium text-slate-800">Challenge:</span> {study.challenge}</p>
            <p className="mt-2 text-slate-600"><span className="font-medium text-slate-800">Approach:</span> {study.approach}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {study.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
            <p className="mt-3 text-sm text-slate-500">Stack used: {study.stack}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/contact">Request full case study pack</Button>
      </div>
    </Section>
  </>
);

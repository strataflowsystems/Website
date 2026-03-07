import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo, site } from '@/content/site';

export const CaseStudiesPage = () => (
  <>
    <Seo {...seo.pages.caseStudies} />
    <Section title="Selected case studies" headingLevel={1} intro="Conservative, operations-focused outcomes from real implementations.">
      <div className="space-y-4">
        {site.caseStudies.map((study) => (
          <article key={study.title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card">
            <p className="text-sm text-slate-500 dark:text-slate-500">{study.clientType}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{study.title}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800">Challenge:</span> {study.challenge}</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800">Workflow change:</span> {study.approach}</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800">Evidence and control improvement:</span> {study.evidenceImprovement}</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800">Outcome:</span> {study.outcomeSummary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
              {study.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">Stack used: {study.stack}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/contact">Request full case study pack</Button>
      </div>
    </Section>
  </>
);

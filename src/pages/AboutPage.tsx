import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo, site } from '@/content/site';

export const AboutPage = () => (
  <>
    <Seo {...seo.pages.about} />
    <Section title="About Strataflow Systems" headingLevel={1} intro="We help operations-heavy teams execute with confidence and evidence-readiness by design.">
      <div className="space-y-8 rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Mission</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Enable operational teams to modernize workflows without sacrificing governance, traceability, or speed.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Principles</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
            <li>Design for operators first, then optimize for oversight.</li>
            <li>Evidence capture should be native to execution, not an afterthought.</li>
            <li>Keep architecture pragmatic, secure, and aligned to your operational stack and standards.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Operating model</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Our teams work with stakeholders across operations, IT, and compliance to deliver clear scope, iterative value, and measurable outcomes.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Why Strataflow</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Strataflow brings an automation + AI implementation approach and an evidence-led mindset that makes delivery and audit-readiness reinforce each other.</p>
        </div>
      </div>
    </Section>

    <Section className="bg-slate-100/70 dark:bg-slate-900/40" title={site.founderPerspective.title} intro="Commercial credibility shaped by solving operational breakdowns in live delivery environments.">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">{site.founderPerspective.body}</p>
      </div>
    </Section>

    <Section title="Delivery discipline" intro="How Strataflow implements systems so they are reliable, governed, and sustainable after go-live.">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <ul className="grid gap-3 md:grid-cols-2">
          {site.deliveryAssurance.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  </>
);

import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const AboutPage = () => (
  <>
    <Seo {...seo.pages.about} />
    <Section title="About Strataflow Systems" intro="We help operations-heavy teams execute with confidence and evidence-readiness by design.">
      <div className="space-y-8 rounded-xl border border-slate-200 bg-white p-8 shadow-card">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-3 text-slate-600">Enable operational teams to modernize workflows without sacrificing governance, traceability, or speed.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Principles</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            <li>Design for operators first, then optimize for oversight.</li>
            <li>Evidence capture should be native to execution, not an afterthought.</li>
            <li>Keep architecture pragmatic, secure, and aligned to Microsoft 365 standards.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Operating model</h2>
          <p className="mt-3 text-slate-600">Our teams work with stakeholders across operations, IT, and compliance to deliver clear scope, iterative value, and measurable outcomes.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Why Strataflow</h2>
          <p className="mt-3 text-slate-600">Strataflow brings an M365-native implementation approach and an evidence ledger mindset that makes delivery and audit-readiness reinforce each other.</p>
        </div>
      </div>
    </Section>
  </>
);

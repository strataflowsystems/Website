import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const TermsPage = () => (
  <>
    <Seo {...seo.pages.terms} />
    <Section title="Terms of Use" headingLevel={1}>
      <div className="space-y-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-slate-600 dark:text-slate-400 shadow-card">
        <p>This website is provided for general informational purposes only and does not constitute legal, compliance, or technical advice.</p>
        <p>All content is owned by Strataflow Systems unless stated otherwise. Reproduction requires prior written consent.</p>
        <p>By using this website, you agree to these terms and applicable laws.</p>
      </div>
    </Section>
  </>
);

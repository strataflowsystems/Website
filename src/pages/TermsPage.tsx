import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const TermsPage = () => (
  <>
    <Seo {...seo.pages.terms} />
    <Section title="Terms of Use">
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-8 text-slate-600 shadow-card">
        <p>This website is provided for general informational purposes only and does not constitute legal, compliance, or technical advice.</p>
        <p>All content is owned by Strataflow Systems unless stated otherwise. Reproduction requires prior written consent.</p>
        <p>By using this website, you agree to these terms and applicable laws.</p>
      </div>
    </Section>
  </>
);

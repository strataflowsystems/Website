import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const PrivacyPage = () => (
  <>
    <Seo {...seo.pages.privacy} />
    <Section title="Privacy Policy">
      <div className="space-y-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-slate-600 dark:text-slate-400 shadow-card">
        <p>Strataflow Systems collects only the information required to respond to inquiries, deliver services, and improve website performance.</p>
        <p>We do not sell personal data. Data submitted through forms is processed by approved third-party providers and retained only as needed for business and legal purposes.</p>
        <p>For privacy requests, contact <a className="text-accent-600" href="mailto:hello@strataflowsystems.com">hello@strataflowsystems.com</a>.</p>
      </div>
    </Section>
  </>
);

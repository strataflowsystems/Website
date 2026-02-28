import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const PrivacyPage = () => (
  <>
    <Seo {...seo.pages.privacy} />
    <Section title="Privacy Policy" headingLevel={1}>
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 text-slate-600 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        <p>
          Strataflow Systems collects only the information needed to respond to inquiries, deliver services, and measure website effectiveness.
          We do not sell personal data.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Data we process</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Contact form submissions (name, email, company, message).</li>
            <li>Communication records associated with discovery and service delivery.</li>
            <li>Basic analytics events (page views and interaction events) when analytics is enabled.</li>
            <li>Chat session metadata when users explicitly open and use StrataBot.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Cookies and local storage</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Theme preference is stored in local storage key <code>strataflow-theme</code>.</li>
            <li>Chat continuity may use the <code>ck_device</code> cookie to preserve session continuity.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Third-party processors</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Form handling provider used by the website contact form.</li>
            <li>OpenAI ChatKit for chatbot session orchestration when a visitor opts in to chat.</li>
            <li>Google Analytics 4 when <code>VITE_GA_MEASUREMENT_ID</code> is configured.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Retention and lawful basis</h2>
          <p className="mt-3">
            We retain data only for legitimate business purposes, contractual delivery, and legal obligations. Our lawful bases typically include
            legitimate interests and steps taken at your request before entering a contract.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Your rights and contact</h2>
          <p className="mt-3">
            For access, correction, deletion, or privacy questions, contact{' '}
            <a className="text-accent-600" href="mailto:hello@strataflowsystems.com">hello@strataflowsystems.com</a>.
          </p>
        </div>
      </div>
    </Section>
  </>
);

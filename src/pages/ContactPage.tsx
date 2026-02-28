import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

const CONTACT_FORM_ACTION = 'https://formsubmit.co/hello@strataflowsystems.com';

export const ContactPage = () => (
  <>
    <Seo {...seo.pages.contact} />
    <Section title="Contact" intro="Tell us about your operational workflow goals and we will follow up with a recommended next step.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Project inquiry form</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Submit this form to send your request directly to our team.
          </p>

          <form action={CONTACT_FORM_ACTION} method="POST" className="mt-4 grid gap-3">
            <input type="hidden" name="_subject" value="New Strataflow website inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <label className="grid gap-1 text-sm text-slate-700 dark:text-slate-300">
              Full name
              <input
                name="name"
                required
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
            </label>

            <label className="grid gap-1 text-sm text-slate-700 dark:text-slate-300">
              Work email
              <input
                name="email"
                type="email"
                required
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
            </label>

            <label className="grid gap-1 text-sm text-slate-700 dark:text-slate-300">
              Company
              <input
                name="company"
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
            </label>

            <label className="grid gap-1 text-sm text-slate-700 dark:text-slate-300">
              How can we help?
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
            </label>

            <button type="submit" className="rounded-md bg-accent-600 px-4 py-3 text-white hover:bg-accent-500">
              Submit inquiry
            </button>
          </form>
        </div>

        <aside className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Direct contact</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Email:{' '}
            <a href="mailto:hello@strataflowsystems.com" className="text-accent-600 hover:text-accent-500">
              hello@strataflowsystems.com
            </a>
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Calendar:{' '}
            <a
              href="mailto:hello@strataflowsystems.com?subject=Discovery%20Call%20Request"
              className="text-accent-600 hover:text-accent-500"
            >
              Request a discovery call
            </a>
          </p>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100">What happens next</h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              <li>We review your context and constraints.</li>
              <li>We schedule a 30-minute discovery session.</li>
              <li>You receive a concise recommendation and engagement options.</li>
            </ol>
          </div>
        </aside>
      </div>
    </Section>
  </>
);

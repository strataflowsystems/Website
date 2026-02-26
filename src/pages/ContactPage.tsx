import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const ContactPage = () => (
  <>
    <Seo {...seo.pages.contact} />
    <Section title="Contact" intro="Tell us about your operational workflow goals and we will follow up with a recommended next step.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-card">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsoft Form</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Preferred intake for enterprise teams.</p>
            <iframe
              title="Strataflow contact form"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=placeholder"
              className="mt-4 h-[560px] w-full rounded-lg border border-slate-200 dark:border-slate-800"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Fallback form</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Connect this action URL to Formspree (or your preferred endpoint) for static form handling.</p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-4 grid gap-3">
              <input name="name" required placeholder="Full name" className="rounded-md border border-slate-300 px-3 py-2 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200" />
              <input name="email" type="email" required placeholder="Work email" className="rounded-md border border-slate-300 px-3 py-2 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200" />
              <input name="company" placeholder="Company" className="rounded-md border border-slate-300 px-3 py-2 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200" />
              <textarea name="message" required placeholder="How can we help?" rows={5} className="rounded-md border border-slate-300 px-3 py-2 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200" />
              <button type="submit" className="rounded-md bg-accent-600 px-4 py-3 text-white hover:bg-accent-500">Submit inquiry</button>
            </form>
          </div>
        </div>

        <aside className="space-y-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Direct contact</h2>
          <p className="text-slate-600 dark:text-slate-400">Email: <a href="mailto:hello@strataflowsystems.com" className="text-accent-600 hover:text-accent-500">hello@strataflowsystems.com</a></p>
          <p className="text-slate-600 dark:text-slate-400">Calendar: <a href="#" className="text-accent-600 hover:text-accent-500">Book a discovery call</a></p>
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

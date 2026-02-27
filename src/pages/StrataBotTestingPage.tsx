import { FormEvent, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

const severityOptions = [
  'S1 Critical (blocks use / data risk)',
  'S2 High (major function broken)',
  'S3 Medium (workaround exists)',
  'S4 Low (minor / cosmetic)',
] as const;

const categoryOptions = [
  'Accuracy / Hallucination',
  'Tone / Brand voice',
  'Discovery flow / Questioning',
  'UX / Widget behaviour',
  'Performance / Latency',
  'Reliability / Errors',
  'Security / Privacy concern',
] as const;

export const StrataBotTestingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo {...seo.pages.strataBotTesting} />
      <Section
        title="StrataBot BUG LOG"
        intro="Submit issues directly here instead of Microsoft Forms."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 md:p-8">
          {submitted ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-900/80 dark:bg-emerald-950/40 dark:text-emerald-200">
              Thanks! Your bug log was captured on this page. Hook this form to your preferred endpoint to persist submissions.
            </div>
          ) : null}

          <form className="mt-2 grid gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-100">1. Name</label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <div>
              <label htmlFor="scenario" className="text-sm font-medium text-slate-900 dark:text-slate-100">2. Scenario or Task</label>
              <textarea
                id="scenario"
                name="scenario"
                required
                rows={4}
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <div>
              <label htmlFor="expectedVsActual" className="text-sm font-medium text-slate-900 dark:text-slate-100">3. Expected Vs Actual Result</label>
              <textarea
                id="expectedVsActual"
                name="expectedVsActual"
                required
                rows={5}
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-slate-900 dark:text-slate-100">4. Severity</legend>
              <div className="mt-2 grid gap-2">
                {severityOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <input type="radio" name="severity" value={option} required className="h-4 w-4" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium text-slate-900 dark:text-slate-100">5. Category</legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {categoryOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <input type="checkbox" name="category" value={option} className="h-4 w-4" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="improvementIdeas" className="text-sm font-medium text-slate-900 dark:text-slate-100">6. Improvement Ideas</label>
              <textarea
                id="improvementIdeas"
                name="improvementIdeas"
                rows={4}
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <button type="submit" className="inline-flex w-fit rounded-md bg-accent-600 px-5 py-3 font-medium text-white hover:bg-accent-500">
              Submit
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

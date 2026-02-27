import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

export const StrataBotTestingPage = () => (
  <>
    <Seo {...seo.pages.strataBotTesting} />
    <Section
      title="StrataBot Testing"
      intro="Use the embedded Microsoft Form below to submit StrataBot testing responses."
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-card dark:border-slate-800 dark:bg-[#0f1115] md:p-3">
        <iframe
          title="StrataBot testing form"
          width="640px"
          height="480px"
          src="https://forms.office.com/e/hwRJUe23bN?embed=true"
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          className="block w-full rounded-xl"
          style={{ border: 'none', minHeight: '80vh', maxHeight: '100vh' }}
          allowFullScreen
        />
      </div>
    </Section>
  </>
);

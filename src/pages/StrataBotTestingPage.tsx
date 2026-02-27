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
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-card dark:border-slate-800 dark:bg-slate-900 md:p-4">
        <iframe
          title="StrataBot testing form"
          width="640px"
          height="480px"
          src="https://forms.office.com/e/hwRJUe23bN?embed=true"
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          style={{ border: 'none', width: '100%', minHeight: '80vh', maxHeight: '100vh' }}
          allowFullScreen
        />
      </div>
    </Section>
  </>
);

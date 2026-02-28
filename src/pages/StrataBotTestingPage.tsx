import { useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}

const FORM_IFRAME_ID = 'JotFormIFrame-260574742190054';
const EMBED_HANDLER_SCRIPT_ID = 'form-embed-handler-script';
const EMBED_HANDLER_SCRIPT_SRC = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';

export const StrataBotTestingPage = () => {
  useEffect(() => {
    const selector = `iframe[id='${FORM_IFRAME_ID}']`;
    const initializeEmbed = () => {
      window.jotformEmbedHandler?.(selector, 'https://form.jotform.com/');
    };

    const existingScript = document.getElementById(EMBED_HANDLER_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      initializeEmbed();
      return;
    }

    const script = document.createElement('script');
    script.id = EMBED_HANDLER_SCRIPT_ID;
    script.src = EMBED_HANDLER_SCRIPT_SRC;
    script.async = true;
    script.onload = initializeEmbed;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Seo {...seo.pages.strataBotTesting} noindex />
      <Section title="StrataBot BUG LOG" headingLevel={1} intro="Use the form below to submit bot testing feedback.">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-card dark:border-slate-800 dark:bg-slate-900 md:p-3">
          <iframe
            id={FORM_IFRAME_ID}
            title="StrataBot testing form"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/260574742190054"
            frameBorder="0"
            style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
            scrolling="no"
          />
        </div>
      </Section>
    </>
  );
};

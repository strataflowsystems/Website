import { Link } from 'react-router-dom';
import { Seo } from '@/components/ui/Seo';
import { Section } from '@/components/ui/Section';

export const NotFoundPage = () => (
  <>
    <Seo title="Page Not Found | Strataflow Systems" description="The page you requested could not be found." path="/404" noindex />
    <Section title="Page not found" intro="The URL you entered does not match an available page.">
      <p className="text-slate-600 dark:text-slate-400">
        Return to the <Link to="/" className="text-accent-600 hover:text-accent-500">homepage</Link> or use the main navigation to continue.
      </p>
    </Section>
  </>
);

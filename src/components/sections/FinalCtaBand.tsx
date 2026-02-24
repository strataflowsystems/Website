import { site } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const FinalCtaBand = () => (
  <Section className="pt-8">
    <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-card">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Ready to make operations easier to run—and easier to prove?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Start with a focused discovery call and get a practical path to automation, evidence readiness, and governance alignment.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
        <Button href="/services" variant="secondary">Explore Services</Button>
      </div>
    </div>
  </Section>
);

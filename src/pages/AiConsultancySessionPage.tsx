import { StrataBotChat } from '@/components/chatkit/StrataBotChat';
import { Section } from '@/components/ui/Section';
import { Seo } from '@/components/ui/Seo';
import { seo } from '@/content/site';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

export const AiConsultancySessionPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <Seo {...seo.pages.aiConsultancySession} />
      <Section
        title="AI Consultancy Session"
        intro="Use the full-page StrataBot assistant below for guided consultancy and planning."
        className="py-8"
      >
        <div
          className={cn(
            'flex h-[calc(100vh-17rem)] min-h-[640px] flex-col overflow-hidden rounded-2xl shadow-card',
            theme === 'dark' ? 'border border-slate-800 bg-[#1a1d23]' : 'border border-slate-200 bg-white',
          )}
        >
          <div
            className={cn(
              'px-4 py-3 text-sm font-semibold',
              theme === 'dark' ? 'border-b border-slate-800 text-slate-100' : 'border-b border-slate-200 text-slate-700',
            )}
          >
            StrataBot — Full Session
          </div>
          <StrataBotChat className="min-h-0 flex-1 w-full max-w-full" />
        </div>
      </Section>
    </>
  );
};

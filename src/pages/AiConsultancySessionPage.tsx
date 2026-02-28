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
            'relative isolate flex h-[calc(100vh-17rem)] min-h-[640px] flex-col overflow-hidden rounded-2xl shadow-2xl ring-1',
            theme === 'dark'
              ? 'border border-slate-700/80 bg-[#0f1115] ring-cyan-500/30'
              : 'border border-slate-200 bg-slate-50 ring-cyan-300/60',
          )}
        >
          <div
            aria-hidden
            className={cn(
              'chat-globe-pattern pointer-events-none absolute inset-0'
            )}
          />
          <div
            className={cn(
              'relative z-10 flex items-center justify-between border-b px-4 py-3 text-sm font-semibold backdrop-blur-sm',
              theme === 'dark' ? 'border-slate-700/80 text-slate-100' : 'border-slate-200 text-slate-700',
            )}
          >
            <span>StrataBot — Full Session</span>
            <span
              className={cn(
                'rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]',
                theme === 'dark' ? 'border-cyan-400/40 text-cyan-200' : 'border-cyan-500/40 text-cyan-700',
              )}
            >
              Premium Workspace
            </span>
          </div>
          <div className="relative z-10 min-h-0 flex-1">
            <StrataBotChat className="min-h-0 h-full w-full max-w-full bg-transparent" />
          </div>
        </div>
      </Section>
    </>
  );
};

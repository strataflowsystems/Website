import { useEffect, useState } from 'react';
import { StrataBotChat } from '@/components/chatkit/StrataBotChat';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)';
const STRATABOT_AVATAR_URL = 'https://strataflowsystems.com/Stratabot%20Full.PNG';

const getDefaultMinimizedState = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return !window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
};

export function ChatWidget() {
  const { theme } = useTheme();
  const [isMinimized, setIsMinimized] = useState(getDefaultMinimizedState);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const handleMediaQueryChange = () => {
      setIsMinimized(!mediaQuery.matches);
    };

    handleMediaQueryChange();
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <button
        type="button"
        aria-expanded={!isMinimized}
        aria-controls="stratabot-chat-panel"
        onClick={() => setIsMinimized((prev) => !prev)}
        className={cn(
          'inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm font-semibold shadow-xl ring-1 transition',
          theme === 'dark'
            ? 'border border-cyan-400/30 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/70 text-slate-100 ring-cyan-400/30 hover:border-cyan-300/50 hover:from-slate-800 hover:to-cyan-900/70'
            : 'border border-cyan-300/60 bg-gradient-to-r from-white via-white to-cyan-50 text-slate-700 ring-cyan-200/70 hover:border-cyan-400/60 hover:to-cyan-100',
        )}
      >
        <img src={STRATABOT_AVATAR_URL} alt="StrataBot profile" className="h-7 w-7 rounded-full object-cover" />
        <span>{isMinimized ? 'Open StrataBot' : 'Minimize StrataBot'}</span>
      </button>

      {!isMinimized ? (
        <div
          id="stratabot-chat-panel"
          className={cn(
            'relative isolate flex h-[560px] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl shadow-2xl ring-1',
            theme === 'dark'
              ? 'border border-slate-700/80 bg-[#0f1115] ring-cyan-500/30'
              : 'border border-slate-200 bg-slate-50 ring-cyan-300/60',
          )}
        >
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0',
              theme === 'dark'
                ? 'bg-[radial-gradient(circle_at_90%_-10%,rgba(34,211,238,0.22),transparent_38%),linear-gradient(135deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[length:auto,20px_20px]'
                : 'bg-[radial-gradient(circle_at_90%_-10%,rgba(14,165,233,0.18),transparent_35%),linear-gradient(135deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[length:auto,20px_20px]',
            )}
          />
          <div
            className={cn(
              'relative z-10 flex items-center justify-between border-b px-4 py-3 text-sm font-semibold backdrop-blur-sm',
              theme === 'dark' ? 'border-slate-700/80 text-slate-100' : 'border-slate-200 text-slate-700',
            )}
          >
            <span>StrataBot</span>
            <span
              className={cn(
                'rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]',
                theme === 'dark' ? 'border-cyan-400/40 text-cyan-200' : 'border-cyan-500/40 text-cyan-700',
              )}
            >
              Strata Intelligence
            </span>
          </div>
          <div className="relative z-10 min-h-0 flex-1">
            <StrataBotChat className="min-h-0 h-full w-full max-w-full bg-transparent" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
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

  const { control } = useChatKit({
    api: {
      async getClientSecret(_existing) {
        const res = await fetch('/api/chatkit/session', { method: 'POST' });

        if (!res.ok) {
          const errorBody = await res.text();
          throw new Error(`Unable to create ChatKit session (${res.status}): ${errorBody}`);
        }

        const { client_secret } = await res.json();

        if (!client_secret) {
          throw new Error('ChatKit session response did not include client_secret.');
        }

        return client_secret;
      },
    },
    theme,
  });

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
          'inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm font-semibold shadow-xl transition',
          theme === 'dark'
            ? 'border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800'
            : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100',
        )}
      >
        <img src={STRATABOT_AVATAR_URL} alt="StrataBot profile" className="h-7 w-7 rounded-full object-cover" />
        <span>{isMinimized ? 'Open StrataBot' : 'Minimize StrataBot'}</span>
      </button>

      {!isMinimized ? (
        <div
          id="stratabot-chat-panel"
          className={cn(
            'flex h-[560px] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl shadow-xl',
            theme === 'dark' ? 'border border-slate-800 bg-[#1a1d23]' : 'border border-slate-200 bg-white',
          )}
        >
          <div
            className={cn(
              'px-4 py-3 text-sm font-semibold',
              theme === 'dark' ? 'border-b border-slate-800 text-slate-100' : 'border-b border-slate-200 text-slate-700',
            )}
          >
            StrataBot
          </div>
          <ChatKit control={control} className="min-h-0 flex-1 w-full max-w-full" />
        </div>
      ) : null}
    </div>
  );
}

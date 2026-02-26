import { useEffect, useState } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)';

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
        const { client_secret } = await res.json();
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
        aria-controls="chat-widget-panel"
        onClick={() => setIsMinimized((prev) => !prev)}
        className={cn(
          'inline-flex h-12 items-center rounded-full px-4 text-sm font-semibold shadow-xl transition',
          theme === 'dark'
            ? 'border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800'
            : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100',
        )}
      >
        {isMinimized ? 'Open AI chat' : 'Minimize AI chat'}
      </button>

      {!isMinimized ? (
        <div
          id="chat-widget-panel"
          className={cn(
            'h-[560px] w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl shadow-xl',
            theme === 'dark' ? 'border border-slate-800 bg-[#1a1d23]' : 'border border-slate-200 bg-white',
          )}
        >
          <ChatKit control={control} className="h-full w-full" />
        </div>
      ) : null}
    </div>
  );
}

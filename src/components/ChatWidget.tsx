import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

export function ChatWidget() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div
          id="stratabot-chat-panel"
          className={cn(
            'mb-3 h-[560px] w-[360px] overflow-hidden rounded-2xl shadow-xl',
            theme === 'dark' ? 'border border-slate-800 bg-[#1a1d23]' : 'border border-slate-200 bg-white',
          )}
        >
          <ChatKit control={control} className="h-full w-full" />
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          'inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold shadow-xl transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          theme === 'dark'
            ? 'border border-slate-700 bg-slate-900 text-slate-100 focus-visible:ring-slate-300 focus-visible:ring-offset-slate-950'
            : 'border border-slate-200 bg-white text-slate-900 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-50',
        )}
        aria-expanded={isOpen}
        aria-controls="stratabot-chat-panel"
      >
        <img
          src="/Stratabot%20Full.PNG"
          alt="Stratabot"
          className="h-8 w-8 rounded-full object-cover"
          loading="lazy"
          width={32}
          height={32}
        />
        <span>Talk to Stratabot.</span>
      </button>
    </div>
  );
}

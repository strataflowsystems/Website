import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

export function ChatWidget() {
  const { theme } = useTheme();
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
      <div
        className={cn(
          'h-[560px] w-[360px] overflow-hidden rounded-2xl shadow-xl',
          theme === 'dark' ? 'border border-slate-800 bg-[#1a1d23]' : 'border border-slate-200 bg-white',
        )}
      >
        <ChatKit control={control} className="h-full w-full" />
      </div>
    </div>
  );
}

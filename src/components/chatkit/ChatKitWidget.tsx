import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';
import { getChatKitTheme } from '@/components/chatkit/chatTheme';
import { getChatKitClientSecret } from '@/lib/chatkit';

export const ChatKitWidget = () => {
  const { theme } = useTheme();
  const chatTheme = getChatKitTheme(theme);

  const chatKit = useChatKit({
    api: {
      getClientSecret: getChatKitClientSecret,
    },
    theme: chatTheme,
    onError: (event) => {
      console.error('Unable to mount ChatKit widget.', event);
    },
  });

  return (
    <div
      className={cn(
        'relative isolate min-h-96 overflow-hidden rounded-xl shadow-card ring-1',
        theme === 'dark'
          ? 'border border-slate-700/80 bg-[#0f1115] ring-cyan-500/25'
          : 'border border-slate-200 bg-slate-50 ring-cyan-300/60',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'chat-globe-pattern pointer-events-none absolute inset-0 opacity-90 dark:opacity-95'
        )}
      />
      <ChatKit
        control={chatKit.control}
        className={cn(
          'relative z-10 block min-h-96 rounded-xl bg-transparent p-4',
          theme === 'dark' ? 'text-slate-100' : 'text-slate-900',
        )}
      />
    </div>
  );
};

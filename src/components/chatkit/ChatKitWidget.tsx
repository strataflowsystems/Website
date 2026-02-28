import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

const getClientSecret = async (currentClientSecret: string | null): Promise<string> => {
  const response = await fetch('/api/chatkit/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentClientSecret }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const { client_secret } = (await response.json()) as { client_secret?: string };

  if (!client_secret) {
    throw new Error('ChatKit session response did not include client_secret.');
  }

  return client_secret;
};

export const ChatKitWidget = () => {
  const { theme } = useTheme();
  const chatTheme = {
    colorScheme: theme,
    color: {
      surface: {
        background: theme === 'dark' ? '#0f1115' : '#f8fafc',
        foreground: theme === 'dark' ? '#f1f5f9' : '#0f172a',
      },
    },
  } as const;

  const chatKit = useChatKit({
    api: {
      getClientSecret,
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

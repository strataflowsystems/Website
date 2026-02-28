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
  const chatKit = useChatKit({
    api: {
      getClientSecret,
    },
    theme,
    onError: (event) => {
      console.error('Unable to mount ChatKit widget.', event);
    },
  });

  return (
    <ChatKit
      control={chatKit.control}
      className={cn(
        'block min-h-96 rounded-xl p-4 shadow-card',
        theme === 'dark' ? 'border border-slate-800 bg-[#1a1d23]' : 'border border-slate-200 bg-white',
      )}
    />
  );
};

import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';
import { getChatKitTheme } from '@/components/chatkit/chatTheme';
import { cn } from '@/lib/cn';

type StrataBotChatProps = {
  className?: string;
};

export const StrataBotChat = ({ className }: StrataBotChatProps) => {
  const { theme } = useTheme();
  const chatTheme = getChatKitTheme(theme);

  const { control } = useChatKit({
    api: {
      async getClientSecret(currentClientSecret) {
        const res = await fetch('/api/chatkit/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ currentClientSecret }),
        });

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
    theme: chatTheme,
  });

  return <ChatKit control={control} className={cn('stratabot-chatkit', className)} />;
};

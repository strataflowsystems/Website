import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';

type StrataBotChatProps = {
  className?: string;
};

export const StrataBotChat = ({ className }: StrataBotChatProps) => {
  const { theme } = useTheme();

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

  return <ChatKit control={control} className={className} />;
};

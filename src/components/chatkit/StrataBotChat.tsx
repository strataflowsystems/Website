import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from '@/hooks/useTheme';
import { getChatKitTheme } from '@/components/chatkit/chatTheme';
import { cn } from '@/lib/cn';
import { getChatKitClientSecret } from '@/lib/chatkit';

type StrataBotChatProps = {
  className?: string;
};

export const StrataBotChat = ({ className }: StrataBotChatProps) => {
  const { theme } = useTheme();
  const chatTheme = getChatKitTheme(theme);

  const { control } = useChatKit({
    api: {
      getClientSecret: getChatKitClientSecret,
    },
    theme: chatTheme,
  });

  return <ChatKit control={control} className={cn('stratabot-chatkit', className)} />;
};

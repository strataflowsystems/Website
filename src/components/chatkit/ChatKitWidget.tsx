import { ChatKit, useChatKit } from '@openai/chatkit-react';

const getClientSecret = async (_currentClientSecret: string | null): Promise<string> => {
  const response = await fetch('/api/chatkit/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
  const chatKit = useChatKit({
    api: {
      getClientSecret,
    },
    onError: (event) => {
      console.error('Unable to mount ChatKit widget.', event);
    },
  });

  return <ChatKit control={chatKit.control} className="block min-h-96 rounded-xl border border-slate-200 bg-white p-4 shadow-card" />;
};

import { ChatKit, useChatKit } from '@openai/chatkit-react';

const getClientSecret = async (_currentClientSecret: string | null): Promise<string> => {
  const response = await fetch('/api/chatkit/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{}',
    cache: 'no-store',
  });

  const raw = await response.text();

  let payload: { client_secret?: string; error?: unknown; message?: string } = {};
  try {
    payload = JSON.parse(raw) as { client_secret?: string; error?: unknown; message?: string };
  } catch {
    payload = { message: raw };
  }

  if (!response.ok) {
    throw new Error(
      `Unable to create ChatKit session (${response.status}): ${payload.message ?? JSON.stringify(payload.error ?? payload)}`,
    );
  }

  if (!payload.client_secret || typeof payload.client_secret !== 'string') {
    throw new Error('ChatKit session response did not include a valid client_secret.');
  }

  return payload.client_secret;
};

export const ChatKitWidget = () => {
  const chatKit = useChatKit({
    api: {
      getClientSecret,
    },
    onError: (event: unknown) => {
      console.error('Unable to mount ChatKit widget.', event);
    },
  });

  return <ChatKit control={chatKit.control} className="block min-h-96 rounded-xl border border-slate-200 bg-white p-4 shadow-card" />;
};

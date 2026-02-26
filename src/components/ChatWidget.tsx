import { ChatKit, useChatKit } from '@openai/chatkit-react';

export function ChatWidget() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(_existing: string | null) {
        const res = await fetch('/api/chatkit/session', { method: 'POST' });
        const raw = await res.text();

        let payload: { client_secret?: string; error?: unknown; message?: string } = {};
        try {
          payload = JSON.parse(raw) as { client_secret?: string; error?: unknown; message?: string };
        } catch {
          payload = { message: raw };
        }

        if (!res.ok) {
          throw new Error(`Unable to create ChatKit session (${res.status}): ${payload.message ?? JSON.stringify(payload.error ?? payload)}`);
        }

        const { client_secret } = payload;

        if (!client_secret || typeof client_secret !== 'string') {
          throw new Error('ChatKit session response did not include a valid client_secret.');
        }

        return client_secret;
      },
    },
    onError: (event: unknown) => {
      console.error('Unable to mount ChatKit widget.', event);
    },
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="h-[560px] w-[360px] overflow-hidden rounded-2xl bg-white shadow-xl">
        <ChatKit control={control} className="h-full w-full" />
      </div>
    </div>
  );
}

import { ChatKit, useChatKit } from '@openai/chatkit-react';

export function ChatWidget() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        const res = await fetch('/api/chatkit/session', { method: 'POST' });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
    theme: 'dark',
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="h-[560px] w-[360px] overflow-hidden rounded-2xl border border-slate-800 bg-[#1a1d23] shadow-xl">
        <ChatKit control={control} className="h-full w-full" />
      </div>
    </div>
  );
}

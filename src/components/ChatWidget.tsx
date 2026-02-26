import { MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsOpen(false);
    }
  }, []);

  const { control } = useChatKit({
    api: {
      async getClientSecret() {
        const res = await fetch('/api/chatkit/session', { method: 'POST' });
        const { client_secret } = (await res.json()) as { client_secret: string };
        return client_secret;
      },
    },
  });

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="relative h-[70vh] w-[calc(100vw-2rem)] max-h-[560px] max-w-[360px] overflow-hidden rounded-2xl bg-white shadow-xl sm:h-[560px] sm:w-[360px]">
          <button
            type="button"
            aria-label="Minimize chat"
            className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition hover:bg-slate-200"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </button>
          <ChatKit control={control} className="h-full w-full" />
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? 'Hide chat widget' : 'Open chat widget'}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-600 px-4 text-sm font-medium text-white shadow-lg transition hover:bg-accent-700"
        onClick={() => setIsOpen((value) => !value)}
      >
        <MessageCircle size={18} />
        {isOpen ? 'Hide chat' : 'Chat with Stratabot'}
      </button>
    </div>
  );
}

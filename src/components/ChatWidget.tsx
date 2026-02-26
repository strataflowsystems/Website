import { ChatKit, useChatKit } from "@openai/chatkit-react";

export function ChatWidget() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        // If you want: return existing if still valid; ChatKit will call again on expiry
        const res = await fetch("/api/chatkit/session", { method: "POST" });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="h-[560px] w-[360px] rounded-2xl shadow-xl overflow-hidden bg-white">
        <ChatKit control={control} className="h-full w-full" />
      </div>
    </div>
  );
}

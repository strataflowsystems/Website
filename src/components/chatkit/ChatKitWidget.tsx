import { useEffect } from 'react';
import { mountChatKit } from '@/scripts/chatkit';

export const ChatKitWidget = () => {
  useEffect(() => {
    void mountChatKit('#chatkit').catch((error: unknown) => {
      console.error('Unable to mount ChatKit widget.', error);
    });
  }, []);

  return <div id="chatkit" className="min-h-96 rounded-xl border border-slate-200 bg-white p-4 shadow-card" />;
};

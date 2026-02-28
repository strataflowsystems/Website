import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ChatWidget } from '@/components/ChatWidget';

const CHAT_WIDGET_HIDDEN_ROUTES = ['/contact'];

export const PageLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const shouldShowChatWidget = !CHAT_WIDGET_HIDDEN_ROUTES.includes(pathname);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <AnnouncementBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      {shouldShowChatWidget ? <ChatWidget /> : null}
    </div>
  );
};

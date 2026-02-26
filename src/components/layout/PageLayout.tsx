import type { ReactNode } from 'react';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ChatWidget } from '@/components/ChatWidget';

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-slate-50 dark:bg-[#0f1115] pattern-bg bg-grid">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:dark:bg-slate-900 focus:px-3 focus:py-2"
    >
      Skip to content
    </a>
    <AnnouncementBanner />
    <Header />
    <main id="main-content">{children}</main>
    <ChatWidget />
    <Footer />
  </div>
);

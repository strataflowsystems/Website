export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

export const initAnalytics = () => {
  if (!analyticsEnabled || typeof window === 'undefined') {
    return;
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
};

export const trackPageView = (path: string) => {
  if (!analyticsEnabled || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
  if (!analyticsEnabled || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, params);
};

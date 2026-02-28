import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID, analyticsEnabled, initAnalytics, trackPageView } from '@/lib/analytics';

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!analyticsEnabled) {
      return;
    }

    const scriptTag = document.createElement('script');
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    scriptTag.async = true;
    document.head.appendChild(scriptTag);

    initAnalytics();

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
};

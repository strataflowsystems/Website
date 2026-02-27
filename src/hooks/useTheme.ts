import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'strataflow-theme';
const THEME_EVENT = 'strataflow-theme-change';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (isTheme(savedTheme)) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: theme }));
  }, [theme]);

  useEffect(() => {
    const onThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<Theme>;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      }
    };

    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY && isTheme(event.newValue)) {
        setTheme(event.newValue);
      }
    };

    window.addEventListener(THEME_EVENT, onThemeChange);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener(THEME_EVENT, onThemeChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return {
    theme,
    setTheme,
    setLightTheme: () => setTheme('light'),
    toggleTheme: () => setTheme((value) => (value === 'dark' ? 'light' : 'dark')),
  };
};

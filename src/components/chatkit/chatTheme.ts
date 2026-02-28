import type { ThemeOption } from '@openai/chatkit';

export type AppTheme = 'light' | 'dark';

export const getChatKitTheme = (theme: AppTheme): ThemeOption => ({
  colorScheme: theme,
  radius: 'round',
  color: {
    accent: {
      primary: theme === 'dark' ? '#38bdf8' : '#0284c7',
      level: 2,
    },
    grayscale: theme === 'dark' ? { hue: 214, tint: 8, shade: 2 } : { hue: 210, tint: 1, shade: -1 },
    surface: {
      background: theme === 'dark' ? '#0b1220' : '#eef6ff',
      foreground: theme === 'dark' ? '#dbeafe' : '#0f172a',
    },
  },
});

import type { ThemeOption } from '@openai/chatkit';

export type AppTheme = 'light' | 'dark';

export const getChatKitTheme = (theme: AppTheme): ThemeOption => ({
  colorScheme: theme,
  radius: 'round',
  color: {
    accent: {
      // Match app primary button (bg-accent-600 / hover-accent-500)
      primary: '#1664ab',
      level: 2,
    },
    grayscale: theme === 'dark' ? { hue: 214, tint: 9, shade: 4 } : { hue: 210, tint: 1, shade: -2 },
  },
});

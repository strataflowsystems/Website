import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#06111f',
        },
        accent: {
          50: '#edf8ff',
          500: '#1f78c8',
          600: '#1664ab',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(10, 32, 62, 0.08)',
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(16, 61, 97, 0.09) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
} satisfies Config;

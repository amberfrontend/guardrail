import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/aggregates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/structures/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: { 100: '#ecd6dc', 800: '#ab1239', 900: '#870022' },
        primary: {
          300: '#a1b7d9',
          400: '#7b92b5',
          500: '#4c76bd',
          600: '#375d9e',
        },
        neutral: {
          300: '#8B95A2',
        },
        transparent: 'transparent',
        white: '#ffffff',
      },
      fontFamily: {
        logo: ['Be Vietnam Pro', 'sans-serif'],
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
} satisfies Config;

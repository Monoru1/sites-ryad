import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        noir: '#060606',
        ink: '#111111',
        parchment: '#F2EDE4',
        gold: '#C8A96E',
        line: 'rgba(255,255,255,0.08)'
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace']
      },
      letterSpacing: {
        editorial: '0.18em'
      }
    }
  },
  plugins: []
};

export default config;

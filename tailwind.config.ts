import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        noir: '#060606',
        ink: '#111111',
        parchment: '#F2EDE4',
        gold: '#C8A96E',
        imperial: '#8d1d2c'
      }
    }
  },
  plugins: []
};

export default config;

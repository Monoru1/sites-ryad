import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        noir: "#060606",
        charcoal: "#111111",
        ivory: "#F2EDE4",
        gold: "#C8A96E",
        line: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        luxe: "0 18px 50px rgba(0,0,0,0.45)"
      },
      letterSpacing: {
        editorial: "0.18em"
      }
    }
  },
  plugins: []
};

export default config;

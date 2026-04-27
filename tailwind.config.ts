import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "hsl(var(--brand-blue))",
        "brand-deep": "hsl(var(--brand-deep))",
        "brand-gold": "hsl(var(--brand-gold))",
        "bg-light": "#ffffff",
        "bg-dark": "#0a0b14",
        "text-light": "#0a0a14",
        "text-dark": "#f0f0f0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shimmer": {
          from: { transform: "translateX(-150%)" },
          to: { transform: "translateX(150%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

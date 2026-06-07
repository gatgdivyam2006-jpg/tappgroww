import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        emerald: "#10B981",
        ink: "#1E293B",
        mist: "#F8FAFC"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.08)",
        lift: "0 18px 48px rgba(15, 23, 42, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;

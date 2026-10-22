import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F05A22",
          orangeLight: "#FF6F3C",
          orangeLighter: "#FFA26B",
          orangeDark: "#D6450F",
          orangeSoft: "rgba(240, 90, 34, 0.08)",
          orangeSoftHover: "rgba(240, 90, 34, 0.15)",
          orangeBorder: "rgba(240, 90, 34, 0.3)",
          orangeRing: "#FDBA74",
          // Sleek Titanium Obsidian & Silver Gray palette (no blue tint)
          dark: "#0B0E14",
          darker: "#07090E",
          card: "#12161F",
          cardDark: "#0E1118",
          cardHover: "#181D28",
          topbar: "#0B0E14",
          surfaceLight: "#FFFFFF",
          surfaceLightMuted: "#F8FAFC",
          surfaceLightSubtle: "#F1F5F9",
          textDark: "#0F172A",
          textMuted: "#64748B",
          border: "#E2E8F0",
          borderDark: "rgba(226, 232, 240, 0.1)",
          borderSilver: "rgba(203, 213, 225, 0.2)",
          silver: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E2430",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "float": "float 5s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

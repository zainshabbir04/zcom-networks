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
          orangeLight: "#FF7A38",
          orangeLighter: "#FFA26B",
          orangeSoft: "#FFF7ED",
          orangeSoftHover: "#FFEDD5",
          orangeBorder: "#FED7AA",
          orangeRing: "#FDBA74",
          dark: "#0E1019",
          darker: "#0B0D14",
          card: "#181C28",
          cardDark: "#13161F",
          topbar: "#12141C",
          surfaceLight: "#FFFFFF",
          surfaceLightMuted: "#F8FAFC",
          surfaceLightSubtle: "#F1F5F9",
          textDark: "#0F172A",
          textMuted: "#64748B",
          border: "#E2E8F0",
          borderDark: "rgba(255,255,255,0.08)",
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

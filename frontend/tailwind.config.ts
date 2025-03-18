import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A4DE7",
          dark: "#3236B0",
          light: "#7B7FF8",
          50: "#F5F6FE",
          100: "#EBEEFE",
          200: "#D6D8FC",
          300: "#C2C4FB",
          400: "#ADB0F9",
          500: "#4A4DE7",
          600: "#3B3EB9",
          700: "#2C2E8B",
          800: "#1E1F5C",
          900: "#0F0F2E"
        },
        accent: {
          DEFAULT: "#2DD2C0",
          dark: "#1FA195",
          light: "#65F0E0",
          50: "#F2FCFB",
          100: "#E5F9F7",
          200: "#CCF4EF",
          300: "#B2EEE7",
          400: "#99E9DF",
          500: "#2DD2C0",
          600: "#24A89A",
          700: "#1B7E73",
          800: "#12544D",
          900: "#092A26"
        },
        dark: {
          DEFAULT: "#121214",
          50: "#F5F5F6",
          100: "#EBEBED",
          200: "#D6D6DB",
          300: "#C2C2C9",
          400: "#6C6C7C",
          500: "#4D4D59",
          600: "#2D2D36",
          700: "#1E1E24",
          800: "#121214",
          900: "#0A0A0C"
        },
        light: {
          DEFAULT: "#F5F5FA",
          50: "#FFFFFF",
          100: "#F5F5FA",
          200: "#E8E8F0",
          300: "#D1D1E1",
          400: "#9A9AAD",
          500: "#7A7A8C",
          600: "#5A5A6B",
          700: "#3A3A4A",
          800: "#1A1A29",
          900: "#0D0D14"
        },
        success: "#32D583",
        warning: "#FFC043",
        error: "#F04A62",
        info: "#52A9FF",
        border: "#2D2D36",
        background: "#121214",
        foreground: "#F5F5FA"
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "slide-in": "slide-in 0.5s ease-in-out",
        "slide-out": "slide-out 0.5s ease-in-out"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      boxShadow: {
        "inner-sm": "inset 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        "inner-md": "inset 0 4px 6px -1px rgb(0 0 0 / 0.1)",
        "inner-lg": "inset 0 10px 15px -3px rgb(0 0 0 / 0.1)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;

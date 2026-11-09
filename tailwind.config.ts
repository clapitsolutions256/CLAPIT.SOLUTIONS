/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  // Class-based so the site renders the same light design regardless of the
  // visitor's OS theme (media-based dark mode was flipping the header dark).
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-clip-path"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand
        primary: "#FFFFFF",
        secondary: "#DB1A1A",
        brand: {
          50: "#FEF2F2",
          100: "#FDE3E3",
          200: "#FACBCB",
          500: "#DB1A1A",
          600: "#C11515",
          700: "#9F1212",
        },
        ink: {
          DEFAULT: "#0E0E10",
          900: "#0E0E10",
          800: "#18181B",
          700: "#27272A",
        },
        // Legacy tokens kept for existing pages
        background: "#F7F7F8",
        dark: "#161616",
        light: "#E4E4E7",
        medium: "#71717A",
        darkMedium: "#52525B",
        lightMedium: "#F85C1E",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,16,20,0.04), 0 4px 16px rgba(16,16,20,0.06)",
        "card-hover":
          "0 2px 4px rgba(16,16,20,0.05), 0 12px 32px rgba(16,16,20,0.10)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      clipPath: {
        "custom-cut":
          "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
      },
    },
  },
} satisfies Config;

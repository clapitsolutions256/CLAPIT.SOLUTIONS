import { DM_Sans, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

// Headings: geometric, technical character. Body: highly readable sans.
export const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Original brand font, still used by the navbar and footer
export const futura = localFont({
  src: [{ path: "../styles/fonts/futura/Futura Book font.ttf", weight: "400", style: "normal" }],
  variable: "--font-futura",
  display: "swap",
  preload: false,
  fallback: ["Arial", "sans-serif"],
});

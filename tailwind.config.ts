import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll-negative": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 2px))" },
        },
        "infinite-scroll-positive": {
          "100%": { transform: "translateX(0)" },
          "0%": { transform: "translateX(calc(-50% - 2px))" },
        },
      },
      animation: {
        "infinate-scroll-negative":
          "infinite-scroll-negative 10s linear infinite",
        "infinate-scroll-positive":
          "infinite-scroll-positive 10s linear infinite",
      },
      colors: {
        vastsea: {
          black: "#000405",
          white: "#EBECEE",
          purple: "#B90DBD",
          green: "#44DF6A",
          cyan: "#01FFFB",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

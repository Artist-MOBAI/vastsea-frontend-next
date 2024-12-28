import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vastsea: {
          black: "#000405",
          white: "#EBECEE",
          purple: "#B90DBD",
          green: "#44DF6A",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

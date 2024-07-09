import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["var(--font-titillium)", "sans-serif"],
        redHat: ["var(--font-redHat)", "sans-serif"],
      },
      transitionDuration: {
        "350": "350ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;

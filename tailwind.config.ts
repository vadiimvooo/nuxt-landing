import type { Config } from "tailwindcss";

export default {
  content: [
    "./*.{vue,js,ts,jsx,tsx}",
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

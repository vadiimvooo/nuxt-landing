import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./*.{vue,js,ts,jsx,tsx}",
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "mob": { min: '480px'},
      "sm": { min: "640px" },
      "md": { min: "768px" },
      "lg": { min: "1024px" },
      "xl": { min: "1280px" },
      "2xl": { min: "1440px" },
    },
    extend: {
      colors: {
        "gray-primary": "#D9D9D9",
        "link-active": "#FF0000",
      },
      backgroundColor: {
        "gray-primary": "#D9D9D9",
        "red-primary": "#FF0000",
        "gray-secondary": "#EEEEEE"
      },
      fontFamily: {
        sans: [
          '"Inter", sans-serif'
          , '"Montserrat" sans',
          ...defaultTheme.fontFamily.sans
        ],
      }
    },
  },
  plugins: [],
} satisfies Config;

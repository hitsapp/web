import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      luckiestGuy: "Luckiest Guy, cursive",
    },
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#2a2a2a",
        lightGray: "#a6a6a6",
        gold: "#FFD700",
        silver: "#C0C0C0",
        bronze: "#CD7F32",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        bg:"#F6F9FE",
        foreground: "var(--foreground)",
        violete: "#372865",
        text: "#7c7c7c",
        hometext :"#353252"
      },
    },
  },
  plugins: [],
};
export default config;

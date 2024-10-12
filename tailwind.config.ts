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
        'tantra': '#BE163F',
        'tantra-light': '#F299B0',
        'tantra-dark': '#2A1820',
        'dourado': '#CBA148',
        'dourado-hover': '#D3B34B',
      },
    },
  },
  plugins: [],
};
export default config;

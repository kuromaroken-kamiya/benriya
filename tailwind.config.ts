import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        charcoal: "#141414",
        "charcoal-light": "#1E1E1E",
        gold: "#C9A96E",
        "gold-light": "#E2C896",
        "gold-dark": "#9A7A45",
        cream: "#F5F0E8",
        "cream-dark": "#E8E0D0",
        mist: "#8A8A8A",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Montserrat'", "system-ui", "sans-serif"],
        mono: ["'Courier Prime'", "monospace"],
      },
      letterSpacing: {
        widest: "0.3em",
        wider: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;

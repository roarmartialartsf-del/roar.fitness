import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0C0D10",
        "bg-2": "#101114",
        surface: "#17181B",
        "surface-2": "#1E1F23",
        line: "#2A2B2F",
        "line-soft": "#1F2024",
        bone: "#F5F3EF",
        muted: "#A39C92",
        dim: "#706A63",
        red: "#B3231F",
        "red-bright": "#D6362F",
        gold: "#C9A24B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;

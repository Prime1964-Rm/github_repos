import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'border-rotate': {
          '0%': { '--border-angle': '0turn' },
          '100%': { '--border-angle': '1turn' },
        },
      },
      animation: {
        'border-rotate': 'border-rotate 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

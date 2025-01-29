import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme"); // Tailwind CSS의 기본 값들을 덮어쓰지 않고 추가하거나 수정할 때 사용

export default {
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
      fontFamily: {
        SCDream4: ["SCDream4", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

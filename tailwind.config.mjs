/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-green": "#1C5E20",
        "custom-gold": "#E59434",
        "custom-darkgold": "#7F521D",
        "custom-darkgreen": "#00292A",
        "custom-light-gray": "#F1F1F1",
        "custom-gray": "#888888",
        "custom-yellow": "#FFCD91",
        "custom-black": "#222222",
      },
      boxShadow: {
        "custom-light": "0px 0px 10px 2px rgba(0, 0, 0, 0.05)",
        custom: "rgba(0, 0, 0, 0.35) 0px 2px 7px",
        "card-shadow": "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        sm: "280px",
        xlg: "1280px",
        xl: "1440px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};

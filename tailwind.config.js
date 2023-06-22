/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        bg: "#9B2524",
        bg2: "#FFDDDD",
        bg3: "#DDD",
      },
      fontFamily: {
        Tesla: ["TESLA", "sans-serif"],
        Robotto: ["Roboto"],
        Work_Sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

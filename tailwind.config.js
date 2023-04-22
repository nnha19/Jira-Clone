/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {},
    colors: {
      primary: "#0052CC",
      "primary-light": "#0052cc26",
      textPrimary: "#42526E",
      white: "#ffffff",
      primaryDivider: "#EBECF0",
    },
  },
  plugins: [],
};

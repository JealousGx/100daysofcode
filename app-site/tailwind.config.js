/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blurple: "#5865F2",
        "hover-blurple": "#4752C4",
        "info-text": "#b9bbbe",
      },
    },
    screens: {
      xs: { max: "639px" },

      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1f1f1f",
        primary: "#ffffff",
        color1: "hsla(203, 57%, 97%, 1)",
        color2: "hsla(228, 6%, 17%, 1)",
        color3: "hsla(218, 54%, 30%, 1)",
        color4: "hsla(0, 0%, 100%, 1)",
        highlight: {
          dark: "#FFFFFF",
          light: "#1f1f1f",
        },
        screens: {
          sm: "480px",
          md: "768px",
          lg: "1020px",
          xl: "1440px",
        },
        secondary: {
          dark: "#707070",
          light: "#e6e6e6",
        },

        action: "#3B82F6",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        Montserrat: ["Montserrat","sans-serif"],
        Oswald: ["Oswald", "Montserrat"]
      },
      colors: {
        primary: {
          light: "#005C96", // medium persian blue
          DEFAULT: "#28282B", // matte black
          dark: "#000000", // Dark black
        },
        secondary: {
          light: "#333333", // Light blue-gray
          DEFAULT: "#aad1e6", // Default blue-gray
          dark: "#91b5cc", // Dark blue-gray
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

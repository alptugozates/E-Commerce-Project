/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "custom-white": "#FFFFFF",
        "custom-gray": "#737373",
      },
    },
  },
  plugins: [],
};

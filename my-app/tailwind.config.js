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
        "custom-bg-color": "rgba(45, 139, 192, 0.75)",
        turquoise: "#23A6F0",
        "turquoise-400": "#4FB8FF",
      },
    },
  },
  plugins: [],
};

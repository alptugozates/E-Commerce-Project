/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "400px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "custom-white": "#FFFFFF",
        "custom-gray": "#737373",
        "custom-bg-color": "rgba(45, 139, 192, 0.75)",
      },
    },
  },
  plugins: [],
};

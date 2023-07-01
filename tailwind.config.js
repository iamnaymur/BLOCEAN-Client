/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      displayOne: ["Montserrat", "sans-serif"],
      displayTwo: ["Permanent Marker", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

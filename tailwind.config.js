/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["'Roboto'", "sans-serif"],
    },
    boxShadow: {
      'custom-shadow': '0 0.5rem 1rem 0 #ebebeb'
    }
  },
  plugins: [],
};

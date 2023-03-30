const defaulTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaulTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}


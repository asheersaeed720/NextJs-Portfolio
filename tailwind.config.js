/** @type {import('tailwindcss').Config} */


const { fontfamily } = require("tailwindcss/defaultTheme") 

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);'
      },
    },
  },
  plugins: [],
}


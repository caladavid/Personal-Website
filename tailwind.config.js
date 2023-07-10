/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#151819",
        white: "#F6F6F6",
        orange: "#ea5924",
        grey: "#e9e9ea",
        textGrey: "#646464",
      },
    },
  },
  plugins: [],
}

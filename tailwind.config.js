/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons'
      },
      colors: {
        'twitter-blue': '#1da1f2',
        'github': '#354487',
        'linkedin': '#0077b5',
      }
    },
    plugins: [],
  }
}

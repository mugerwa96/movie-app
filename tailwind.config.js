/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "roboto":['Roboto', 'sans-serif']
      },
      colors:{
        "primary":'#020617'
      }
    },
  },
  plugins: [],
}


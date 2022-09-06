/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns : {
        
        '13': '1fr 3fr',
         
      },
    },
  },
  plugins: [],
}

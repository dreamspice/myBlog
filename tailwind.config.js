const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'peach': '#eea47f',
        'blue': '#00539F',
      },
      backgroundImage: {
        'phone': "url('/src/images/phone.svg')",
        'bcgi': "url('/src/images/bcgi.svg')",
      }
    },
  },
  plugins: [],
}

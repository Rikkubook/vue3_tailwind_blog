/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        sans:['Noto Sans TC', ...fontFamily.sans] //添無趁線加字體
      }
    },
  },
  plugins: [],
}


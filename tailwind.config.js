const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Lora', 'sans-serif'],
      'body': ['Lora', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blueKing: '#335185',
      redKing: '#E53A4B'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary-blue': '#335185',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
      pink: colors.pink,
      blueKing: '#335185',
      redKing: '#E53A4B',
      yellowKing: '#F5DB69',
      blueMap: '#4158D0',
      violetMap: '#C850C0',
      yellowMap: '#FFCC70'
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
  plugins: [
    require("tailwindcss-scrollbar"),
  ],
}

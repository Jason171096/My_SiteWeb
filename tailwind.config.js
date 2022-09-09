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
      red: colors.red,
      yellow: colors.yellow,
      pink: colors.pink,
      blueKing: '#335185',
      redKing: '#E53A4B',
      blueMap: '#2B86C5'/*'#4158D0'*/,
      violetMap: '#784BA0'/*'#C850C0'*/,
      blueGrad: '#4158D0',
      purpleGrad: '#C850C0',
      yellowGrad: '#FFCC70'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary-blue': '#335185',
     }),
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(255, 255, 255, 1)',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        rotate: 'rotate 1s linear infinite'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-scrollbar"),
  ],
}

const colors = require('./node_modules/tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      bluegray: colors.blueGray,
      red: colors.red,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      yellow: colors.yellow,
      teal: colors.teal,
      cyan: colors.cyan,
      coolgray: colors.coolGray,
      indigo: colors.indigo,
      emerald: colors.emerald,
      green: colors.green,
      'bg': '#14273d',
    },
    fontFamily: {
      'sans':['Lato', 'ui-sans-serif'],
      'serif':['PT Serif Caption', 'ui-serif'],
    },
    extend: {
      width: {
          '112': '28rem',
          '160': '40rem',
          '192': '50rem',
          '240': '60rem',
          '280': '70rem',
          '300': '80rem',
        },
      height: {
        '112': '28rem',
        '160': '40rem',
        '192': '50rem',
        '240': '60rem',
        '280': '70rem',
        '300': '80rem',
      },
      spacing: {
        '112': '28rem',
        '120': '32rem',
        '130': '35rem',
        '160': '40rem',
        '192': '50rem',
        '240': '60rem',
        '280': '70rem',
        '300': '80rem',
          }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

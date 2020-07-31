const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      margin: {
        '18': '4.5rem',
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}

module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      'custom-white': '#FFFFFF',
      'custom-green': '#00C9B7',
      'custom-dark-green': '#00A6BB',
      'custom-blue': '#005384',
      'custom-dark-blue': '#000333',
      'custom-light-grey': '#EEEEEE',
      'custom-grey': '#B9B9B9',
      'custom-dark-grey': '#878787'
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '424px'},
    },
    extend: {
      fontFamily: {
        body: ['Lato']
      },
    },
  },
  plugins: [],
}

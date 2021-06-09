module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#99e4c3',
        DEFAULT: '#4fc08d',
        dark: '#47af80',
      },
      border: '#ced4da',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
      borderWidth: ['first'],
    },
  },
  plugins: [],
};

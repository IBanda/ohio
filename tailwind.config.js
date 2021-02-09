module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#ff5e3a',
      secondary: '#000',
      'custom-gray': '#f6f2f6',
      'light-green': '#f4f6f2',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#ff5e3a',
      white: '#fff',
      black: '#000',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#ff5e3a',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

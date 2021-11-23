module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        product: {
          blue: '#88D9E0',
          pink: '#DE6878',
          light: '#EEF9FA',
          dark: '#1A262F',
          yellow: '#F4C533',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

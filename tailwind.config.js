module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FDF3F1',
        'peach': '#FEBC94',
        'dark-blue': '#252B42',
        'deep-red': '#A01A10',
        'light-gray': '#737373',
        'light-gray-2': '#FAFAFA',
        'camo': '#96BA7B'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

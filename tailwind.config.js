module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'lime-green': '#B1CA52',
        'forest-green': '#418241'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

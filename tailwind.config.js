module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'darkblue': '#0B0D17',
      'lightblue': '#D0D6F9',
      'white': '#FFFFFF'
    },
    fontFamily: {
      bellefair: ['Bellefair'],
      barlowCondensed: ['Barlow Condensed'],
    },
    extend: {},
  },
  plugins: [],
}
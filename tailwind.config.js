module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxl: { max: '1600px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '439px' },
    },
    colors: {
      'black': '#0B0D17',
      'lightblue': '#D0D6F9',
      'white': '#FFFFFF'
    },
    fontFamily: {
      bellefair: ['Bellefair'],
      barlowCondensed: ['Barlow Condensed'],
      barlow: ['Barlow'],
    },
    extend: {
      backgroundImage: {
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
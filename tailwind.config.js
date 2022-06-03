module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxl: { max: '1600px' },
      tablet: { max: '1023px' },
      mobile: { max: '439px' },
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

        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",

        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",

        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
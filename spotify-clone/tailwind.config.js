module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D4689',
        'green-main': '#1ED760'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('./Assets/img/bursts.svg')",
        'spotify-theme-mobile': "url('./Assets/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '185%': '185%',
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
}

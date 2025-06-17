module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#AEBBFD',
          green: '#B2EDD3',
          peach: '#FDCAAE',
        },
        base: {
          white: '#FFFFFF',
          dark: '#242424',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 
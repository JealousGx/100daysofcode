module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    backgroundColor: ['active'],
    textColor: ['active'],
  },
  theme: {
    extend: {
      screens: {
        'xl': '1400px',
      },
      fontFamily: {
        "heading": ['GintoNord-Black'],
        "heading-2": ['GintoNord-Medium'],
        "body": ['Whitney-Book-Bas'],
      },
      colors: {
        'blurple': '#5865F2',
        'green': '#57F287',
        'yellow': '#FEE75C',
        'red': '#ED4245',
        'white': '#FFFFFF',
        'black': '#23272A',
        'hover-black': '#23272ab3',
      },
      fontSize: {
        'sm': "0.875rem"
      },
    },
  },

  plugins: [],
}
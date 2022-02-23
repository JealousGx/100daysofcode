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
      colors: {
        'blurple': '#5865F2',
        'green': '#57F287',
        'yellow': '#FEE75C',
        'red': '#ED4245',
        'white': '#FFFFFF',
        'black': '#23272A',
      },
      fontSize: {
        'sm': "0.875rem"
      },
    },
  },

  plugins: [],
}
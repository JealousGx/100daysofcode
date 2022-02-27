module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    backgroundColor: ["active"],
    textColor: ["active"],
  },
  theme: {
    extend: {
      maxWidth: {
        "page": "1260px",
      },
      screens: {
        xl: "1400px",
      },
      fontFamily: {
        heading: ["GintoNord-Black"],
        "heading-2": ["GintoNord-Medium"],
        body: ["Whitney-Book-Bas"],
      },
      colors: {
        blurple: "#5865F2",
        "brand-gradient": "linear-gradient(90deg, #8ea1e1, #7289da)",
        greyple: "#99aab5",
        dark: "#2c2f33",
        "focus-border": "#00b0f4",
        "status-green": "#43b581",
        "off-white": "#f6f6f6",
        "ekko-red": "#de2761",
        green: "#57F287",
        yellow: "#FEE75C",
        red: "#ED4245",
        white: "#FFFFFF",
        black: "#23272A",
        "hover-black": "#23272ab3",
        "login-black": "#36393F", // Login Container Color
        "gray-text": "#72767d", // Gray Text Color
        hyperlink: "#00aff4", // HyperLink Color
        "button-hover": "#4752c4", // Hover Color for Button
        "info-text": "#b9bbbe", // Info Text Color
        label: "#dcddde", // Label Text Color
        input: "#202225", // Input Background Color
      },
      fontSize: {
        sm: "0.875rem",
      },
    },
  },

  plugins: [],
}

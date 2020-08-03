const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      margin: {
        "18": "4.5rem",
      },
      colors: {
        primary: {
          100: "#ffa412",
          200: "#813500",
        },

        footerBlack: "#111111",
        secundary: "#f00a71",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};

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
        primary: "#ffa412",
        secundary: "#f00a71",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};

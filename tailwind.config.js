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
        primary: "#e99916",
        secundary: "#eb3a4f",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};

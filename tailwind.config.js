const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  fontFamily: {
    sans: ["Inter Var", "Inter", ...defaultTheme.fontFamily.sans],
  },
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular Std", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

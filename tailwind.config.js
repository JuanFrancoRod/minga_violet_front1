/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fondo-main":
          "url('../src/pages/images/7d0eea20d6c53007b24b7e2c4342b819 1.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};

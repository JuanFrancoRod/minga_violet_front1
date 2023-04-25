/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      screens: {
        xsm: { min: "320px", max: "639px" },
        sm1: { min: "640px", max: "1427px" },
      },
      backgroundImage: {
        "fondo-main": "url('/img/7d0eea20d6c53007b24b7e2c4342b819 1.png')",
        "fondo-mobile": "url('/img/fondomobile.png')",
      },
    },
    variants: {},
    plugins: [],
  },
};

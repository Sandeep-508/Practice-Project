/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        base: "25px",
        md: "42px",
        lg: "57px",
        xl: "72px",
      },
      fontFamily: {
        Marko: '"Marko One", serif'
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "24px",
        },
        center: true,
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        navbar_bg: "url(./assets/images/png/navbar-bg-image.png)",
        btn_bg: "url(./assets/images/png/btn-bg-image.png)",
        navbar_sm_bg: "url(./assets/images/png/navbar-sm-bg.png)",
      },
      colors: {
        charcol: "#202020",
        red: "#E97219",
        yellow: "#FAD300"
      },
      screens: {
        "2xsm": "425px",
        xsm: "576px",
      }
    },
  },
  plugins: [],
}
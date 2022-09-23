/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        desktop: "url('../images/image-product-desktop.jpg')",
        mobile: "url('../images/image-product-mobile.jpg')",
        grl: " linear-gradient(to right, #4364F7,#6FB1FC)",
      },
    },
  },
  plugins: [],
};

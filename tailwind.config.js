/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': "linear-gradient(180deg, rgb(7, 2, 17), rgba(7, 2, 17, 0) 100%), url('/images/others/hero-banner.jpg')",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'inter': ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}


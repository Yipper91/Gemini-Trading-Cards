/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
      copperplate: ["copperplate", "sans-serif"],
      slab: ["slab", "sans-serif"],
    },
    screens: {
      'tb': '460px',
      'dk': '1024px'
    },
    extend: {},
  },
  plugins: [],
}


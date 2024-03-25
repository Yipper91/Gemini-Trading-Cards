/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
      copperplate: ["copperplate", "sans-serif"],
      engraved: ["engraved", "sans-serif"],
      slab: ["slab", "sans-serif"],
    },
    screens: {
      'tb': '600px',
      'dk': '1200px'
    },
    extend: {},
  },
  plugins: [],
}


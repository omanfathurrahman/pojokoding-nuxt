/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E384FF',
        'second': '#865DFF',
        'second2': '#262437',
        'background': '#191825'
        },
    },
  },

  daisyui: {
    themes: ["halloween"]
  },
  plugins: [require("daisyui")],
};

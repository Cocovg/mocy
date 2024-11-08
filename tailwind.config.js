/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      spacing: {
        '97': '50rem',
      },
      colors: {
        'green': '#6FDB77',
      }
    },
  },
  plugins: [],
}


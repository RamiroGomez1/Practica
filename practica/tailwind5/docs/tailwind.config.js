/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      borderWidth: ['responsive', 'hover', 'focus'],
  },
    },
  },
  plugins: [],
}


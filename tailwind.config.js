/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(187deg, rgba(100, 65, 253, 1) 22%, rgba(52, 46, 234, 1) 83%)',
      },
    },
  },
  plugins: [],
}
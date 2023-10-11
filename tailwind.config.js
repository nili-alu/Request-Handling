/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#11293E',
        customColor: '#21273E',
      }
    },
  },
  plugins: [],
}


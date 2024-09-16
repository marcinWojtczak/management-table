/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#191C24",
        "gray": "#6c757d",
        "pink": "#AF1763",
        "blue": "#0D6EFD",
        "green": "#198754",
        "lightBlue": "#0dcaf0",
        "red": "#ab2e3c",
        "yellow": "#ffc107"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#C72640', // Add custom hex color
        dateColor: "#E04E66"
      },
    },
  },
  plugins: [],
}
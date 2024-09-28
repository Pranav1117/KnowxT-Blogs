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
      keyframes: {
        'spin-custom': {
          '0%, 100%': { 
            transform: 'rotate(0deg) scale(1)',
            boxShadow: '0 0 0px rgba(0, 0, 0, 0.1)',
          },
          '25%': {
            transform: 'rotate(90deg) scale(1.1)',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.15)',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.2)',
            boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.2)',
          },
          '75%': {
            transform: 'rotate(270deg) scale(1.1)',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.15)',
          },
        },
      },
      animation: {
        'spin-custom': 'spin-custom 2s infinite linear',
      },
    },
  },
  plugins: [],
}
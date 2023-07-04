/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue' : '#003049',
        'orange' : '#fb8500',
        'cream' : '#fdf0d5',
        'red' : '#c1121f'
      },
    },
  },
  plugins: [],
}


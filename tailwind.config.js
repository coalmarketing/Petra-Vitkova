/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#304160',
        secondary: '#6EA2D4',
        accent: '#304160',
        'light-bg': '#F7F9FC',
      },
      fontFamily: {
        'teachers': ["'Teachers'", 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'glacial': ["'Glacial Indifference'", 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
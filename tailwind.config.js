/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "dmsans": ['DM Sans', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '960px',
        xl: '984px',
        '2xl': '1496px',
      },
    },
  },
  plugins: [],
}


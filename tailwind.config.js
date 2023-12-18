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
      },
      boxShadow: {
        'softy': '0 0 0 0 #ffffff',
      },
      backgroundImage: {
        'softy': 'linear-gradient(193deg, #313960 0%, #11152b 100%)',
      }
    },
    colors: {
      primary: '#04e8b9',
      secondary: '#73d9ff',
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


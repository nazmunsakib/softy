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
        'softy2': 'inset 0 1px 0 0 rgba(148,163,184,.1)'
      },
      backgroundImage: {
        'softy': 'linear-gradient(193deg, #313960 0%, #11152b 100%)',
        'softy2':'linear-gradient(180deg, #313960 0%, #11152b 100%)',
      },
      grayscale: {
        70: '70%',
      }
    },
    colors: {
      white: '#ffffff',
      primary: '#04e8b9',
      secondary: '#73d9ff',
      softySolid: 'rgba(30,41,59,.5)',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '960px',
        '2xl': '960px',
      },
    },
  },
  plugins: [],
}


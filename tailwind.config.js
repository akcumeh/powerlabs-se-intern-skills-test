/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          color1: '#F8FAFC',
          color2: '#1B82F6', 
          color3: '#8DD8FF',
          color4: '#0F172A',
        },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
        fontSize: {
          base: '16px',
          sm: '13px',
          md: '18px',
          lg: '20px',
          xl: '24px'
        },
        spacing: {
          'smol': '30%',
          'med': '50%',
          'lrg': '70%',
          'xlrg': '90%'
        },
        width: {
          'sml': '20%',
          'med': '33.33%',
          'lrg': '50%',
          'xlrg': '75%',
        },
      },
    },
    plugins: [],
  }
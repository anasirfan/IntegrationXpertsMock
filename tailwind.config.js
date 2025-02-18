/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1559ED',
          dark: '#05004E',
        },
        success: {
          DEFAULT: '#3CD856',
          light: '#DCFCE7',
        },
        warning: {
          DEFAULT: '#FFA412',
          light: '#FFF4DE',
        },
        error: {
          DEFAULT: '#FA5A7D',
          light: '#FFE2E5',
        },
        violet: {
          DEFAULT: '#A700FF',
          light: '#F3E8FF',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F8F9FA',
          300: '#EDF2F6',
          400: '#96A5B8',
          500: '#737791',
          600: '#425166',
          700: '#374557',
          800: '#222B45',
          900: '#151D48',
        },
      },
      boxShadow: {
        card: '0px 4px 20px rgba(238, 238, 238, 0.501967)',
        menu: '0px 20px 50px rgba(55, 69, 87, 0.1)',
      },
      borderRadius: {
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}

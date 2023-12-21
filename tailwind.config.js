/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '650px',
      'laptop': '1000px',
    },
    width: {
      'full': '100%',
      'screen': '100dvw',
      'sectionWidth' : 'min(1200px, 95%)',
    },
    height: {
      'screen': '100dvh',
      'xl-screen': '120dvh',
      'dbl-screen': '200dvh',
    },
    colors: {
      'primary': '#e1e8ea',
      'secondary': '#a4c6c4',
      'font': '#36474a',
      'background': '#ffffff',
    },
    lineHeight: {
      '12': '8rem',
    },
    boxShadow: {
      'primary-shadow': ' 0 20px 30px 80px #e1e8ea',
      'second-shadow': '0 0 50px 80px #a4c6c4',
      'sm': '8px 8px 10px -10px #36474a',
      'md': '8px 8px 10px -8px #36474a',
      'lg': '8px 12px 20px -10px #36474a',
      'sm-light': '8px 8px 10px -10px #ffffff',
      'md-light': '8px 8px 10px -8px #ffffff',
      'lg-light': '8px 12px 20px -10px #ffffff',

    },
    gap: {
      'sm': '50px',
      'md': '70px',
      'lg': '100px',
    }
 
  },
  plugins: [],
};

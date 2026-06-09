/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontWeight: {
        black: '700',
      },
      colors: {
        ink: '#171717',
        leaf: '#0c831f',
        limepop: '#f8cb46',
        mint: '#effbef',
        paper: '#fbfaf5',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(18, 32, 18, 0.12)',
      },
    },
  },
  plugins: [],
};

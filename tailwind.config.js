/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'branca': '#eee',
        'preta': '#111',
        'cinza': '#333',
        'verde': '#10ac84',
        'cinzaClaro': '#A3A3A3',
        'vermelho': '#ff0000',
        'selecao': '#f1c40f',
        'celeste': '#222435',
        'bege': '#DBC8BD',
        'laranja': '#ff7e3b'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      width: {
        '60': '15rem',
        '70': '17.5rem',
        '72': '18rem',
      },
      height: {
        '30': '7.5rem',
        '70': '17.5rem',
      }
    },
  },
  plugins: [],
} 
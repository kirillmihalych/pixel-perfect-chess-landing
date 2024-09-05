/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'img-main': "url('./src/assets/imgs/img-background.png')",
      },
      fontFamily: {
        'golos-text': ['Golos Text', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        'h-color': '#313131',
      },
    },
  },
  plugins: [],
}

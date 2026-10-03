/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F5',
        charcoal: '#18181B',
        navy: '#0A1128',
        gold: {
          DEFAULT: '#C5A059',
          light: '#E6C687',
          dark: '#9A7A38'
        },
        sand: '#F2EFE9'
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal-gold': '4px 4px 0px 0px #C5A059',
        'brutal-white': '4px 4px 0px 0px #FFFFFF'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
};
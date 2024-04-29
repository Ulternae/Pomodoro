/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-coral',
    'bg-cyan',
    'bg-purple',
    'text-coral',
    'text-cyan',
    'text-purple',
    'font-kumbhSans',
    'font-robotoSlab',
    'font-spaceMono',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbhSans': ['Kumbh Sans', 'sans-serif'],
        'robotoSlab': ['Roboto Slab', 'serif'],
        'spaceMono': ['Space Mono', 'monospace'],
      },
      colors: {
        coral: '#F87070',
        cyan: '#70F3F8',
        purple: '#D881F8',
        lightblue: '#D7E0FF',
        darkblue: '#1E213F',
        white: '#FFFFFF',
        lightgrey: '#EFF1FA',
        navy: '#161932',
      }
    },
  },
  plugins: [],
}


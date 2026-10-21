/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f3ede2',
        'paper-dark': '#e2d7c5',
        'paper-aged': '#cbbfa8',
        ink: '#0a0a0a',
        'ink-light': '#1c1b18',
        oxblood: '#881313',
        'oxblood-bright': '#ad1717',
        'stamp-red': '#b91c1c'
      },
      fontFamily: {
        poster: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        typewriter: ['"Special Elite"', 'Courier New', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #0a0a0a',
        'brutal-lg': '8px 8px 0px 0px #0a0a0a',
        'brutal-oxblood': '6px 6px 0px 0px #881313'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080809',
        'obsidian-deep': '#040405',
        charcoal: '#111114',
        'charcoal-elevated': '#19191E',
        'charcoal-surface': '#222228',
        bone: '#F0ECE6',
        'bone-muted': '#96969F',
        white: '#FFFFFF',
        silver: '#C2C2C7',
        'silver-bright': '#E2E2E6',
        crimson: {
          DEFAULT: '#D41432',
          bright: '#FF1A38',
          deep: '#780C20',
          glow: 'rgba(212, 20, 50, 0.45)'
        },
        wire: '#34343A',
        'wire-light': '#4A4A52'
      },
      fontFamily: {
        gothic: ['"Pirata One"', 'cursive'],
        sigil: ['Cinzel', 'serif'],
        sans: ['"Space Grotesk"', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(212, 20, 50, 0.4)',
        'crimson-intense': '0 0 45px rgba(212, 20, 50, 0.7)',
        'cyber-card': '0 12px 36px -10px rgba(0,0,0,0.9)'
      }
    },
  },
  plugins: [],
}

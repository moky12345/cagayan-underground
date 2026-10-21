/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#070709',
        'obsidian-dark': '#040405',
        charcoal: '#111114',
        'charcoal-light': '#18181D',
        bone: '#EDE8DF',
        'bone-muted': '#A39E93',
        silver: '#D4D8DC',
        'silver-dark': '#7A8089',
        crimson: {
          DEFAULT: '#D9142A',
          bright: '#FF1A35',
          glow: 'rgba(217, 20, 42, 0.45)',
          dark: '#8B0A17'
        },
        wire: '#26262D',
        'wire-light': '#363640'
      },
      fontFamily: {
        sigil: ['Cinzel', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(217, 20, 42, 0.4)',
        'crimson-sharp': '4px 4px 0px 0px #D9142A',
        'cyber-card': '0 10px 30px -10px rgba(0,0,0,0.8)'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#101010',
        charcoal: '#1A1A1A',
        white: '#FFFFFF',
        'soft-white': '#F6F5F2',
        gray: {
          light: '#F0EFEA',
          DEFAULT: '#777777',
          muted: '#8A8A8A',
          dark: '#333333'
        },
        border: {
          light: '#E5E5E5',
          dark: '#262626',
          subtle: '#EEEEEE'
        },
        crimson: {
          DEFAULT: '#C62032',
          hover: '#A51A28',
          subtle: '#FAF0F1'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Manrope', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '0.15em',
        widest: '0.25em'
      },
      boxShadow: {
        'fine': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'editorial': '0 20px 40px -15px rgba(16, 16, 16, 0.08)',
        'crimson': '0 8px 24px -4px rgba(198, 32, 50, 0.25)'
      }
    },
  },
  plugins: [],
}

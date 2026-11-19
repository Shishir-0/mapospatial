/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1320',
          900: '#101E32', // Primary deep navy
          800: '#182B42', // Secondary dark blue
          700: '#223854', // Structural utility slate
          600: '#2C496A',
          500: '#3D628C',
        },
        spatial: {
          cyan: '#52BFD0', // Signature spatial cyan
          'cyan-bright': '#6BD5E7',
          'cyan-dim': '#3A8A96',
          'cyan-glow': 'rgba(82, 191, 208, 0.18)',
          slate: '#253E52',
          surface: '#111413',
          card: '#142336',
        },
        offwhite: '#F5F6F3',
        muted: '#78899B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}

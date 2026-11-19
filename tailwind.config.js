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
        basalt: '#090B0C',        // Deep Basalt (primary background)
        carbon: '#111517',        // Carbon Surface
        graphite: '#191E20',      // Elevated Graphite
        mineral: '#F0EEE8',       // Mineral White (primary text)
        'text-secondary': '#A4A49D', // Secondary text
        'text-muted': '#747B79',     // Muted technical text
        copper: {
          DEFAULT: '#C27A50',     // Survey Copper (selective accent)
          dim: '#8E5534',
          glow: 'rgba(194, 122, 80, 0.15)',
        },
        'subtle-border': '#292F30', // Subtle architectural border
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '3px',
        md: '4px',
        lg: '6px',
      }
    },
  },
  plugins: [],
}

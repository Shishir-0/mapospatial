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
        // Exact Typography & Color System
        'primary-heading': '#14233F',
        'secondary-heading': '#1D2D46',
        'body-text': '#425168',
        'secondary-body': '#536174',
        'tech-label': '#536174',
        'eyebrow': '#596579',
        'nav': '#14233F',
        'metadata': '#657184',
        'muted-text': '#6B7788',
        'divider': '#DCE1E7',
        'white-bg': '#FFFFFF',
        'secondary-bg': '#F7F8FA',
        'gold': {
          DEFAULT: '#B69A5A',
          light: '#C7AE75',
          dark: '#9B8144',
          subtle: 'rgba(182, 154, 90, 0.15)',
        },
        'navy': {
          DEFAULT: '#14233F',
          deep: '#0E1930',
          dark: '#0A1222',
          light: '#1D2D46',
        },

        // Universal Semantic Aliases (prevents any missing class from dropping into opacity)
        background: '#FFFFFF',
        'warm-white': '#F7F8FA',
        'subtle-bg': '#F7F8FA',
        'subtle-border': '#DCE1E7',
        'border-subtle': '#DCE1E7',
        'border-strong': '#CAD1D4',
        
        // Text semantic aliases
        'text-primary': '#14233F',
        'text-secondary': '#425168',
        'text-muted': '#536174',

        // Legacy palette aliases mapped to new strict tokens
        mineral: '#14233F',
        copper: '#B69A5A',
        basalt: '#FFFFFF',
        carbon: '#F7F8FA',
        graphite: '#F0F2F5',
        slate: '#425168',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      }
    },
  },
  plugins: [],
}

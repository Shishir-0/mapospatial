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
        // Light Editorial Palette (70% Light / 20% Dark Navy / 10% Gold Accent)
        background: '#FFFFFF',
        'warm-white': '#F7F8F6',
        'subtle-section': '#F0F2F1',
        navy: {
          DEFAULT: '#14233F',     // Primary brand navy
          deep: '#0E1930',        // Deep navy
          dark: '#0A1222',
          light: '#1D325A',
        },
        gold: {
          DEFAULT: '#B69A5A',     // Refined gold from logo
          light: '#C7AE75',
          dark: '#9B8144',
          subtle: 'rgba(182, 154, 90, 0.12)',
        },
        'text-primary': '#14233F',  // Primary navy text
        'text-secondary': '#596575',// Secondary text
        'text-muted': '#808A96',    // Muted technical text
        'border-subtle': '#E3E7E8', // Subtle borders
        'border-strong': '#CAD1D4',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
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

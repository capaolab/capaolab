const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      colors: {
        terracota: {
          100: '#5b1e12',
          75: '#aa3b22',
          50: '#e7c8c1',
          25: '#f5e7e4',
          10: '#aa3b22',
        },
        folha: {
          100: '#6d4f12',
          75: '#c6982f',
          50: '#efe1c3',
          25: '#f5e7e4',
          10: '#aa3b22',
        }
      },
    },
  },
  plugins: [
    addIconSelectors(['arcticons']),
  ],
};

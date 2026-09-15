/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FCFBF9',
          100: '#FAF9F6',
          200: '#F3F1EC',
          300: '#E7E4DC',
          400: '#D5D1C5',
        },
        brand: {
          dark: '#111827',
          charcoal: '#1E293B',
          muted: '#4B5563',
          red: '#8B1E1E',
          'red-dark': '#6F1818',
          'red-light': '#A52A2A',
          'red-subtle': '#FAF0F0',
          accent: '#991B1B',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'executive': '0 4px 20px -2px rgba(17, 24, 39, 0.05), 0 2px 6px -1px rgba(17, 24, 39, 0.03)',
        'executive-hover': '0 10px 30px -4px rgba(17, 24, 39, 0.08), 0 4px 12px -2px rgba(17, 24, 39, 0.04)',
      },
    },
  },
  plugins: [],
};

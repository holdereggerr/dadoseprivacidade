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
        brand: {
          navy: '#16324F',      // Azul profundo de autoridade
          teal: '#13A89E',      // Verde-água de ação/destaque
          'teal-dark': '#0F8B83', // Verde-água escuro para hover
          'teal-light': '#E6F7F6',// Fundo suave verde-água
          gold: '#D7A65B',      // Dourado para badges e progresso
          'gold-light': '#FDF8EE',// Fundo suave dourado
          bg: '#F8FAFC',        // Slate-50 off-white
          dark: '#0F172A',      // Slate-900 para texto principal
          slate: '#334155',     // Slate-700 para texto secundário
          muted: '#64748B',     // Slate-500 para texto auxiliar
          card: '#FFFFFF',      // Fundo dos cartões
          border: '#E2E8F0',    // Borda sutil
          'border-hover': '#CBD5E1', // Borda hover
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card': '0 4px 20px -2px rgba(22, 50, 79, 0.06), 0 2px 6px -1px rgba(22, 50, 79, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(22, 50, 79, 0.12), 0 4px 10px -2px rgba(19, 168, 158, 0.15)',
        'teal-glow': '0 0 20px rgba(19, 168, 158, 0.25)',
      },
    },
  },
  plugins: [],
};

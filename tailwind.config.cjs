module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fffbf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          DEFAULT: '#fdfbf7',
          50: '#ffffff',
          100: '#fdfbf7',
          200: '#f6f1e9',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'system-ui', 'ui-sans-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
}

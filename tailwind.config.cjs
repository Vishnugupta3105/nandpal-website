module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'ui-sans-serif', 'SF Pro Display', 'Inter', 'sans-serif'],
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
}

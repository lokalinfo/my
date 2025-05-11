const withPWA = require('next-pwa')({ dest: 'public' });
module.exports = withPWA({
  reactStrictMode: true,
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { primary: '#1F2937', accent: '#F2AF02' },
      borderRadius: { xl: '1rem' },
      fontSize: {
        '2xl': ['1.5rem','2rem'],
        '3xl': ['1.875rem','2.25rem'],
      },
    },
  },
  plugins: [],
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f5',
          100: '#ffebeb',
          200: '#ffc9c9',
          300: '#ff9a9a',
          400: '#ef5350',
          500: '#C62828',
          600: '#b71c1c',
          700: '#8e1515',
        },
        'brand-gray': {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#374151',
        }
      }
    }
  },
  plugins: [],
}

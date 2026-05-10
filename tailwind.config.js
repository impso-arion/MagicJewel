/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Shippori Mincho"', 'serif'],
      },
      colors: {
        jewel: {
          ruby: '#e11d48',
          sapphire: '#2563eb',
          emerald: '#059669',
          topaz: '#d97706',
        },
      },
    },
  },
  plugins: [],
};

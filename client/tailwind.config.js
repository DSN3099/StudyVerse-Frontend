/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height:{
        '128':'540px',
        '100':'300px',
      }
    },

    screens: {
      sm: { max: '640px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
    },

  },
  plugins: [],
}

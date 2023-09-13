/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '735px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      'primary': 'hsl(256, 26%, 20%)',
      'secondary': 'hsl(216, 30%, 68%)',
      'violet': 'hsl(270, 9%, 17%)',
      'gray': 'hsl(273, 4%, 51%)',
      'white': 'hsl(0, 0%, 98%)',
    },
    container: {
      center: true,
    },
    purge: {
      enabled: true,
      content: ['./src/**/*.html'],
    }
  },
  plugins: [],
};

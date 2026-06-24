/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#f4fbf8',
        soft: '#ecf7f2',
        brand: {
          light: '#d8f0e8',
          DEFAULT: '#5fae96',
          dark: '#235048',
        },
        accent: '#4b7d8c',
        note: '#def4eb',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(59, 96, 86, 0.08)',
        panel: '0 18px 34px rgba(44, 96, 83, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        paw: 'wave 1.5s ease-in-out infinite',
        play: 'play-paw 2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        'play-paw': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};

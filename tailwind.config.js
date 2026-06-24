/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#f4fbf4',
        soft: '#e7f7eb',
        brand: {
          light: '#c8eed3',
          DEFAULT: '#21A038',
          dark: '#126120',
        },
        accent: '#188A2E',
        note: '#dcf3e2',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(33, 160, 56, 0.08)',
        panel: '0 18px 34px rgba(33, 160, 56, 0.12)',
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

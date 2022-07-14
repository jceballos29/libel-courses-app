/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      colors: {
        facebook: '#1967D2',
        google: '#DB4437',
      },
      keyframes: {
        bouncy: {
          from: {
            transform: 'scaleX(1.25)',
          },
          to: {
            transform: 'translateY(-50px) scaleX(1)',
          },
        },
        scaleUp: {
          '20%': {
            transform: 'scaleY(1.5)',
            opacity: 1,
          },
          '40%':{
            transform: 'scaleY(1)',
          }
        }
      },
      animation: {
        'bouncy': 'bouncy .5s alternate infinite',
        'bouncy-16': 'bouncy .5s alternate infinite .16s',
        'bouncy-32': 'bouncy .5s alternate infinite .32s',
        'scale-up': 'scaleUp 1s linear infinite',
        'scale-up-5': 'scaleUp 1s linear infinite .5s',
        'scale-up-25': 'scaleUp 1s linear infinite .25s',
      },
    },
  },
  plugins: [],
}

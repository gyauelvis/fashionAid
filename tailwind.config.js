/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bgColor':'#0077B610',
        'special-blue': '#0077B6',
        'black-color': '#020202',
        'shop': '#BEE8FF'
      },
      fontFamily: {
        'openSans': ['Open Sans', 'sans-serif'],
        'playfairDisplay':  ['Playfair Display','sans-serif'],
        'poppins': ['Poppins', 'sans-serif'], 
      },
      keyframes:{
        slideIn:{
          '0%':{transform: 'translateX(-18rem)'},
          '100%': {transform: 'translateX(0rem)'}
        },
        slideOut:{
          '0%':{transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-18rem)'}
        },
        
      },
      animation: {
        slideIn: 'slideIn 200ms ease-in-out 1 forwards',
        slideOut: 'slideOut 200ms ease-in-out 1 forwards',
      }
    },
  },
  plugins: [],
}
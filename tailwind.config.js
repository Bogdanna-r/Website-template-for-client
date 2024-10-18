/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend:{
      keyframes:{
        fullSpin:{
          '100%':{
            transform:'rotate(-360deg)'
          }
        }
      },

      animation:{
        fullSpin:'fullSpin 6s linear infinite'
      }
    },
  },
  plugins: [],
}


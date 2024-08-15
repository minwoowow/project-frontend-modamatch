/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      keyframes: {
         fadeOut: {
            '0%': { opacity: 1},
            '100%': { opacity: 0},
         },
         fadeIn: {
            from: {opacity: 0},
            to: {opacity: 1},
         },
         fadeIn2: {
            from: { opacity: 0 },
            to: { opacity: 1 }
         },
         slideIn: {
            to: { transform: 'translateY(100%)' },
            from: {transform: 'translateY(0)' }
         },
         slideOut: {
            '0%': { transform: 'translateY(0)' },
            '100%': {transform: 'translateY(100%)' }
         },
         slideUp: {
            from: { height: '100%' },
            to: { height: '0%' }
         },
         borderFlow: {
            '0%, 100%': { backgroundPosition: '0%, 50%' },
            '50%' : { backgroundPosition: '100%, 50%' }
         }
      },

      animation: {
         fadeOut: 'fadeOut 5s forwards',
         fadeIn: 'fadeIn 2s forwards',
         fadeIn2: 'fadeIn2 8s forwards',
         slideIn: 'slideIn 1s ease-in-out forwards',
         slideOut: 'slideOut 1s ease-in-out forwards',
         slideUp: 'slideUp 1s ease-in-out forwards',
         borderFlow: 'borderFlow 4s ease infinite'
      },
      
      backgroundImage: {
         main: "url('./assets/FashionKing_Background.jpg')",
      },

      fontFamily: {
         TheJamsilMedium: ["TheJamsil-Medium"],
         TheJamsilBold: ["TheJamsil-Bold"],
         TheJamsilExtraBold: ["TheJamsil-ExtraBold"],
         JalnanGothic: ["JalnanGothic"],
      }
     },
  },
  plugins: [
   ({ addUtilities }) => {
      addUtilities({
         ".input-border": {
            "@apply ease-in-out absolute left-0 bottom-0 w-0 border-b-2 border-black transition-all duration-300 peer-focus:w-full":
            "",
         },
      });
   },
  ],
}
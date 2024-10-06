/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['"Caveat", cursive']
      },
      animation: {
        'circle-size': 'circle-size 0.8s linear infinite alternate',
        'shadow-rotate': 'shadow-rotate 1.5s linear infinite',
      },
      keyframes: {
        'circle-size': {
          'from': { width: '250px', height: '250px' },
          'to': { width: '300px', height: '300px' },
        },
        'shadow-rotate': {
          'from': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          'to': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        adjective: {
          words: ['Frontend Development!', 'React.js!', 'Javascript!', 'Programming!', 'Full-Stack Development!'],
          delay: 2
        }
      }
    })
  ],
}


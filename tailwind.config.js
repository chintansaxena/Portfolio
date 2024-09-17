/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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


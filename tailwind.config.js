/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'shadows': ['"Shadows Into Light"', 'cursive'],
        'libre': ['"Libre Franklin"', 'sans-serif'],
        'abel': ['"Abel"', 'sans-serif'], 
        'winky': ['"Winky Rough"', 'cursive'],
        'lora':['"Lora"', 'serif'],
        'brush':['"Caveat Brush", cursive'],
        'autumn': ['Autumn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
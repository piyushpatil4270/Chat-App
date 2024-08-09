/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '415px',  
        'sm': '640px',   
        'md': '768px',    
        'lg': '1024px',   
        'xl': '1280px',   
        '2xl': '1536px', 
        '3xl': '1600px',  
      },
    },
  },
  plugins: [],
}

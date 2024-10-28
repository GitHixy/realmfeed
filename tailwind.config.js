/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1a1a2e",        
        darkCard: "#162447",      
        accent: "#e94560",        
        secondaryText: "#e0e0e0", 
        borderDark: "#1f4068",    
      },
    },
  },
  plugins: [],
}


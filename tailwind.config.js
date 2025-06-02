/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      quantico:['quantico'],
      ethnocentric: ['Ethnocentric', 'sans-serif'],
    },
    screens:{
      'mobile': '201px',
      // => @media (min-width: 201px) { ... }

      'tablet': '501px',

      'laptop': '901px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1501px',
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
      "branco":"#FFFFFF",
      "primary": "#E7EEF6",
      "subtitulos":"#B6C9E2",
      "titulo": "#061C39",
      "faixa": "#0E3C7A",
      "faixa1": "#0C316D",
      "faixa2": "#185FD3",
      "faixa3": "#00000080",
    },
    extend: {
      dropShadow: {
        custom: ' 2px 2px 10px rgba(0, 0, 0, 0.6)'
      }
    
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-30%)' },
      },
    },
    animation: {
      slide: 'slide 30s linear infinite',
      
    },
  
  },
  plugins: [],
}


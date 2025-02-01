/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'serif':['quantico'],
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
      "faixa2": "#185FD3"
    },
    extend: {
    
    },
  },
  plugins: [],
}


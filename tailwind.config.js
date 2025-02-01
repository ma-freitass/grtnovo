/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primary": "#E7EEF6",
      "titulo": "#061C39",
      "faixa": "#0E3C7A",
    },
    extend: {},
  },
  plugins: [],
}


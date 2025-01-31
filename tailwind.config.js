/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{ts,js,tsx,jsx}",
    "./src/pages/**/*.{ts,js,tsx,jsx}"
  ],
  theme: {
    colors: {
      "bg": "#E7EEF6",
      "titulo": "#061C39",
      "titulo-bg": "#E7EEF6",
      "faixa": "#0E3C7A",
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //google font family
      fontFamily: {
        sans: ['Poppins', 'Lato', 'Roboto', 'Open+Sans'], // Sets Poppins as the default sans font
      },
    },
  },
  plugins: [],
}


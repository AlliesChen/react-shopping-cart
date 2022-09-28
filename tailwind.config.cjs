/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-ltr": {
          from: {transform: "translateX(100%)"}
        }
      },
      animation: {
        "slide-ltr": "slide-ltr 1s ease-out"
      }
    },
  },
  plugins: [],
}

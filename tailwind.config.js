module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ta-green": "#84fab0", // tempting azure
        "ta-blue": "#8fd3f4",
        "er-green": "#43cea2", // eternal river
        "er-blue": "#185a9d",
        "c-red": "#c33764", // celestial
        "c-blue": "#1d2671",
      },
      fontFamily: {
        lisa: ["Mono Lisa", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        fira: ["Fira Code"],
        shadow: ["'Shadows Into Light'", "cursive"],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        700: "70rem",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        intro: "repeat(2, minmax(auto, 1fr))",
      },
    },
    colors: {
      white: "#ffffff",
      light: "#f5f5f5",
      medium: "#f0f0f0",
      gray: "#2e2e2e",
      dark: "#000814",
      red: "#FF0000",
      green: "#008000",
      orange: "#FFA500",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-600": "#1a73e8",
        "blue-700": "#1557b0",
        "gray-50": "#f5f5f5",
        "gray-100": "#fafafa",
        "gray-600": "#5f6368",
        "gray-800": "#202124",
        "gray-900": "#333333",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#FBFCFD',
      },
    },
  },
  daisyui: {
    darkTheme: "light"
  },
  plugins: [require("daisyui")],
}
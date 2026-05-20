/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cmBlue: '#003087',
        cmGreen: '#008751',
        cmTeal: '#00C4B4',
        cmOrange: '#FF6B00',
        cmDark: '#0B0F19',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

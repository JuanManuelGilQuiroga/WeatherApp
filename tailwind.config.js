/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'first-purple': '#E0B6FF',
        'second-purple': 'rgba(208, 188, 255, 0.3)',
        'third-purple': '#E2D3FA',
        'fourth-purple': '#8A20D5',
        'text-purple': '#2E004E'
      }
    },
  },
  plugins: [],
}


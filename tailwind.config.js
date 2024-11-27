 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          'dotted-custom': 'radial-gradient(circle, #4caf50 1px, transparent 1px)',
        },
        spacing: {
          '8px': '8px', 
        },
      },
    },
  },
  plugins: [],
}


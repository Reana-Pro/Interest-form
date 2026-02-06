/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

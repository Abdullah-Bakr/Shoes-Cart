/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hex: "rgba(0,0,0,.55)",
      },
    },
  },
  plugins: [],
};

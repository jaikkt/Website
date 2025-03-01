/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "border-width": "border-width 3s infinite alternate",
        "background-shine": "background-shine 2s linear infinite"
      },
      keyframes: {
        "border-width": {
          "from": { width: "10px", opacity: "0" },
          "to": { width: "100px", opacity: "1" }
        },
        "background-shine": {
          "from": { backgroundPosition: "0 0" },
          "to": { backgroundPosition: "-200% 0" }
        }
      }
    }
  },
  plugins: [],
};

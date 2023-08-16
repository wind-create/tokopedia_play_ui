/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tp-dark": "#0A070B",
        "tp-secondary": "#c5c4c4",
        "tp-sd-dark-8": "rgba(10, 7, 11, .8)",
      },
    },
  },
  plugins: [],
};

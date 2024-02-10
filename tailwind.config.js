/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#f7f8f5",
        "primary-color": "#e85527",
        "secondary-color": "#19394c",
      },
      gridTemplateColumns: {
        "repeat-auto-fil": "repeat(auto-fill, minmax(270px, 1fr)",
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
    },
  },
  plugins: [],
};

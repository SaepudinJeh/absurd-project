/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  screens: {
    xxs: "330px",
    xs: "400px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  theme: {
    extend: {
      fontFamily: {
        marienda: ["Merienda One"],
        labelle: ["La Belle Aurore"],
      },
    },
  },
  plugins: [require("daisyui")],
};

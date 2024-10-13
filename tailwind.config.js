/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          White: "#FFFFFF",
          darkWhite: "#F2F0F1",
          gray: "#F0F0F0",
          Black: "#000000",
          goldenYellow: "#FFC633",
          markGreen: "#01AB31",
          redDiscount: "#FF3333",
        },
        filterColors: {
          blue: "#063AF5",
          Green: "#00C12B",
          red: "#F50606",
          yellow: "#F5DD06",
          orange: "#F57906",
          skyBlue: "#06CAF5",
          purple: "#7D06F5",
          pink: "#F506A4",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};

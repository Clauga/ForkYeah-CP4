/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        yellow: "#FFA101",
        main: "#31525B",
        "main-light": "#B3DEE5",
        black: "#272727",
        grey1: "#666666",
        grey2: "#999999",
        grey3: "#CCCCCC",
        grey4: "#F0F0F0",
        green: "#54A05C",
        red: "#FF3838",
        soft: "#F9F1EC",
        background: "#FBF6EB",
        blue: "#009DBE",
      },
      fontFamily: {
        zen: ["Zen Antique", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
      backgroundImage: {},
      boxShadow: {
        image: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

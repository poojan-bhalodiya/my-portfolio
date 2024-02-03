export default {
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1e1e1e",
        },
        clay: {
          50: "#fff8ed",
          100: "#fff0d5",
          200: "#ffdda9",
          300: "#fec576",
          400: "#fc9f3b",
          500: "#fb8314",
          600: "#ec680a",
          700: "#c34d0b",
          800: "#9b3e11",
          900: "#7d3511",
          950: "#431807",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

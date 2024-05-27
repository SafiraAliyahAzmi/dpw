import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        cod: {
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
          950: "#111111",
        },
        bistre: {
          50: "#f6f5f0",
          100: "#e8e6d9",
          200: "#d3cfb5",
          300: "#bab18a",
          400: "#a69869",
          500: "#97865b",
          600: "#816e4d",
          700: "#69573f",
          800: "#59493a",
          900: "#4e4035",
          950: "#372b23",
        },
      },
    },
  },

  plugins: [forms],
};

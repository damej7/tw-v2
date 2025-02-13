/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./*.html"], // Sesuaikan path jika HTML ada di dalam folder lain
  content: ["./src/**/*.html", "./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        japan: ["42dot Sans", "serif"],
      },
      colors: {
        coffee: '#c0ff33',
      }
    },
  },
  plugins: [],
};

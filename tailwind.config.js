/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        HomeBG: "url('src/assets/homebg.jpg')",
        NotesBG: "url('src/assets/notesbg.jpg')",
        ElabBG: "url('src/assets/elabbg.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        chivo: ["Chivo", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          bodyFont: "Poppins",
          titleFont: "Montserrat",
        },
        colors: {
          primaryColor: "#111111",
          secondaryColor: "#9b59b6",
          bgColor: "#34495e",
          claro:"#D4E2D4"
        },
        boxShadow: {
          btnShadow: "0px 0px 18px 3px rgba(52,73,94,1)",
        },
      },
    },
  },
  plugins: [],
}


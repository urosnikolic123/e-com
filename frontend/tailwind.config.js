/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "624px", // Add your custom height here, with a desired value
      },
      colors: {
        primary: "#222831",
        secondary: {
          100: "#00ADB5",
          200: "#393E46",
          300: "#EEEEEE",
        },

        // Add more custom colors as needed
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        bebas: ["Bebas Neue"],
        roboto: ["Roboto"],
      },
      animation: {
        "custom-pulse": "custom-pulse 4s infinite",
      },
    },
  },
  plugins: [],
};

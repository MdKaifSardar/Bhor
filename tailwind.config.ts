/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      backgroundColor: {
        glassbg: "rgba(255, 255, 255, 0.27)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      blur: {
        glassblur: "blur(7.4px)",
      },
      colors: {
        back: "#14142B",
        button1: "#14142B",
        button2: "#4D4C7D",
        org: "#F99417",
        lig_Blu: "#ffffff",
        font_col: "#08F9CE",
      },
    },
  },
  plugins: [],
};

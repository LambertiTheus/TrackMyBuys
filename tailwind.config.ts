import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'darkgrey': '#121212',
        'lightlilac': '#be86fd'
      },
    },
    variants: {
      extend: {},
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;

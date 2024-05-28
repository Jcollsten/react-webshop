/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: "640px", DEFAULTS
        // md: "768px", DEFAULTS
        // lg: "1024px", DEFAULTS
        // xl: "1280px", DEFAULTS
        sm: "640px",
        md: "875px",
        lg: "1296px",
        // xl: "1280px",
      },
    },
  },
  plugins: [],
};

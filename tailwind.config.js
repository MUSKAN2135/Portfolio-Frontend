// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Common sans-serif
        serif: ['Georgia', 'Times New Roman', 'serif'], // Common serif
        mono: ['Courier New', 'Monaco', 'monospace'], // Monospace fonts
        roboto: ['Roboto', 'Arial', 'sans-serif'], // Google Font example
        openSans: ['"Open Sans"', 'Arial', 'sans-serif'], // Google Font example
        poppins: ['Poppins', 'Arial', 'sans-serif'], // Google Font example
        montserrat: ['Montserrat', 'Arial', 'sans-serif'], // Google Font example
        lato: ['Lato', 'Arial', 'sans-serif'], // Google Font example
        TimesNewRoman: ['Times New Roman']
      },
    },
  },
  plugins: [],
}

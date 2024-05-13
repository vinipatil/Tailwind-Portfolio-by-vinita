// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'], // Enable PurgeCSS to remove unused styles in production
  darkMode: false, // Disable dark mode (change to true if needed)
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2', // Define a custom primary color
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'], // Extend opacity variants to include 'disabled' state
    },
  },
  plugins: [
    // Add any custom plugins here if needed
  ],
};
 
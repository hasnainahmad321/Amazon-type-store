// Import required modules
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  // Specify the plugins to use
  plugins: [
    tailwindcss(), // Initializes Tailwind CSS
    autoprefixer(), // Adds vendor prefixes to CSS rules
  ],
};

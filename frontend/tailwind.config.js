/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Look for classes in all JavaScript/TypeScript files within the src directory
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

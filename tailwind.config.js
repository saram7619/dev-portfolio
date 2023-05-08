/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#151515",
      green: "#4EE1A0",
      gray: "#242424",
      white: "#FFFFFF",
      error: "#E11D48",
      active: "#4EE1A0",
      "white-2": "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
}

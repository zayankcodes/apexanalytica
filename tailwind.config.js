export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
      },
      colors: {
        primary: "#031225",          // deep navy
        "primary-light": "#0a233d",  // slightly lighter card bg
        accent: "#0051ff",           // electric blue
      },
      animation: {
        "spin-slower": "spin 80s linear infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
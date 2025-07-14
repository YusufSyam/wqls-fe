/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      secondary: "#d4d3e7",
      error: "#FF2C56",
      "primary-text": "#334155",
      "secondary-text": "#808fa4",
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      lgp: 17,
      xl: 20,
      "2xl": 24,
      "3xl": 28,
      "4xl": 32,
      "5xl": 40,
      "6xl": 48,
      "8xl": 54,
      "10xl": 80,
    },
    letterSpacing: {
      1: "0.001em",
      2: "0.0015em",
      3: "0.0025em",
      4: "0.004em",
      5: "0.01em",
    },
    dropShadow: {
      1: "0px 1px 4px rgba(0, 0, 0, 0.12)",
      2: "drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]",
    },
  },
  plugins: [],
};

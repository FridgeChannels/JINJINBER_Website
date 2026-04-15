/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e3a5f",
          900: "#152a45",
          950: "#0a1628",
        },
        accent: {
          DEFAULT: "#f97316",
          dark: "#c2410c",
          glow: "#fb923c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Satoshi",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(12, 39, 71, 0.08), inset 0 1px 0 rgba(255,255,255,0.65)",
        "glass-hover":
          "0 16px 48px rgba(12, 39, 71, 0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
        button: "0 10px 28px rgba(30, 58, 95, 0.35)",
        glow: "0 0 40px rgba(249, 115, 22, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "aura-breathe": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.06)" },
        },
        "aura-drift": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(28px, -18px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "aura-breathe": "aura-breathe 9s ease-in-out infinite",
        "aura-drift": "aura-drift 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

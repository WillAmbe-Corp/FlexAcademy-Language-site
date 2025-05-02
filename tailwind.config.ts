// File: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // animations
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-right": "fadeInRight 0.8s ease-out",
        pulse: "pulse 2s infinite",
        "slide-in": "slideIn 0.3s ease-out", //animation for mobile menus
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(0, 123, 255, 0.3)" },
          "70%": { boxShadow: "0 0 0 10px rgba(0, 123, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0, 123, 255, 0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      colors: {
        primary: "#007bff", 
        secondary: "#6c757d",
        success: "#28a745", 
        danger: "#dc3545",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      spacing: {
        96: "24rem", // Custom spacing value
      },
    },
  },
  plugins: [],
};

export default config;
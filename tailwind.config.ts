import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "slide-down": "slideDown 1s cubic-bezier(.165,.84,.4,1)",
        "slide-up": "slideUp 1s cubic-bezier(.165,.84,.4,1)",
        "slide-in-left": "slideInLeft 1s cubic-bezier(.165,.84,.4,1)",
        "slide-in-right": "slideInRight 1.5s cubic-bezier(.165,.84,.4,1)",
        "open-circle": "openCircle 2s cubic-bezier(.165,.84,.4,1)",
        "scale-up-y": "scaleUpY 0.7s ease-in-out infinite",
        rotate: "rotate 2s linear infinite",
        "rain-drop": "rainDrop 1s linear infinite",
        "snow-drop": "snowDrop 1.5s linear infinite",
        marquee: "marquee 100s linear infinite",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        openCircle: {
          "0%": { clipPath: "circle(0.0% at 50% 50%)" },
          "50%": { clipPath: "circle(30.0% at 50% 50%)" },
          "100%": { clipPath: "circle(100.0% at 50% 50%)" },
        },
        scaleUpY: {
          "0%": { gridRow: "span 1 / span 1" },
          "100%": { gridRow: "span 2 / span 2" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(72deg)" },
          "40%": { transform: "rotate(144deg)" },
          "60%": { transform: "rotate(216deg)" },
          "80%": { transform: "rotate(288deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rainDrop: {
          "0%": {
            transform: "translateY(0) translateX(0) skewX(-10deg)",
            opacity: "1.0",
          },
          "100%": {
            transform: "translateY(100%) translateX(-10%) skewX(-10deg)",
            opacity: "0",
          },
        },
        snowDrop: {
          "0%": {
            transform: "translateY(0) translateX(0) skewX(-20deg)",
            opacity: "1.0",
          },
          "20%": {
            transform: "translateY(0) translateX(-20%) skewX(-20deg)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(50%) translateX(0) skewX(-20deg)",
            opacity: "0.5",
          },
          "80%": {
            transform: "translateY(80%) translateX(20%) skewX(-20deg)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(100%) translateX(0) skewX(-20deg)",
            opacity: "0",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animationDelay: {
        250: "250ms",
        750: "750ms",
      },
    },
  },
  plugins: [],
};
export default config;

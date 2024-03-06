import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        // Add your custom background colors here
        "custom-bg-light": "#FFF6F0",
        "custom-bg-white": "#FFFFFF",
        "custom-bg-button": "#FF6600",
        "custom-bg-nav": "#0071DC",
        "custom-bg-nav-button": "#004F9A",
        // You can add as many custom colors as you need
      },
      textColor: {
        // Add your custom typography colors here
        "custom-text": "#000100",
        "custom-btn-text": "#ffffff",

        // You can add as many custom colors as you need
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

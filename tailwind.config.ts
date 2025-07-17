import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    screens: {
      sm: "640px",
      md: "745px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        gray: {
          100: "#F9FAFC",
          200: "#D3D5D9",
          300: "#93979F",
          400: "#20242C",
          500: "#16181D",
          600: "#14161A",
          700: "#101216",
          800: "#0B0C0F",
        },
        black: {
          100: "#1E272F",
          800: "#000000",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      fontSize: {
        // Headings - PT Sans Caption
        "heading-xl": [
          "72px",
          { lineHeight: "100%", fontWeight: "900", letterSpacing: "0.6px" },
        ],
        "heading-lg": [
          "48px",
          { lineHeight: "100%", fontWeight: "900", letterSpacing: "0.6px" },
        ],
        "heading-md": [
          "34px",
          { lineHeight: "100%", fontWeight: "900", letterSpacing: "0.6px" },
        ],

        // Body
        "body-lg": [
          "18px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0.6px" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0.6px" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0.6px" },
        ],
        "body-xs": [
          "12px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0.6px" },
        ],

        // Body Header
        "body-header": [
          "16px",
          { lineHeight: "100%", fontWeight: "700", letterSpacing: "0.6px" },
        ],

        // Body Stats
        "body-stats": [
          "34px",
          { lineHeight: "100%", fontWeight: "700", letterSpacing: "0.6px" },
        ],

        // Action
        "action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
        "action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config

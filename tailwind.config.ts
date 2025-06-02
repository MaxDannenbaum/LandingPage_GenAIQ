import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Primary Colors
        primary: {
          DEFAULT: "#FF3D47", // BP Red
          deep: "#330000", // Deep Red
          foreground: "#FFFFFF", // White
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#CC2931", // R60
          light: "#FFA3A8", // R30
          lighter: "#FFBDC0", // R20
          foreground: "#FFFFFF",
        },
        // Gray Colors
        gray: {
          DEFAULT: "#98847A", // G50
          light: "#CCC1BC", // G30
          lighter: "#FAF8F7", // G10
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#CCC1BC", // G30
          foreground: "#98847A", // G50
        },
        accent: {
          DEFAULT: "#FFA3A8", // R30
          foreground: "#000000", // Black
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Approved color palette
        "bp-red": "#FF3D47",
        "deep-red": "#330000",
        r60: "#CC2931",
        r30: "#FFA3A8",
        r20: "#FFBDC0",
        g50: "#98847A",
        g30: "#CCC1BC",
        g10: "#FAF8F7",
        black: "#000000",
        white: "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

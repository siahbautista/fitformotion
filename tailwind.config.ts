import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#000000",

            primary: {
              100: "#F4FFCC",
              200: "#E6FF99",
              300: "#D4FF66",
              400: "#C3FF3F",
              500: "#A6FF00",
              600: "#86DB00",
              700: "#6AB700",
              800: "#509300",
              900: "#3E7A00",
              foreground: "#000000",
              DEFAULT: "#A6FF00",
            },

            secondary: {
              100: "#D0F9FE",
              200: "#A1EDFE",
              300: "#72DCFE",
              400: "#4FC8FD",
              500: "#00A5FF",
              600: "#1083D8",
              700: "#0B62B5",
              800: "#074592",
              900: "#043178",
              DEFAULT: "#00A5FF",
            },

            success: {
              100: "#E8FEE0",
              200: "#CCFDC1",
              300: "#AAFAA1",
              400: "#89F588",
              500: "#62EF6E",
              600: "#47CD5F",
              700: "#31AC52",
              800: "#1F8A45",
              900: "#12723D",
              DEFAULT: "#62EF6E",
            },

            warning: {
              100: "#FFFCD0",
              200: "#FFF8A1",
              300: "#FFF373",
              400: "#FFEE50",
              500: "#FFEA07",
              600: "#DBC410",
              700: "#B7A20B",
              800: "#938007",
              900: "#7A6904",
              DEFAULT: "#FFEA07",
            },

            danger: {
              100: "#FFE7D3",
              200: "#FFC9A8",
              300: "#FFA47C",
              400: "#FF805C",
              500: "#f11450",
              600: "#DB291B",
              700: "#B71314",
              800: "#930C17",
              900: "#7A071A",
              DEFAULT: "#f11450",
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ffffff",

            primary: {
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
              foreground: "#000000",
              DEFAULT: "#fff",
            },

            secondary: {
              100: "#ffe4e6",
              200: "#fecdd3",
              300: "#fda4af",
              400: "#fb7185",
              500: "#f43f5e",
              600: "#e11d48",
              700: "#be123c",
              800: "#9f1239",
              900: "#881337",
              DEFAULT: "#00A5FF",
            },

            success: {
              100: "#E8FEE0",
              200: "#CCFDC1",
              300: "#AAFAA1",
              400: "#89F588",
              500: "#62EF6E",
              600: "#47CD5F",
              700: "#31AC52",
              800: "#1F8A45",
              900: "#12723D",
              DEFAULT: "#62EF6E",
            },

            warning: {
              100: "#FFFCD0",
              200: "#FFF8A1",
              300: "#FFF373",
              400: "#FFEE50",
              500: "#FFEA07",
              600: "#DBC410",
              700: "#B7A20B",
              800: "#938007",
              900: "#7A6904",
              DEFAULT: "#FFEA07",
            },

            danger: {
              100: "#FFE7D3",
              200: "#FFC9A8",
              300: "#FFA47C",
              400: "#FF805C",
              500: "#f11450",
              600: "#DB291B",
              700: "#B71314",
              800: "#930C17",
              900: "#7A071A",
              DEFAULT: "#f11450",
            },
          },
        },
      },
    }),
  ],
};

export default config;

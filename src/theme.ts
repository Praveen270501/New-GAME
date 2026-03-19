import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      bg: { base: "white", _dark: "#121212" },
      color: { base: "gray.800", _dark: "whiteAlpha.900" },
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        // Search input
        "input.bg": {
          value: { base: "{colors.gray.100}", _dark: "#2a2a2a" },
        },
        "input.border": {
          value: { base: "{colors.gray.300}", _dark: "#3a3a3a" },
        },
        "input.placeholder": {
          value: { base: "{colors.gray.400}", _dark: "#6c6c6c" },
        },
        // Dropdowns (Platforms, Order by)
        "dropdown.bg": {
          value: { base: "{colors.gray.100}", _dark: "#2a2a2a" },
        },
        "dropdown.border": {
          value: { base: "{colors.gray.300}", _dark: "#3a3a3a" },
        },
        "dropdown.hover": {
          value: { base: "{colors.gray.200}", _dark: "#3a3a3a" },
        },
        // Navbar
        "navbar.bg": {
          value: { base: "white", _dark: "#1a1a1a" },
        },
        "navbar.border": {
          value: { base: "{colors.gray.200}", _dark: "#2a2a2a" },
        },
        // Sidebar
        "sidebar.bg": {
          value: { base: "{colors.gray.50}", _dark: "#1a1a1a" },
        },
        "sidebar.hover": {
          value: { base: "{colors.gray.100}", _dark: "#2a2a2a" },
        },
        // Card
        "card.bg": {
          value: { base: "white", _dark: "#1f1f1f" },
        },
        "card.border": {
          value: { base: "{colors.gray.200}", _dark: "#2a2a2a" },
        },
        // Text
        "text.muted": {
          value: { base: "{colors.gray.600}", _dark: "{colors.gray.400}" },
        },
      },
    },
    tokens: {
      colors: {
        gray: {
          50: { value: "#f9f9f9" },
          100: { value: "#ededed" },
          200: { value: "#d3d3d3" },
          300: { value: "#b3b3b3" },
          400: { value: "#a0a0a0" },
          500: { value: "#898989" },
          600: { value: "#6c6c6c" },
          700: { value: "#4a4a4a" },
          800: { value: "#2d2d2d" },
          900: { value: "#1a1a1a" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

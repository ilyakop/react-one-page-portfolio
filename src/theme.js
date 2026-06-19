import { extendTheme } from "@chakra-ui/react";

const colors = {
  bg: "#0D0D0D",
  surface: "#141414",
  surfaceHover: "#1A1A1A",
  border: "#1F1F1F",
  borderStrong: "#2A2A2A",
  accent: "#6EE7B7",
  accent2: "#A78BFA",
  body: "#E5E7EB",
  muted: "#6B7280",
};

const theme = extendTheme({
  colors: {
    brand: colors,
  },
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: colors.bg,
        color: colors.body,
      },
      "*": {
        borderColor: colors.border,
      },
      a: {
        color: colors.accent,
      },
      "*:focus-visible": {
        outline: `2px solid ${colors.accent}`,
        outlineOffset: "2px",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;

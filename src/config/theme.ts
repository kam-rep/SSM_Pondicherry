export const theme = {
  colors: {
    primary: "#6B4F3A",
    primaryDark: "#4A3527",

    secondary: "#F7F3EF",

    accent: "#C89B3C",

    background: "#FFFFFF",
    backgroundDark: "#1C1A18",

    text: "#222222",
    textMuted: "#6B6B6B",
    textLight: "#FFFFFF",

    border: "#E5E0DB",
  },

  typography: {
    heading: "font-serif",
    body: "font-sans",
  },

  radius: {
    small: "6px",
    medium: "12px",
    large: "20px",
    pill: "9999px",
  },

  shadow: {
    small: "0 4px 12px rgba(0, 0, 0, 0.08)",
    medium: "0 8px 30px rgba(0, 0, 0, 0.10)",
    large: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },
} as const;
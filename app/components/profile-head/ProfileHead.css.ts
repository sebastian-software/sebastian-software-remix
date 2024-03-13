import { style } from "@vanilla-extract/css";

export const rootClass = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

export const nameClass = style({
  fontSize: "2rem",
  letterSpacing: "0.1em",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  textDecoration: "underline",
  marginBottom: "2rem",
});

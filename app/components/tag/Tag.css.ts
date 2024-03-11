import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  fontSize: "0.75rem",
  textTransform: "uppercase",
});

export const root = style({
  border: "1px solid #666",
  background: "#ddd",
  display: "inline-block",
  paddingInline: "0.5rem",
  lineHeight: "2",
  borderRadius: "0.5rem",
});

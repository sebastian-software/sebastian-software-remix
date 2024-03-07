import { style } from "@vanilla-extract/css";

export const root = style({
  background: "#888",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBlock: "1rem",
});

export const navigation = style({});

export const navigationList = style({
  display: "flex",
  gap: "0.5rem",
  listStyle: "none",
});

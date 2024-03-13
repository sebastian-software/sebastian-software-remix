import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

export const project = style({
  display: "grid",
});

export const role = style({
  fontWeight: "normal",
  display: "block",
  fontSize: "1.25rem",
  background: "#cff",
  textTransform: "uppercase",
  width: "fit-content",
  letterSpacing: "0.05em",
  paddingInline: "0.5rem",
  lineHeight: "2",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  lineHeight: "1.25",
  letterSpacing: "-0.05em",
  textWrap: "balance",
});

export const description = style({
  border: "1px solid red",
  maxWidth: "60ch",
  hyphens: "auto",
  hyphenateLimitChars: "12 5 5",
});

export const testimonials = style({
  border: "1px solid green",
  fontSize: "0.875rem",
  maxWidth: "45ch",
  lineHeight: "1.25",
  hyphens: "auto",
  hyphenateLimitChars: "12 5 5",
});

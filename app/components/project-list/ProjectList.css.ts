import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

export const project = style({
  display: "grid",
  maxWidth: "max-content",
  marginInline: "auto",
  gap: "1rem 4rem",
  gridTemplateColumns: "12rem auto auto",
  gridTemplateAreas: `
    ". title title"
    "meta description testimonials"
  `,

  "@media": {
    "(max-width: 960px)": {
      gridTemplateColumns: "auto",
      gridTemplateAreas: `
        "title"
        "meta"
        "description"
        "testimonials"
      `,
    },
  },
});

export const title = style({
  gridArea: "title",
  fontSize: "2rem",
  fontWeight: "bold",
  lineHeight: "1.25",
  letterSpacing: "-0.05em",
  textWrap: "balance",
  color: "#222",
});

export const role = style({
  fontWeight: "normal",
  display: "block",
  fontSize: "1rem",
  background: "#cff",
  textTransform: "uppercase",
  width: "fit-content",
  letterSpacing: "0.05em",
  paddingInline: "0.5rem",
  lineHeight: "2",
  marginBottom: "0.5rem",
});

export const meta = style({
  gridArea: "meta",
});

export const period = style({});

export const customer = style({});

export const technologies = style({});

export const description = style({
  gridArea: "description",
  maxWidth: "60ch",
  hyphens: "auto",
  hyphenateLimitChars: "12 5 5",
});

export const testimonials = style({
  gridArea: "testimonials",
  display: "flex",
  flexDirection: "column",
  color: "#532447",
  gap: "1rem",
  fontSize: "0.875rem",
  width: "45ch",
  hyphens: "auto",
  hyphenateLimitChars: "12 5 5",
});

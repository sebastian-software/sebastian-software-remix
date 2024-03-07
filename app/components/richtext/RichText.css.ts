import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({});

globalStyle(`${root} h1`, {
  fontWeight: "bold",
  fontSize: "2.5rem",
});

globalStyle(`${root} h2`, {
  fontWeight: "bold",
  fontSize: "1.5rem",
});

globalStyle(`${root} p`, {
  marginBlock: "1rem",
});

globalStyle(`${root} ol`, {
  marginBlock: "1rem",
  marginLeft: "2rem",
});

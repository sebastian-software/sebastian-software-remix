import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"

export const rootClass = style({
  background: "#2A1B28",
  paddingBlock: "6rem",
  paddingInline: "4vw",

  "@media": {
    "(max-width: 800px)": {
      paddingInline: "8vw"
    }
  }
})

export const titleClass = style({
  fontFamily: elenaWebfont,
  fontSize: "4rem",
  textDecoration: "underline",
  textUnderlineOffset: "0.2em",
  textDecorationThickness: "from-font",
  color: "white",
  marginBottom: "2rem",

  "@media": {
    "(max-width: 800px)": {
      fontSize: "2rem"
    }
  }
})

export const listClass = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
  gap: "4rem",
  alignItems: "center",

  "@media": {
    "(max-width: 800px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(7rem, 1fr))",
      gap: "2rem"
    }
  }
})

export const itemClass = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none",
  flexShrink: 0
})

export const logoClass = style({
  maxHeight: "3rem",
  width: "100%",
  objectFit: "contain",
  objectPosition: "center"
})

import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"

export const rootClass = style({
  background: "#2A1B28",
  paddingBlock: "6rem",
  paddingInline: "4vw"
})

export const titleClass = style({
  fontFamily: elenaWebfont,
  fontSize: "2rem"
})

export const logoClass = style({
  maxWidth: "10rem",
  height: "4rem"
})

export const listClass = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
  alignItems: "center"
})

export const itemClass = style({
  listStyle: "none",
  flexShrink: 0
})

import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"

export const rootClass = style({
  background: "#2A1B28",
  paddingBlock: "6rem",
  paddingInline: "4vw"
})

export const titleClass = style({
  fontFamily: elenaWebfont,
  fontSize: "2rem",
  color: "white"
})

export const logoClass = style({
  width: "100%",
  maxHeight: "4rem"
})

export const listClass = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "4rem",
  alignItems: "center"
})

export const itemClass = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none",
  flexShrink: 0
})

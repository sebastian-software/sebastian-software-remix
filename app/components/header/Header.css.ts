import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const vivaMagenta = buildSpectrum("BB2649")

export const root = style({
  background: `linear-gradient(to bottom, ${vivaMagenta["0"]}, ${vivaMagenta["-2"]} )`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBlock: "1rem"
})

export const navigation = style({})

export const navigationList = style({
  display: "flex",
  gap: "0.5rem",
  listStyle: "none"
})

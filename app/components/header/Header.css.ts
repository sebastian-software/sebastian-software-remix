import { buildShades, buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const vivaMagenta = buildSpectrum("BB2649")
const darkViolet = buildShades("#000", "#534f60")
const brightViolet = buildShades("#fff", "#534f60")

console.log(darkViolet)

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

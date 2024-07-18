import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const darkViolet = buildSpectrum("3F2B3D")

export const root = style({
  background: darkViolet["-2"],
  color: darkViolet["+5"],
  paddingInline: "2vw",
  paddingBlock: "1rem",
  display: "flex",
  gap: "0.5rem"
})

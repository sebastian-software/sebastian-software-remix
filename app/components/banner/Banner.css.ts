import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const darkViolet = buildSpectrum("3F2B3D")

export const root = style({
  background: `linear-gradient(to bottom, ${darkViolet["+2"]}, ${darkViolet["0"]})`,
  color: "white",
  paddingInline: "4rem",
  paddingBlock: "8rem",
  fontSize: "5rem",
  lineHeight: "1.15",
  textWrap: "balance"
})

import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const darkViolet = buildSpectrum("3F2B3D")

export const root = style({
  background: darkViolet["0"],

  textRendering: "optimizeLegibility",

  color: "white",
  paddingInline: "4rem",
  paddingBlock: "6rem",
  fontSize: "5rem",
  lineHeight: "1.15",
  textWrap: "balance"
})

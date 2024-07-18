import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const darkViolet = buildSpectrum("3F2B3D")

export const root = style({
  color: darkViolet["0"],
  flexGrow: 1
})

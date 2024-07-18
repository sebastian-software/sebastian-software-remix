import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const gold = buildSpectrum("C89F6B")

export const root = style({
  background: gold["0"],
  color: "white",
  textDecoration: "none",
  border: "1px solid white",
  borderColor: gold["-5"],
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  display: "inline-block",
  borderRadius: "0.5rem",
  cursor: "default"
})

import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const gold = buildSpectrum("C89F6B")

export const root = style({
  background: `linear-gradient(to bottom, ${gold["+5"]}, ${gold["0"]} 50%, ${gold["0"]} 50%, ${gold["-5"]})`,
  color: "white",
  textDecoration: "none",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  display: "inline-block",
  borderRadius: "0.75rem",
  cursor: "default"
})

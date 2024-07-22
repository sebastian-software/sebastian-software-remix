import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const gold = buildSpectrum("C89F6B")
const magenta = buildSpectrum("C50044")

export const root = style({
  background: `linear-gradient(to bottom, ${magenta["+5"]}, ${magenta["0"]} 50%, ${magenta["0"]} 50%, ${magenta["-5"]})`,
  color: "white",
  fontSize: "0.75rem",
  textDecoration: "none",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  display: "inline-block",
  borderRadius: "0.5rem",
  cursor: "default"
})

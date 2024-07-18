import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const gold = buildSpectrum("C89F6B")

export const root = style({
  border: "1px solid",
  background: "white",
  borderColor: "white",
  padding: "2rem",
  borderRadius: "0.5rem"
})

export const title = style({
  fontWeight: "bold",
  fontSize: "1.5rem"
})

export const content = style({
  paddingBlock: "1rem"
})

export const footer = style({
  display: "flex",
  flexDirection: "row"
})

export const container = style({
  background: `radial-gradient(at left top, ${gold["+5"]}, ${gold["0"]})`,
  display: "flex",
  gap: "2rem",
  padding: "4rem"
})

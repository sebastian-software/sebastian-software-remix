import { buildShades, buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"

const gold = buildSpectrum("C89F6B")
const goldShades = buildShades("#fff", "C89F6B")

export const root = style({
  width: "40ch",
  border: "1px solid",
  background: `radial-gradient(at right bottom, ${goldShades[3]}, white)`,
  borderColor: "white",
  padding: "2rem",
  borderRadius: "0.5rem",
  boxShadow: "0px 0px 0.5rem rgba(0, 0, 0, 0.2)"
})

export const title = style({
  fontFamily: elenaWebfont,
  fontSize: "2rem"
})

export const content = style({
  paddingBlock: "1rem",
  fontFamily: elenaWebfont
})

export const footer = style({
  display: "flex",
  flexDirection: "row"
})

export const container = style({
  background: `radial-gradient(at left top, ${gold["+5"]}, ${gold["0"]})`,
  display: "flex",
  gap: "2.5rem",
  paddingBlock: "4rem",
  paddingInline: "10rem"
})

import { buildShades, buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"

const gold = buildSpectrum("C89F6B")
const magenta = buildSpectrum("C50044")
const goldShades = buildShades("#fff", "C89F6B")
const darkViolet = buildSpectrum("3F2B3D")
const violetShades = buildShades("#fff", "3F2B3D")
const tealSpectrum = buildSpectrum("22404B")

export const root = style({
  width: "40ch",
  borderRadius: "0.5rem",

  color: violetShades[4],
  position: "relative",

  selectors: {
    "&:not(:first-child)::before": {
      content: " ",
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent 80%, transparent)",
      position: "absolute",
      top: "0",
      left: "-3rem",
      width: "1px",
      height: "100%"
    }
  }
})

export const title = style({
  fontFamily: elenaWebfont,
  fontSize: "2.5rem"
})

export const content = style({
  paddingBlock: "1rem",
  hyphens: "auto"
})

export const footer = style({
  display: "flex",
  flexDirection: "row"
})

export const container = style({
  background: `linear-gradient(to bottom, ${darkViolet["-2"]}, ${darkViolet["0"]})`,
  display: "flex",
  gap: "6rem",
  paddingBlock: "4rem",
  paddingInline: "10rem"
})

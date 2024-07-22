import { buildShades, buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"
import bannerImage from "./assets/566ak-gen1.jpg"

const darkViolet = buildSpectrum("3F2B3D")
const goldShades = buildShades("#fff", "C89F6B")

export const rootClass = style({
  backgroundImage: `url(${bannerImage})`,
  backgroundPosition: "center",
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  color: "white",
  height: "35vw"
})

export const contentClass = style({
  fontFamily: elenaWebfont,
  fontSize: "3vw",
  color: goldShades[4],
  lineHeight: "1.2",
  textWrap: "balance",
  maxWidth: "50ch",
  marginInline: "auto",
  paddingTop: "24vw"
})

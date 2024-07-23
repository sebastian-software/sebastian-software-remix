import { buildSpectrum } from "@effective/color"
import { dropShadow } from "@effective/shadow"
import { globalStyle, style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"
import bannerImage from "./assets/566ak-gen1.jpg"

const darkViolet = buildSpectrum("3F2B3D")

export const rootClass = style({
  backgroundImage: `linear-gradient(to bottom, transparent, transparent 50%, ${darkViolet["-2"]} 95%), url(${bannerImage})`,
  backgroundPosition: "top, center",
  backgroundSize: "auto, auto 35vw",
  backgroundRepeat: "repeat, no-repeat",
  color: "white",
  height: "35vw",

  // TODO: how to remove @typescript-eslint/no-magic-numbers
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  filter: dropShadow[3]
})

export const contentClass = style({
  fontFamily: elenaWebfont,
  fontSize: "3vw",
  lineHeight: "1.2",
  textWrap: "balance",
  maxWidth: "50ch",
  marginInline: "auto",
  paddingTop: "23vw"
})

globalStyle(`${contentClass} em`, {
  color: "#C50044",
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  textUnderlineOffset: "0.2em"
})

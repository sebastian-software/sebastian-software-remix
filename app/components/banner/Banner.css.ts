import { style } from "@vanilla-extract/css"

import { elenaWebfont } from "../fonts/elena/Elena.css"
import bannerImage from "./assets/566ak-gen1.jpg"

export const rootClass = style({
  backgroundImage: `linear-gradient(to bottom, transparent 40%, #3F2B3D), url(${bannerImage})`,
  backgroundPosition: "top, center",
  backgroundSize: "auto, auto 100%",
  backgroundRepeat: "repeat, no-repeat",
  color: "white",
  height: "35vw"
})

export const contentClass = style({
  fontFamily: elenaWebfont,
  fontSize: "3vw",
  lineHeight: "1.2",
  textWrap: "balance",
  maxWidth: "50ch",
  marginInline: "auto",
  paddingTop: "25vw"
})

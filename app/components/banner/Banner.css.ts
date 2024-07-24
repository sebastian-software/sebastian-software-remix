import { dropShadow } from "@effective/shadow"
import { globalStyle, style } from "@vanilla-extract/css"

import { variables } from "~/theme.css"

import { elenaWebfont } from "../fonts/elena/Elena.css"

export const rootClass = style({
  backgroundColor: variables.color.darkViolet,
  position: "relative",
  filter: dropShadow[3]
})

export const imageClass = style({
  width: "100%"
})

export const contentClass = style({
  position: "absolute",
  bottom: 0,
  paddingBlock: "4vw",
  paddingInline: "4vw",
  color: "white",
  fontFamily: elenaWebfont,
  fontSize: "max(3vw, 1.25rem)",
  fontWeight: 200,
  lineHeight: "1.2",
  textWrap: "balance",
  backgroundImage: `linear-gradient(to bottom, transparent, ${variables.color.darkViolet} 95%)`
})

globalStyle(`${contentClass} em`, {
  color: "#C50044",
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  textUnderlineOffset: "0.2em"
})

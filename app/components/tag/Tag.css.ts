import { boxShadow } from "@effective/shadow"
import { style } from "@vanilla-extract/css"

import { variables } from "~/theme.css"

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  fontSize: "0.75rem"
})

export const root = style({
  background: `linear-gradient(to bottom, ${variables.color.gold}, ${variables.color.darkGold})`,
  color: variables.color.white,
  boxShadow: boxShadow[1],
  display: "inline-block",
  paddingInline: "0.75rem",
  lineHeight: "2.5",
  borderRadius: "0.5rem"
})

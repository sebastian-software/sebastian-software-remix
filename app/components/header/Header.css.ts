import { buildSpectrum } from "@effective/color"
import { dropShadow } from "@effective/shadow"
import { style } from "@vanilla-extract/css"

import { variables } from "~/theme.css"

const darkViolet = buildSpectrum("3F2B3D")

export const root = style({
  background: variables.color.darkViolet,
  color: variables.color.lightViolet,
  display: "flex",
  flexDirection: "row",
  gap: "4rem",
  alignItems: "center",
  paddingBlock: "1rem",
  paddingInline: "4vw",
  borderBottom: "1px solid",
  borderColor: variables.color.lightViolet,
  filter: dropShadow[5],
  zIndex: 1000
})

export const logoLink = style({
  flexShrink: 0
})

export const logo = style({
  height: "4rem"
})

export const spacer = style({
  flex: 1
})

export const navigation = style({
  fontSize: "0.875rem"
})

export const navigationList = style({
  display: "flex",
  gap: "1rem",
  listStyle: "none"
})

export const navigationItem = style({
  padding: "0.5rem",
  borderRadius: "0.5rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textUnderlineOffset: "0.3em",

  selectors: {
    "&:hover": {
      borderColor: "white",
      color: "white"
    }
  }
})

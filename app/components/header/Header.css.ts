import { buildSpectrum } from "@effective/color"
import { style } from "@vanilla-extract/css"

const darkViolet = buildSpectrum("3F2B3D")

export const root = style({
  // background: `linear-gradient(to bottom, ${vivaMagenta["0"]}, ${vivaMagenta["-2"]} )`,
  background: darkViolet["-2"],
  color: darkViolet["+5"],
  display: "flex",
  flexDirection: "row",
  gap: "4rem",
  alignItems: "center",
  paddingBlock: "1rem",
  paddingInline: "2rem"
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
  border: "1px solid red",
  borderColor: darkViolet["+5"],
  padding: "0.5rem",
  textDecoration: "none",
  borderRadius: "0.5rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",

  selectors: {
    "&:hover": {
      borderColor: "white",
      color: "white"
    }
  }
})

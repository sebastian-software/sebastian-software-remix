import { style } from "@vanilla-extract/css"

import { darkViolet, goldShades, violetShades } from "~/styles/colors"

import { elenaWebfont } from "../fonts/elena/Elena.css"

export const root = style({
  width: "40ch",
  border: "1px solid",

  // TODO: how to remove no-unsafe-assignment
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  background: `radial-gradient(at right bottom, ${goldShades[3]}, white)`,
  borderColor: "white",
  padding: "2rem",
  borderRadius: "0.5rem",

  // TODO: how to remove @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-magic-numbers
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

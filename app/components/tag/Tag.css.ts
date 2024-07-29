import { style } from "@vanilla-extract/css"

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  fontSize: "0.75rem",
  textTransform: "uppercase"
})

export const root = style({
  border: "1px solid #a58e9d",
  background: "#f9e0f1",
  color: "#776270",
  display: "inline-block",
  paddingInline: "0.75rem",
  lineHeight: "2",
  borderRadius: "0.5rem"
})

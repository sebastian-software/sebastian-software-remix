import { globalStyle, style } from "@vanilla-extract/css"

import { variables } from "~/theme.css"

export const titleStyle = style({
  paddingTop: "4vw",
  paddingLeft: "4vw",
  paddingRight: "4vw",
  textAlign: "center"
})

export const authorStyle = style({
  paddingBottom: "4vw",
  paddingTop: "0.5vw",
  textAlign: "center",
  display: "block"
})

export const rootStyle = style({
  background: variables.color.lightGold,
  padding: "4vw"
})

export const breadcrumbStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export const blogContentStyle = style({
  padding: "4vw"
})

globalStyle(`${blogContentStyle} img`, {
  maxWidth: "calc(100vw - 8vw)",
  maxHeight: "80vh",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "2rem"
})

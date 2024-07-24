import { style } from "@vanilla-extract/css"

export const rootClass = style({
  border: "1px solid red",
  position: "relative"
  // filter: "contrast(0) grayscale(1) saturate(1)",

  // selectors: {
  //   "x&::before": {
  //     backgroundColor: "#0c1f72",
  //     content: "",
  //     display: "block",
  //     width: "100%",
  //     height: "100%",
  //     mixBlendMode: "multiply",
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     zIndex: 1,
  //     opacity: 0.7
  //   },

  //   "x&::after": {
  //     backgroundColor: "#faa7ed",
  //     content: "",
  //     display: "block",
  //     width: "100%",
  //     height: "100%",
  //     mixBlendMode: "lighten",
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     zIndex: 1,
  //     opacity: 0.3
  //   }
  // }
})

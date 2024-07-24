import { buildSpectrum } from "@effective/color"
import { createTheme } from "@vanilla-extract/css"

const violet = "#3F2B3D"

const violetSpectrum = buildSpectrum(violet)
const darkViolet = violetSpectrum["-2"]
const lightViolet = violetSpectrum["+5"]

export const [themeClass, variables] = createTheme({
  color: {
    violet,
    darkViolet,
    lightViolet
  },
  font: {
    body: "arial"
  }
})

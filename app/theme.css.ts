import { buildShades, buildSpectrum } from "@effective/color"
import { createTheme } from "@vanilla-extract/css"

const violet = "#3F2B3D"
const gold = "#C89F6B"
const white = "#FFFFFF"

const violetSpectrum = buildSpectrum(violet)
const darkViolet = violetSpectrum["-2"]
const lightViolet = violetSpectrum["+5"]

const goldShades = buildShades(white, gold)
const veryLightGold = goldShades[1]
const lightGold = goldShades[4]

export const [themeClass, variables] = createTheme({
  color: {
    white,
    violet,
    darkViolet,
    lightViolet,
    veryLightGold,
    lightGold,
    gold
  },
  font: {
    body: "arial"
  }
})

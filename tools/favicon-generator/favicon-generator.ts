import fs from "node:fs/promises"

import icoEndec from "ico-endec"
import sharp from "sharp"

const ICO_SIZE = 32
const APPLE_SIZE = 180
const WEB_MANIFEST_192_SIZE = 192
const WEB_MANIFEST_512_SIZE = 512

const pngSettings: sharp.PngOptions = {
  compressionLevel: 9,
  progressive: true,
  quality: 100
}

const INPUT_SVG = "app/components/page/favicon/icon.svg"
const OUTPUT_ICO = "app/components/page/favicon/favicon.ico"
const OUTPUT_DEFAULT_ICO = "public/favicon.ico"
const APPLE_TOUCH_ICON = "app/components/page/favicon/apple-touch-icon.png"
const WEB_MANIFEST_192 = "app/components/page/favicon/icon-192.png"
const WEB_MANIFEST_512 = "app/components/page/favicon/icon-512.png"

async function faviconIcoGenerator(svgImage: sharp.Sharp) {
  const pngBuffer = await svgImage
    .resize(ICO_SIZE, ICO_SIZE, { fit: "contain" })
    .png({ compressionLevel: 0 })
    .toBuffer()

  const icoBuffer = icoEndec.encode([pngBuffer])

  await fs.writeFile(OUTPUT_ICO, icoBuffer)
  await fs.writeFile(OUTPUT_DEFAULT_ICO, icoBuffer)
}

async function faviconPngGenerator(
  svgImage: sharp.Sharp,
  filename: string,
  size: number
) {
  const pngBuffer = await svgImage
    .resize(size, size, { fit: "contain" })
    .png(pngSettings)
    .toBuffer()

  await fs.writeFile(filename, pngBuffer)
}

async function run() {
  const iconSvg = sharp(INPUT_SVG)

  await faviconIcoGenerator(iconSvg.clone())
  await faviconPngGenerator(iconSvg.clone(), APPLE_TOUCH_ICON, APPLE_SIZE)
  await faviconPngGenerator(
    iconSvg.clone(),
    WEB_MANIFEST_192,
    WEB_MANIFEST_192_SIZE
  )
  await faviconPngGenerator(iconSvg, WEB_MANIFEST_512, WEB_MANIFEST_512_SIZE)
}

await run()

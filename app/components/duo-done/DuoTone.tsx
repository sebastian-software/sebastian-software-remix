import { type PropsWithChildren, useId } from "react"

const hexToRgb = (hex) => {
  const bigint = Number.parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

export interface DuotoneFilterProps extends PropsWithChildren {
  readonly color1: string
  readonly color2: string
}

const createTransferTable = (startColor, endColor) => {
  const [sr, sg, sb] = hexToRgb(startColor)
  const [er, eg, eb] = hexToRgb(endColor)

  // Create a table for feComponentTransfer
  const createTableValues = (start, end) => {
    const values = []
    for (let index = 0; index <= 1; index += 0.1) {
      const value = start + index * (end - start)
      values.push(value / 255)
    }

    return values.join(" ")
  }

  return {
    rTable: createTableValues(sr, er),
    gTable: createTableValues(sg, eg),
    bTable: createTableValues(sb, eb)
  }
}

const createDuotoneMatrix = (color1, color2) => {
  const [r1, g1, b1] = hexToRgb(color1)
  const [r2, g2, b2] = hexToRgb(color2)

  // Normalize RGB values to [0, 1] range
  const nr1 = r1 / 255
  const ng1 = g1 / 255
  const nb1 = b1 / 255
  const nr2 = r2 / 255
  const ng2 = g2 / 255
  const nb2 = b2 / 255

  // Create a color matrix to transform the grayscale image to duotone
  const matrix = [
    nr1 - nr2,
    nr1 - nr2,
    nr1 - nr2,
    0,
    nr2,
    ng1 - ng2,
    ng1 - ng2,
    ng1 - ng2,
    0,
    ng2,
    nb1 - nb2,
    nb1 - nb2,
    nb1 - nb2,
    0,
    nb2,
    0,
    0,
    0,
    1,
    0
  ].join(" ")

  return matrix
}

export function DuoTone({
  color1 = "#ff0000",
  color2 = "#0000ff",
  children
}: DuotoneFilterProps) {
  const filterId = useId()
  const [r1, g1, b1] = hexToRgb(color1)
  const [r2, g2, b2] = hexToRgb(color2)
  const rgbMax = 255

  return (
    <div className="duotone">
      <svg style={{ display: "none" }}>
        <filter id={`black-to-white-${filterId}`}>
          {/* Convert to grayscale */}
          <feColorMatrix
            type="matrix"
            values="0.3333 0.3333 0.3333 0 0
                   0.3333 0.3333 0.3333 0 0
                   0.3333 0.3333 0.3333 0 0
                   0      0      0      1 0"
          />

          {/* Adjust brightness and contrast */}
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.3" intercept="-0.5" />
            <feFuncG type="linear" slope="1.3" intercept="-0.5" />
            <feFuncB type="linear" slope="1.3" intercept="-0.5" />
          </feComponentTransfer>

          {/* Invert all colors */}
          <feComponentTransfer>
            <feFuncR type="table" tableValues="1 0" />
            <feFuncG type="table" tableValues="1 0" />
            <feFuncB type="table" tableValues="1 0" />
          </feComponentTransfer>

          {/* Set the alpha (transparency) value */}
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" intercept="0" />
          </feComponentTransfer>
        </filter>
      </svg>
      <div
        style={{
          filter: ` url(#black-to-white-${filterId})`
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function GrayscaleTint({ tintColor, children }) {
  const filterId = useId()
  const [r, g, b] = hexToRgb(tintColor)

  return (
    <div
      className="simple-tint"
      style={{
        position: "relative",
        filter: "saturate(0) invert(1) contrast(0.8) brightness(2) opacity(0.5)"
      }}
    >
      {children}
    </div>
  )
}

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

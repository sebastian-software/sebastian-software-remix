import { type PropsWithChildren, useId } from "react"

const hexToRgb = (hex: string) => {
  return {
    r: Number.parseInt(hex.slice(1, 3), 16) / 255,
    g: Number.parseInt(hex.slice(3, 5), 16) / 255,
    b: Number.parseInt(hex.slice(5, 7), 16) / 255
  }
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
  const col1 = hexToRgb(color1)
  const col2 = hexToRgb(color2)

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

          {/* Map grayscale values to duotone colors */}
          <feComponentTransfer>
            <feFuncR type="table" tableValues={`${col1.r} ${col2.r}`} />
            <feFuncG type="table" tableValues={`${col1.g} ${col2.g}`} />
            <feFuncB type="table" tableValues={`${col1.b} ${col2.b}`} />
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

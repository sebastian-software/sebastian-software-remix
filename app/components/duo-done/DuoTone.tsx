import { type PropsWithChildren, useId } from "react"

const hexToRgb = (hex: string) => {
  return {
    r: Number.parseInt(hex.slice(1, 3), 16) / 255,
    g: Number.parseInt(hex.slice(3, 5), 16) / 255,
    b: Number.parseInt(hex.slice(5, 7), 16) / 255
  }
}

export interface DuotoneFilterProps extends PropsWithChildren {
  readonly duoStart: string
  readonly duoEnd: string
  readonly useInvert: boolean
  readonly useBoost: boolean
}

export function DuoTone({
  duoStart,
  duoEnd,
  useInvert,
  useBoost,
  children
}: DuotoneFilterProps) {
  const filterId = useId()
  const duoStartFields = duoStart && hexToRgb(duoStart)
  const duoEndFields = duoEnd && hexToRgb(duoEnd)

  const applyDuotone = duoStart && duoEnd

  return (
    <div className="duotone">
      <svg style={{ display: "none" }}>
        <filter id={`color-${filterId}`}>
          {/* Convert to grayscale */}
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />

          {/* Adjust brightness and contrast */}
          {useBoost && (
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" intercept="-0.5" />
              <feFuncG type="linear" slope="1.5" intercept="-0.5" />
              <feFuncB type="linear" slope="1.5" intercept="-0.5" />
            </feComponentTransfer>
          )}

          {/* Invert all colors */}
          {useInvert && (
            <feComponentTransfer>
              <feFuncR type="table" tableValues="1 0" />
              <feFuncG type="table" tableValues="1 0" />
              <feFuncB type="table" tableValues="1 0" />
            </feComponentTransfer>
          )}

          {/* Set the alpha (transparency) value */}
          {!applyDuotone && (
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
          )}

          {/* Map grayscale values to duotone colors */}
          {applyDuotone && (
            <feComponentTransfer>
              <feFuncR
                type="table"
                tableValues={`${duoStartFields.r} ${duoEndFields.r}`}
              />
              <feFuncG
                type="table"
                tableValues={`${duoStartFields.g} ${duoEndFields.g}`}
              />
              <feFuncB
                type="table"
                tableValues={`${duoStartFields.b} ${duoEndFields.b}`}
              />
            </feComponentTransfer>
          )}
        </filter>
      </svg>
      <div
        style={{
          filter: ` url(#color-${filterId})`
        }}
      >
        {children}
      </div>
    </div>
  )
}

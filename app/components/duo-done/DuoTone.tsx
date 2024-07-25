import { type PropsWithChildren, useId } from "react"

const hexToRgb = (hex: string) => {
  return {
    r: Number.parseInt(hex.slice(1, 3), 16) / 255,
    g: Number.parseInt(hex.slice(3, 5), 16) / 255,
    b: Number.parseInt(hex.slice(5, 7), 16) / 255
  }
}

export interface ContentEffectProps extends PropsWithChildren {
  readonly start?: string
  readonly end?: string
  readonly invert?: boolean
  readonly boost?: boolean
}

export function ContentEffect({
  start,
  end,
  invert = false,
  boost = false,
  children
}: ContentEffectProps) {
  const filterId = useId()
  const duoStartFields = start && hexToRgb(start)
  const duoEndFields = end && hexToRgb(end)

  const applyDuotone = start && end

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
          {boost && (
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" intercept="-0.5" />
              <feFuncG type="linear" slope="1.5" intercept="-0.5" />
              <feFuncB type="linear" slope="1.5" intercept="-0.5" />
            </feComponentTransfer>
          )}

          {/* Invert all colors */}
          {invert && (
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
          {duoStartFields && duoEndFields && (
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

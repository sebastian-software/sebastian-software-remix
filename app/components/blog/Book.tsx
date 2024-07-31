import type { PropsWithChildren } from "react"

export interface BookProps extends PropsWithChildren {
  // eslint-disable-next-line react/no-unused-prop-types
  readonly amazonId?: string
}

export function Book({ children }: BookProps) {
  return <p>{children}</p>
}

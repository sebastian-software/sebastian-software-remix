import type { PropsWithChildren } from "react"

export interface AmazonProps extends PropsWithChildren {
  // eslint-disable-next-line react/no-unused-prop-types
  readonly id: string
}

export function AmazonLink({ children }: AmazonProps) {
  return children
}

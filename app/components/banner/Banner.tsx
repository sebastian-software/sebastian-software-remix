import type { PropsWithChildren } from "react"

import { contentClass, rootClass } from "./Banner.css"

export interface BannerProps extends PropsWithChildren {
  // TODO: how to remove react/no-unused-prop-types
  // eslint-disable-next-line react/no-unused-prop-types
  readonly title: string
}

export function Banner({ children }: BannerProps) {
  return (
    <div className={rootClass}>
      <div className={contentClass}>{children}</div>
    </div>
  )
}

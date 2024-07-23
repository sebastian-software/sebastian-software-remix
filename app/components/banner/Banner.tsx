import type { PropsWithChildren } from "react"

import { contentClass, rootClass } from "./Banner.css"

export interface BannerProps extends PropsWithChildren {
  // readonly title: string
}

export function Banner({ children }: BannerProps) {
  return (
    <div className={rootClass}>
      <div className={contentClass}>{children}</div>
    </div>
  )
}

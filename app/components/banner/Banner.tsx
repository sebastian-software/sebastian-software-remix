import type { PropsWithChildren } from "react"

import { contentClass, rootClass, titleClass } from "./Banner.css"

export interface BannerProps extends PropsWithChildren {
  readonly title: string
}

export function Banner({ children, title }: BannerProps) {
  return (
    <div className={rootClass}>
      {title && <h1 className={titleClass}>{title}:</h1>}
      <div className={contentClass}>{children}</div>
    </div>
  )
}

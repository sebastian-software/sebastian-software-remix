import type { PropsWithChildren } from "react"

import { contentClass, imageClass, rootClass } from "./Banner.css"

export interface BannerProps extends PropsWithChildren {}

// 7000 x 3500
import bannerImageNarrow from "./assets/566ak-narrow.jpg"
// 10000 x 3500
import bannerImageOrig from "./assets/566ak-orig.jpg"
// 4800 x 3500
import bannerImagePortrait from "./assets/566ak-portrait.jpg"

export function Banner({ children }: BannerProps) {
  return (
    <div className={rootClass}>
      <div className={contentClass}>{children}</div>
      <picture>
        <source srcSet={bannerImageOrig} media="(min-width: 1000px)" />
        <source srcSet={bannerImageNarrow} media="(min-width: 500px)" />
        <img src={bannerImagePortrait} alt="Banner" className={imageClass} />
      </picture>
    </div>
  )
}

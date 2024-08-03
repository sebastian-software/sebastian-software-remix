import { Link } from "@remix-run/react"
import type { PropsWithChildren } from "react"

import { RichText } from "../richtext/RichText"
import {
  authorStyle,
  blogContentStyle,
  breadcrumbStyle,
  rootStyle,
  titleStyle
} from "./BlogLayout.css"

interface BlogLayoutProps extends PropsWithChildren {
  readonly title: string
  readonly author: string
  readonly date: Date
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const DATE_2_YEARS = 1000 * 60 * 60 * 24 * 365 * 2

export function BlogLayout({ children, title, author, date }: BlogLayoutProps) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  const dateDiff = Date.now() - date.getTime()
  const postIsOld = dateDiff > DATE_2_YEARS

  return (
    <RichText>
      <div className={rootStyle}>
        <div className={breadcrumbStyle}>
          <Link to="/blog">← Übersicht</Link>
          {postIsOld && (
            <div>
              Dieser Beitrag ist über zwei Jahre alt und könnte veraltete
              Informationen enthalten.
            </div>
          )}
        </div>
        <h1 className={titleStyle}>{title}</h1>
        <sub className={authorStyle}>
          (Geschrieben von {author} am{" "}
          {date.toLocaleDateString(undefined, options)})
        </sub>
      </div>
      <div className={blogContentStyle}>{children}</div>
    </RichText>
  )
}

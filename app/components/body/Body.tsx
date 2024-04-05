import type { PropsWithChildren } from "react"

import { root } from "./Body.css"

export function Body({ children }: PropsWithChildren) {
  return <body className={root}>{children}</body>
}

import type { PropsWithChildren } from "react"

import { container, content, footer, root, title } from "./Card.css"

export function Card({ children }: PropsWithChildren) {
  return <div className={root}>{children}</div>
}

export function CardTitle({ children }: PropsWithChildren) {
  return <div className={title}>{children}</div>
}

export function CardContent({ children }: PropsWithChildren) {
  return <div className={content}>{children}</div>
}

export function CardFooter({ children }: PropsWithChildren) {
  return <div className={footer}>{children}</div>
}

export function CardContainer({ children }: PropsWithChildren) {
  return <div className={container}>{children}</div>
}

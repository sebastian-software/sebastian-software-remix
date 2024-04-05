import { PropsWithChildren } from "react"
import { clsx } from "clsx"
import { root } from "./RichText.css"

export interface RichTextProps extends PropsWithChildren {
  className?: string
}

export function RichText({ children, className }: RichTextProps) {
  return <div className={clsx(root, className)}>{children}</div>
}

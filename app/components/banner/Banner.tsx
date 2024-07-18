import { root } from "./Banner.css"

export function Banner({ children }: PropsWithChildren) {
  return <div className={root}>{children}</div>
}

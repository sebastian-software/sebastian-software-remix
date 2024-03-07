import { PropsWithChildren } from "react";
import { root } from "./RichText.css";

export function RichText({ children }: PropsWithChildren) {
  return <div className={root}>{children}</div>;
}

import { PropsWithChildren } from "react";
import { list, root } from "./Tag.css";

export function TagList({ children }: PropsWithChildren) {
  return <ul className={list}>{children}</ul>;
}

export function Tag({ children }: PropsWithChildren) {
  return <li className={root}>{children}</li>;
}

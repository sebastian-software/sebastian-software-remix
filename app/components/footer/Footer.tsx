import { Link } from "@remix-run/react"

import { Spacer } from "../spacer/Spacer"
import { content, root } from "./Footer.css"

export function Footer() {
  return (
    <footer className={root}>
      <span>&copy; 2024 Sebastian Software GmbH</span>|
      <Link to="/imprint">Impressum</Link>
      <Spacer />
      <span>Gemacht mit ♥ in Mainz und Heidelberg</span>
    </footer>
  )
}

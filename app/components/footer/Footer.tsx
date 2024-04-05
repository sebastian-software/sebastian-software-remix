import { Link } from "@remix-run/react"
import { root, content } from "./Footer.css"
import { Spacer } from "../spacer/Spacer"

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

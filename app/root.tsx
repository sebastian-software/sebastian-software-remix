import "@effective/css-reset"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react"
import type { PropsWithChildren } from "react"

import { Body, Favicon, Footer, Header, Main } from "./components/page"

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <Favicon />
        <script defer data-domain="sebastian-software.de" src="https://t.sebastian-software.de/js/script.js" />
      </head>
      <Body>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </Body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

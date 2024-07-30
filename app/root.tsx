import "@effective/css-reset"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react"
import type { PropsWithChildren } from "react"

import { Body, FavIcon, Footer, Header, Main } from "./components/page"

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <FavIcon />
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

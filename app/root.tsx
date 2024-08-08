import "@effective/css-reset"

import { json } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react"
import { type PropsWithChildren } from "react"

import { Body, Favicon, Footer, Header, Main } from "./components/page"

export const loader = () => {
  /* eslint-disable @typescript-eslint/naming-convention */
  return json({
    ENV: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED
    }
  })
  /* eslint-enable @typescript-eslint/naming-convention */
}

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <Favicon />
        <script
          defer
          data-domain="sebastian-software.de"
          src="https://t.sebastian-software.de/js/script.js"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://sebastian-software.de/rss.xml"
        />
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { ENV } = useLoaderData<typeof loader>()

  return ENV.SANITY_STUDIO_STEGA_ENABLED ? (
    <>
      <Outlet />
      {/* <Suspense>
        <LiveVisualEditing />
      </Suspense> */}
    </>
  ) : (
    <Outlet />
  )

  // useWebVitals()
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { PropsWithChildren } from "react";
import { Header } from "./components/header/Header";

import "@effective/css-reset/dist/assets/ResetNative.css";
import "@effective/css-reset/dist/assets/SensibleEnhancements.css";
import { Footer } from "./components/footer/Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

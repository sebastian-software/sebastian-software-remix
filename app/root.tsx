import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { PropsWithChildren } from "react";
import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

import "@effective/css-reset/dist/assets/ResetNative.css";
import "@effective/css-reset/dist/assets/SensibleEnhancements.css";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Body>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </Body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

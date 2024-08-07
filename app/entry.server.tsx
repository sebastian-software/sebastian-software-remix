/* eslint-disable max-params  */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */

/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { PassThrough } from "node:stream"
import zlib from "node:zlib"

import type { AppLoadContext, EntryContext } from "@remix-run/node"
import { createReadableStreamFromReadable } from "@remix-run/node"
import { RemixServer } from "@remix-run/react"
import { isbot } from "isbot"
import { renderToPipeableStream } from "react-dom/server"

const ABORT_DELAY = 5000
const INTERNAL_SERVER_ERROR = 500
const DEFAULT_CACHE_TIME_SECS = 60

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  // This is ignored so we can keep it in the template for visibility.  Feel
  // free to delete this parameter in your app if you're not using it!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadContext: AppLoadContext
) {
  return isbot(request.headers.get("user-agent") ?? "")
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
}

async function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onAllReady() {
          shellRendered = true
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set("Content-Type", "text/html")
          responseHeaders.set(
            "Cache-Control",
            `public, max-age=${DEFAULT_CACHE_TIME_SECS}, s-maxage=${DEFAULT_CACHE_TIME_SECS}`
          )

          if (request.headers.get("Accept-Encoding")?.includes("br")) {
            responseHeaders.set("Content-Encoding", "br")
            const brotli = zlib.createBrotliCompress()
            pipe(brotli).pipe(body)
          } else if (request.headers.get("Accept-Encoding")?.includes("gzip")) {
            responseHeaders.set("Content-Encoding", "gzip")
            const gzip = zlib.createGzip()
            pipe(gzip).pipe(body)
          } else {
            pipe(body)
          }

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          )
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = INTERNAL_SERVER_ERROR
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error)
          }
        }
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}

async function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onShellReady() {
          shellRendered = true
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set("Content-Type", "text/html")
          responseHeaders.set(
            "Cache-Control",
            `public, max-age=${DEFAULT_CACHE_TIME_SECS}, s-maxage=${DEFAULT_CACHE_TIME_SECS}`
          )

          if (request.headers.get("Accept-Encoding")?.includes("br")) {
            responseHeaders.set("Content-Encoding", "br")
            const brotli = zlib.createBrotliCompress()
            pipe(brotli).pipe(body)
          } else if (request.headers.get("Accept-Encoding")?.includes("gzip")) {
            responseHeaders.set("Content-Encoding", "gzip")
            const gzip = zlib.createGzip()
            pipe(gzip).pipe(body)
          } else {
            pipe(body)
          }

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          )
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = INTERNAL_SERVER_ERROR
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error)
          }
        }
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}

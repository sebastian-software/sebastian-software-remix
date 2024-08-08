import { createClient } from "@sanity/client"
import { setServerClient } from "@sanity/react-loader"

import { dataset, projectId, stegaEnabled, studioUrl } from "./config"

// Do not import this into client-side components unless lazy-loaded
export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-03-20",
  stega: {
    enabled: stegaEnabled,
    studioUrl
  }
})

// We need to set the client used by `loadQuery` here, it only affects the server and ensures the browser bundle isn't bloated
setServerClient(client)

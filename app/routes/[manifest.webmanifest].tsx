// Create webmanifest file with processed icons
import { webmanifestIcons } from "~/components/page/favicon/FavIcon"

export const loader = () => {
  const icons = webmanifestIcons()

  // handle "GET" request
  // set up our text content that will be returned in the response
  const webmanifest = JSON.stringify({
    icons: [
      { src: icons.icon192, type: "image/png", sizes: "192x192" },
      { src: icons.icon512, type: "image/png", sizes: "512x512" }
    ]
  })
  // return the text content, a status 200 success response, and set the content type to text/plain
  return new Response(webmanifest, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

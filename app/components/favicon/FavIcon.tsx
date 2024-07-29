// Based upon https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs

import appleTouchIcon from "./apple-touch-icon.png"
import favIcon from "./favicon.ico"
import icon from "./icon.svg"
import icon192 from "./icon-192.png"
import icon512 from "./icon-512.png"

export function FavIcon() {
  return (
    <>
      <link rel="icon" href={favIcon} sizes="32x32" />
      <link rel="icon" href={icon} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href="/manifest.webmanifest" />
    </>
  )
}

export function webmanifestIcons() {
  return {
    icon192,
    icon512
  }
}

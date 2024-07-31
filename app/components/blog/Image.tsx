export interface ImageProps {
  readonly src: string
  readonly alt: string
  readonly caption?: string
  // eslint-disable-next-line react/no-unused-prop-types
  readonly layout?: string
}

export function Image({ src, alt, caption }: ImageProps) {
  return (
    <figure>
      <img src={src} alt={alt} />
      {caption && (<figcaption>{caption}</figcaption>)}
    </figure>
  )
}

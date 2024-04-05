import { caption, quote, root } from "./Testimonial.css"

// Define an interface for the testimonial props
interface TestimonialProps {
  readonly author: string
  readonly position: string
  readonly company: string
  readonly text: string
}

// The Testimonial component using a named function and explicit return type
export function Testimonial({
  author,
  position,
  company,
  text
}: TestimonialProps) {
  return (
    <article className={root}>
      <blockquote className={quote}>
        <p>{text}</p>
      </blockquote>
      <figcaption className={caption}>
        <cite>{author}</cite>
        {position && (
          <>
            <br />
            {position}
          </>
        )}
        {company && (
          <>
            <br />
            {company}
          </>
        )}
      </figcaption>
    </article>
  )
}

import { caption, quote, root } from "./Testimonial.css";

// Define an interface for the testimonial props
interface TestimonialProps {
  author: string;
  position: string;
  text: string;
}

// The Testimonial component using a named function and explicit return type
export function Testimonial({ author, position, text }: TestimonialProps) {
  return (
    <article className={root}>
      <blockquote className={quote}>
        <p>{text}</p>
      </blockquote>
      <figcaption className={caption}>
        <cite>{author}</cite>, <br />
        {position}
      </figcaption>
    </article>
  );
}

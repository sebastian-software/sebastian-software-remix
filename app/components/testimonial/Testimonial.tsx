import { root } from "./Testimonial.css";

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
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <figcaption>
        — <cite>{author}</cite>, {position}
      </figcaption>
    </article>
  );
}

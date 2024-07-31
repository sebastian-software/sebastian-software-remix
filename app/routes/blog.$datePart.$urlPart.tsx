import { useParams } from "@remix-run/react";

import type { Post } from "./blog._index";

export default function BlogEntry() {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true,
  });

  const { datePart, urlPart } = useParams();
  const id = `../blog/${datePart}-${urlPart}.mdx`;

  const post = posts[id]
  const Component = post.default

  return (<div><Component /></div>)
}

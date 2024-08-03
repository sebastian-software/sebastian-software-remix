import { useParams } from "@remix-run/react"

import { BlogLayout } from "~/components/blog/BlogLayout"
import type { Post } from "~/components/blog/loader"

export const authorMapping: Record<string, string> = {
  werner: "Sebastian Werner",
  fastner: "Sebastian Fastner"
}

/*
// package vite-env-only
const usePost = serverOnly$((id: string) => {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true,
  });

  return {
    Component: posts[id].default,
    error: undefined
  }
}) ?? ((id: string) => {
  const [component, setComponent] = useState<React.ElementType>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    async function fetchPost() {
      const posts = import.meta.glob<Post>("../blog/*.mdx", {
        eager: false,
      });

      const post = await (posts[id]());

      setComponent(post.default);
    }

    fetchPost().catch(() => {
      setError(true)
    });
  }, [id])

  return {
    Component: component,
    error
  }
})
*/

const usePost = (id: string) => {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true
  })

  const post = posts[id]

  return {
    Component: post.default,
    title: post.frontmatter.title,
    author: authorMapping[post.frontmatter.author] ?? "Unbekannt",
    date: new Date(post.frontmatter.date),
    error: undefined
  }
}

export default function BlogEntry() {
  const { datePart, urlPart } = useParams()
  const id = `../blog/${datePart}-${urlPart}.mdx`

  const post = usePost(id)

  return (
    <BlogLayout title={post.title} author={post.author} date={post.date}>
      <post.Component />
    </BlogLayout>
  )
}

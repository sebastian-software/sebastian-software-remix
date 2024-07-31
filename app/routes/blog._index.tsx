import { Link, useLoaderData } from "@remix-run/react"

const SPLIT_DATE_PART = 2

export interface Post {
  default: React.ElementType
  frontmatter: Record<string, string>
  summary: string
}

export function loader() {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true,
  });

  const data = Object.entries(posts).map(([path, { frontmatter, summary }]) => {
    const filename = path.replace(".mdx", "").split("/").pop()

    if (!filename) {
      return
    }

    const parts = filename.split("-")
    const datePart = parts.slice(0, SPLIT_DATE_PART).join("-")
    const urlPart = parts.slice(SPLIT_DATE_PART).join("-")

    return ({
      datePart,
      urlPart,
      frontmatter,
      summary
    })
  })

  return data.filter((entry) => entry !== undefined)
}

export default function BlogIndex() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {
          data.map((entry) => {
            return (
              <li key={entry.frontmatter.title}>
                <Link to={`/blog/${entry.datePart}/${entry.urlPart}`}>{entry.frontmatter.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

import { Link, useLoaderData } from "@remix-run/react"

import { blogList } from "~/blog/blog"

export async function loader() {
  const data = await blogList()

  return data
}

export default function BlogIndex() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Blog Index</h1>
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

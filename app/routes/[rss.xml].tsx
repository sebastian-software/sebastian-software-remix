import type { Author } from "feed"
import { Feed } from "feed"

import { blogPostLoader } from "~/components/blog/loader"

const authors: Record<string, Author> = {
  werner: {
    name: "Sebastian Werner",
    email: "s.werner@sebastian-software.de",
    link: "https://sebastian-software.de/werner"
  },
  fastner: {
    name: "Sebastian Fastner",
    email: "s.fastner@sebastian-software.de",
    link: "https://sebastian-software.de/fastner"
  }
}

function blogEntrySorter(
  a: ReturnType<typeof blogPostLoader>[0],
  b: ReturnType<typeof blogPostLoader>[0]
): number {
  return b.datePart.localeCompare(a.datePart)
}

export const loader = () => {
  const posts = blogPostLoader().sort(blogEntrySorter)

  // create a new RSS feed
  const feed = new Feed({
    title: "Sebastian Software Blog",
    id: "https://sebastian-software.de/blog",
    link: "https://sebastian-software.de/blog",
    language: "de", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    // image: "http://example.com/image.png",
    favicon: "https://sebastian-software.de/favicon.ico",
    copyright: `Copyright (C) ${new Date().getFullYear()} Sebastian Software GmbH`,
    updated: new Date(posts[0].frontmatter.date)
    /*
    feedLinks: {
      json: "https://example.com/json",
      atom: "https://example.com/atom"
    },
    */
  })

  for (const post of posts) {
    const url = `/blog/${post.datePart}/${post.urlPart}`

    feed.addItem({
      title: post.frontmatter.title,
      id: url,
      link: url,
      // description: post.description,
      content: post.summary,
      author: [authors[post.frontmatter.author]],
      date: new Date(post.frontmatter.date)
      // image: post.image
    })
  }

  // return the text content, a status 200 success response, and set the content type to text/plain
  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  })
}

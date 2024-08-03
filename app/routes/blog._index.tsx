import { useLoaderData } from "@remix-run/react"
import { nanoid } from "nanoid"

import { Button } from "~/components/button/Button"
import {
  Card,
  CardContainer,
  CardContent,
  CardFooter,
  CardTitle
} from "~/components/card/Card"

import { authorMapping } from "./blog.$datePart.$urlPart"
import { cardStyle } from "./blog/blog._index.css"

const SPLIT_DATE_PART = 2
const CARDS_PER_ROW = 3

export interface Post {
  default: React.ElementType
  frontmatter: Record<string, string>
  summary: string
}

export function loader() {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true
  })

  const data = Object.entries(posts).map(([path, { frontmatter, summary }]) => {
    const filename = path.replace(".mdx", "").split("/").pop()

    if (!filename) {
      return
    }

    const parts = filename.split("-")
    const datePart = parts.slice(0, SPLIT_DATE_PART).join("-")
    const urlPart = parts.slice(SPLIT_DATE_PART).join("-")

    return {
      datePart,
      urlPart,
      frontmatter,
      summary
    }
  })

  return data.filter((entry) => entry !== undefined)
}

const renderPost = (entry: ReturnType<typeof loader>[0] | "empty") => {
  if (entry === "empty") {
    return <Card key={nanoid()} className={cardStyle} />
  }

  const author = authorMapping[entry.frontmatter.author] ?? "Unbekannt"
  const date = new Date(entry.frontmatter.date)

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  return (
    <Card key={entry.urlPart} className={cardStyle}>
      <CardTitle>{entry.frontmatter.title}</CardTitle>
      <CardContent>
        <sub>
          (von {author} am {date.toLocaleDateString(undefined, options)}{" "}
          geschrieben)
        </sub>
        <p>{entry.summary}</p>
      </CardContent>
      <CardFooter>
        <Button to={`/blog/${entry.datePart}/${entry.urlPart}`}>
          weiterlesen...
        </Button>
      </CardFooter>
    </Card>
  )
}

function splitCards<T>(posts: T[]): Array<Array<T | "empty">> {
  type CardRow = Array<T | "empty">

  const cards: CardRow[] = []
  let currentCards: CardRow = []

  for (const post of posts) {
    currentCards.push(post)

    if (currentCards.length >= CARDS_PER_ROW) {
      cards.push(currentCards)
      currentCards = []
    }
  }

  if (currentCards.length > 0) {
    while (currentCards.length < CARDS_PER_ROW) {
      currentCards.push("empty")
    }

    cards.push(currentCards)
  }

  return cards
}

function blogEntrySorter(
  a: ReturnType<typeof loader>[0],
  b: ReturnType<typeof loader>[0]
): number {
  return b.datePart.localeCompare(a.datePart)
}

export default function BlogIndex() {
  const data = useLoaderData<typeof loader>()

  const cards = splitCards<(typeof data)[0]>(data.sort(blogEntrySorter))

  return (
    <div>
      {cards.map((cardRow) => (
        <CardContainer
          key={cardRow
            .map((entry) => (entry === "empty" ? "empty" : entry.urlPart))
            .join("-")}
        >
          {cardRow.map((entry) => renderPost(entry))}
        </CardContainer>
      ))}
    </div>
  )
}

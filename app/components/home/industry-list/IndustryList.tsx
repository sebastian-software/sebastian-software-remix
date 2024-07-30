import { Tag, TagList } from "~/components/tag/Tag"

import { rootClass, titleClass } from "./IndustryList.css"

export interface IndustryListProps {
  readonly data: string[]
}

export function IndustryList({ data }: IndustryListProps) {
  return (
    <div className={rootClass}>
      <h1 className={titleClass}>Branchen-Erfahrung</h1>
      <TagList>
        {data.map((industry) => (
          <Tag key={industry}>{industry}</Tag>
        ))}
      </TagList>
    </div>
  )
}

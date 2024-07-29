import { Tag, TagList } from "../tag/Tag"
import { rootClass } from "./TechList.css"

export interface TechListProps {
  readonly data?: Record<string, number>
}

export function TechList({ data }: TechListProps) {
  return (
    <div className={rootClass}>
      <TagList>
        {data &&
          Object.entries(data).map(([tech, value]) => (
            <Tag key={tech}>
              {tech} ({value.count}) ({value.lastUsed})
            </Tag>
          ))}
      </TagList>
    </div>
  )
}

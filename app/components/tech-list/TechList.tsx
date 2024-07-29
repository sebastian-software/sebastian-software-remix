import { Tag } from "../tag/Tag"
import { rootClass } from "./TechList.css"

export interface TechListProps {
  readonly data?: Record<string, number>
}

export function TechList({ data }: TechListProps) {
  return (
    <div className={rootClass}>
      <ul>
        {data &&
          Object.entries(data).map(([tech, count]) => (
            <Tag key={tech}>
              {tech} ({count})
            </Tag>
          ))}
      </ul>
    </div>
  )
}

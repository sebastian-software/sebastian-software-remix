import { Tag, TagList } from "../tag/Tag";
import { root } from "./ProjectList.css";

interface Project {
  id: string;
  title: string;
  role: string;
  customer: CustomerInfo;
  period: PeriodInfo;
  contractor: string;
  links: string[];
  description: string[];
  technologies: string[];
}

interface PeriodInfo {
  start: string;
  end: string;
}

interface CustomerInfo {
  name: string;
  location: string;
}

export interface ProjectListProps {
  data: Project[];
}

export function ProjectList({ data }: ProjectListProps) {
  return (
    <div className={root}>
      {data.map((project) => (
        <Project data={project} key={project.id} />
      ))}
    </div>
  );
}

export interface ProjectProps {
  data: Project;
}

export function Project({ data }: ProjectProps) {
  return (
    <div>
      <h2>
        {data.role}: {data.title}
      </h2>

      <p>
        Kunde: {data.customer.name}, {data.customer.location} | Zeitraum:{" "}
        {data.period.start} - {data.period.end}
      </p>

      {data.technologies && (
        <TagList>
          {data.technologies.sort().map((text, index) => (
            <Tag key={index}>{text}</Tag>
          ))}
        </TagList>
      )}

      <div>
        {data.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}

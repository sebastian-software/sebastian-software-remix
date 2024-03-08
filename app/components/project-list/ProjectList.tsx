import { root } from "./ProjectList.css";

interface Project {
  id: string;
  title: string;
  role: string;
  customer: CustomerInfo;
  contractor: string;
  links: string[];
  description: string[];
  technologies: string[];
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
      <h2> {data.title}</h2>
      {data.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}

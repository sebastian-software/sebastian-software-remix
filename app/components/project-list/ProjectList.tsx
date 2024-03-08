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
  tasks: string[];
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
        Kunde: {data.customer.name}, {data.customer.location}
      </p>

      <p>
        Zeitraum: {data.period.start} - {data.period.end}
      </p>

      <h3>Beschreibung:</h3>
      {data.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      {data.tasks && (
        <div style={{ border: "4px solid blue", padding: "10px" }}>
          <h3>Aufgaben:</h3>
          <ul>
            {data.tasks.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      )}

      {data.technologies && (
        <div style={{ border: "4px solid green", padding: "10px" }}>
          <h3>Technologien:</h3>
          <ul>
            {data.technologies.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import { CompanyLogo } from "../company-logo/CompanyLogo";
import { Neutral } from "../neutral";
import { RichText } from "../richtext/RichText";
import { Tag, TagList } from "../tag/Tag";
import { Testimonial } from "../testimonial/Testimonial";
import {
  customer,
  description,
  logo,
  meta,
  period,
  project,
  role,
  root,
  technologies,
  testimonials,
  title,
} from "./ProjectList.css";

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
  testimonials: Testimonial[];
}

interface Testimonial {
  author: string;
  position: string;
  company: string;
  text: string;
}

interface PeriodInfo {
  start: string;
  end: string;
}

interface CustomerInfo {
  name: string;
  location: string;
  logo: string;
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
    <div className={project}>
      <Neutral as="h2" className={title}>
        <span className={role}>{data.role}</span>
        {data.title}
      </Neutral>

      <CompanyLogo name={data.customer.logo} className={logo} />

      <div className={meta}>
        <p className={customer}>
          Kunde: {data.customer.name}, {data.customer.location}
        </p>
        <p className={period}>
          Zeitraum: {data.period.start} - {data.period.end}
        </p>

        {data.technologies && (
          <Neutral>
            <TagList className={technologies}>
              {data.technologies.sort().map((text, index) => (
                <Tag key={index}>{text}</Tag>
              ))}
            </TagList>
          </Neutral>
        )}
      </div>

      <RichText className={description}>
        {data.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </RichText>

      <ul className={testimonials}>
        {data.testimonials?.map((entry, index) => (
          <Testimonial
            key={index}
            author={entry.author}
            position={entry.position}
            company={entry.company}
            text={entry.text}
          />
        ))}
      </ul>
    </div>
  );
}

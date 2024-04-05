import type { Company } from "../company-logo/CompanyLogo"
import { companies, CompanyLogo } from "../company-logo/CompanyLogo"
import { Neutral } from "../neutral"
import { RichText } from "../richtext/RichText"
import { Tag, TagList } from "../tag/Tag"
import { TestimonialBlock } from "../testimonial/Testimonial"
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
  title
} from "./ProjectList.css"

export interface Project {
  id: string
  title: string
  role: string
  customer: CustomerInfo
  period: PeriodInfo
  description: string[]
  contractor?: string
  links?: string[]
  technologies?: string[]
  testimonials?: Testimonial[]
}

export interface Testimonial {
  author: string
  position?: string
  company?: string
  text: string
}

export interface PeriodInfo {
  start: string
  end: string
}

export interface CustomerInfo {
  name: string
  location: string
  logo?: string
}

export interface ProjectListProps {
  readonly data: Project[]
}

export function ProjectList({ data }: ProjectListProps) {
  return (
    <div className={root}>
      {data.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  )
}

export interface ProjectProps {
  readonly data: Project
}

const locale = "de-DE"

export function formatPeriod({ start, end }: PeriodInfo) {
  const startDate = new Date(start).toLocaleDateString(locale, {
    year: "numeric",
    month: "numeric"
  })
  const endDate = new Date(end).toLocaleDateString(locale, {
    year: "numeric",
    month: "numeric"
  })

  return `${startDate} - ${endDate}`
}

function isCompany(name: string | undefined): name is Company {
  return name != undefined && name in companies
}

export function Project({ data }: ProjectProps) {
  return (
    <div className={project}>
      <Neutral as="h2" className={title}>
        <span className={role}>{data.role}</span>
        {data.title}
      </Neutral>

      {isCompany(data.customer.logo) && (
        <CompanyLogo name={data.customer.logo} className={logo} />
      )}

      <div className={meta}>
        <p className={customer}>
          Kunde:
          <br />
          {data.customer.name}
          <br />
          {data.customer.location}
        </p>
        <p className={period}>
          Zeitraum:
          <br /> {formatPeriod(data.period)}
        </p>

        {data.technologies && (
          <Neutral>
            <TagList className={technologies}>
              {data.technologies.sort().map((text, index) => (
                <Tag key={text}>{text}</Tag>
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
          <TestimonialBlock
            key={entry.author}
            author={entry.author}
            position={entry.position}
            company={entry.company}
            text={entry.text}
          />
        ))}
      </ul>
    </div>
  )
}

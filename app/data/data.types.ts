export interface ProjectType {
  title: string
  role: string

  customer: {
    name: string
    location: string
    industry: string
    logo?: string
  }

  contractor: string
  period: Record<"start" | "end", string>
  links: string[]
  description: string[]
  technologies: string[]
}

export interface ProjectsType {
  projects: ProjectType[]
}

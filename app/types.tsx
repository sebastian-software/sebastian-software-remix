export interface ProjectData {
  id: string
  title: string
  role: string
  customer: CustomerData
  period: PeriodData
  description: string[]
  contractor?: string
  links?: string[]
  technologies?: string[]
  testimonials?: TestimonialData[]
}

export interface TestimonialData {
  author: string
  position?: string
  company?: string
  text: string
}

export interface PeriodData {
  start: string
  end: string
}

export interface CustomerData {
  name: string
  location: string
  logo?: string
}

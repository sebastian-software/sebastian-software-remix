import type { MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { Button } from "~/components/button/Button"
import {
  Card,
  CardContainer,
  CardContent,
  CardFooter,
  CardTitle
} from "~/components/card/Card"
import { Banner, CustomersList, TechList } from "~/components/home"
import { IndustryList } from "~/components/home/industry-list"
import type { ProjectType } from "~/data/data.types"

export const meta: MetaFunction = () => [
  { title: "Sebastian Software" },
  {
    name: "description",
    content:
      "Ein Team von Spezialisten für React-Entwicklung mit Fokus auf nachhaltige, innovative Lösungen mit über 20 Jahre Erfahrung."
  }
]

interface LoaderReturnType {
  customers: Array<ProjectType["customer"]>
  technologies: Record<string, TechEntry>
  industries: string[]
}

export interface TechEntry {
  count: number
  lastUsed: number
}

function addProject(
  project: ProjectType,
  customers: Array<ProjectType["customer"]>,
  technologies: Record<string, TechEntry | undefined>,
  industries: string[]
) {
  if (!customers.some((c) => c.logo === project.customer.logo)) {
    customers.push(project.customer)
  }

  const endDate = new Date(project.period.end).valueOf()
  for (const tech of project.technologies) {
    const previousValue = technologies[tech]

    if (previousValue) {
      previousValue.count++
      if (endDate > previousValue.lastUsed) {
        previousValue.lastUsed = endDate
      }
    } else {
      technologies[tech] = {
        count: 1,
        lastUsed: endDate
      }
    }
  }

  if (!industries.includes(project.customer.industry)) {
    industries.push(project.customer.industry)
  }
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const YEARS_IN_MS = 365 * 24 * 60 * 60 * 1000
const TECH_YEARS = 3

function postProcessTechnologies(technologies: Record<string, TechEntry>) {
  // Sort technologies by name
  const sortedTechnologies = Object.keys(technologies).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )
  const sortedTechnologiesObject: Record<string, TechEntry> = {}
  for (const tech of sortedTechnologies) {
    sortedTechnologiesObject[tech] = technologies[tech]
  }

  // Remove all entries which are older than 5*365 days
  const currentDate = Date.now()
  const techYearsMin = currentDate - TECH_YEARS * YEARS_IN_MS

  for (const tech in sortedTechnologiesObject) {
    if (sortedTechnologiesObject[tech].lastUsed < techYearsMin) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete sortedTechnologiesObject[tech]
    }
  }

  return sortedTechnologiesObject
}

export async function loader(): Promise<LoaderReturnType> {
  const sources = Promise.all([
    import("../data/fastner.json"),
    import("../data/werner.json")
  ])

  const customers: Array<ProjectType["customer"]> = []
  const technologies: Record<string, TechEntry> = {}
  const industries: string[] = []

  for (const source of await sources) {
    for (const project of source.projects) {
      addProject(project, customers, technologies, industries)
    }
  }

  // Sort industries
  industries.sort((a, b) => a.localeCompare(b))

  return {
    customers,
    technologies: postProcessTechnologies(technologies),
    industries
  }
}

export default function Index() {
  const { customers, technologies, industries } = useLoaderData<typeof loader>()

  return (
    <>
      <Banner alt="Gründer der Sebastian Software GmbH">
        Fundiertes technisches Know-How trifft auf Leidenschaft für Innovation
        und herausragende User-Experience.
      </Banner>
      <CardContainer>
        <Card>
          <CardTitle>Mission</CardTitle>
          <CardContent>
            <p>
              Unsere Leidenschaft für Qualität und Innovation wird durch eine
              unstillbare Neugier angetrieben. Tiefes Eintauchen in Technologien
              und die Verknüpfung verschiedenster Ideen ermöglichen es uns,
              zukunftsweisende Lösungen zu schaffen. Wir gestalten aktiv die
              dynamischen Entwicklungen unserer Branche.
            </p>
          </CardContent>
          <CardFooter>
            <Button to="/mission">Mehr erfahren</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>Team</CardTitle>
          <CardContent>
            <p>
              Unser Team vereint fundiertes Informatikwissen mit
              jahrzehntelanger Erfahrung in der professionellen
              Softwareentwicklung. Als Experten für moderne
              Frontend-Technologien haben wir ein Auge für Details und verpassen
              keine relevanten Trends. Mit Elan und Ehrgeiz treiben wir Projekte
              voran und setzen Maßstäbe für herausragende Entwickler- und
              Benutzererfahrung.
            </p>
          </CardContent>

          <CardFooter>
            <Button to="/team">Mehr erfahren</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>Consulting</CardTitle>
          <CardContent>
            <p>
              Gemeinsam entwickeln wir maßgeschneiderte Lösungen, die genau auf
              Ihre Anforderungen zugeschnitten sind. Unterstützt von unserer
              umfangreichen Erfahrung und technischen Expertise bieten wir Ihnen
              eine Partnerschaft, die von der Entwicklung über Beratung bis hin
              zu Schulungen reicht. Unser Ziel ist es, Ihr Team zu stärken und
              Ihre Vision effektiv umzusetzen.
            </p>
          </CardContent>

          <CardFooter>
            <Button to="/consulting">Mehr erfahren</Button>
          </CardFooter>
        </Card>
      </CardContainer>

      <CustomersList data={customers} />
      <TechList data={technologies} />
      <IndustryList data={industries} />
    </>
  )
}

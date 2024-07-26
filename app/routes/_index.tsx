import type { MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { Banner } from "~/components/banner/Banner"
import { Button } from "~/components/button/Button"
import {
  Card,
  CardContainer,
  CardContent,
  CardFooter,
  CardTitle
} from "~/components/card/Card"
import { CustomersList } from "~/components/customers/CustomersList"
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
}

export async function loader(): Promise<LoaderReturnType> {
  const customers = []

  const sources = Promise.all([
    import("../data/fastner.json"),
    import("../data/werner.json")
  ])

  const customerNames = new Set()
  for (const source of await sources) {
    for (const project of source.projects) {
      if (!customerNames.has(project.customer.logo)) {
        customers.push(project.customer)
      }

      customerNames.add(project.customer.logo)
    }
  }

  return { customers }
}

export default function Index() {
  const { customers } = useLoaderData<typeof loader>()

  return (
    <>
      <Banner>
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
    </>
  )
}

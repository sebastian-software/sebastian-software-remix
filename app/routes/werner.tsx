import { useLoaderData } from "@remix-run/react"

import { ProfileHead, ProjectList } from "~/components/profile"
import type { ProjectData } from "~/types"

export async function loader() {
  const data = await import("../data/werner.json")

  const projects: ProjectData[] = []
  for (const project of data.projects) {
    projects.push({
      ...project,
      id: `${project.customer.name}-${project.period.start}`
    })
  }

  return projects
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <ProfileHead name="Sebastian Werner" />
      <ProjectList data={data} />
    </>
  )
}

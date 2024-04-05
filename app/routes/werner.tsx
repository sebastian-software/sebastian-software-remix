import { useLoaderData } from "@remix-run/react"

import { ProfileHead } from "~/components/profile-head/ProfileHead"
import { ProjectList } from "~/components/project-list/ProjectList"
import type { ProjectData } from "~/types"

import data from "../data/werner.json"

export const loader = () => {
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

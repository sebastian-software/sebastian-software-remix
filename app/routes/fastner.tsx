import { useLoaderData } from "@remix-run/react"

import { ProfileHead } from "~/components/profile-head/ProfileHead"
import type { Project } from "~/components/project-list/ProjectList"
import { ProjectList } from "~/components/project-list/ProjectList"

import data from "../data/fastner.json"

export const loader = () => {
  const projects: Project[] = []
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
      <ProfileHead name="Sebastian Fastner" />
      <ProjectList data={data} />
    </>
  )
}

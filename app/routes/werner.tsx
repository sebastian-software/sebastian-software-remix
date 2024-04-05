import data from "../data/werner.json"
import { useLoaderData } from "@remix-run/react"
import { ProjectList } from "~/components/project-list/ProjectList"
import { ProfileHead } from "~/components/profile-head/ProfileHead"

export const loader = async () => {
  return data
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <ProfileHead name="Sebastian Werner" />
      <ProjectList data={data.projects} />
    </>
  )
}

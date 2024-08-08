import { useLoaderData } from "@remix-run/react"
import { loadQuery } from "@sanity/react-loader"
import groq from "groq"

import { ProfileHead, ProjectList } from "~/components/profile"

const PROJECT_QUERY = groq`*[_type == "project"]`

export async function loader() {
  const initial = await loadQuery<unknown[]>(PROJECT_QUERY)

  return { initial, query: PROJECT_QUERY, params: {} }
}

export default function Index() {
  const { initial } = useLoaderData<typeof loader>()

  return (
    <>
      <ProfileHead name="Sebastian Werner" />
      <ProjectList data={initial.data} />
    </>
  )
}

import { RichText } from "~/components/richtext/RichText";

import data from "../data/fastner.json";
import { useLoaderData } from "@remix-run/react";
import { ProjectList } from "~/components/project-list/ProjectList";

export const loader = async () => {
  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <RichText>
      <h1>Sebastian Fastner</h1>
      <ProjectList data={data.projects} />
    </RichText>
  );
}

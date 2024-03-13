import { RichText } from "~/components/richtext/RichText";

import data from "../data/fastner.json";
import { useLoaderData } from "@remix-run/react";
import { ProjectList } from "~/components/project-list/ProjectList";
import { ProfileHead } from "~/components/profile-head/ProfileHead";

export const loader = async () => {
  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <ProfileHead name="Sebastian Fastner" />
      <ProjectList data={data.projects} />
    </>
  );
}

import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

import type { BlogEntryWithContent } from "../blog/blog";
import { blogList } from "../blog/blog"

export async function loader({ params }: LoaderFunctionArgs) {
  const data = await blogList()

  const datePart = params.datePart;
  const urlPart = params.urlPart;

  return data.find((entry) => entry.datePart === datePart && entry.urlPart === urlPart)
}

function useAsync<T>(asyncFunction: () => Promise<T>): [T | undefined, unknown] {
  const [value, setValue] = useState<T>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    asyncFunction().then(setValue).catch(setError);
  }, [asyncFunction]);

  return [value, error];
}

function useBlog(datePart: string, urlPart: string) {
  const [posts, error] = useAsync<BlogEntryWithContent[]>(blogList);

  const post = posts?.find((entry) => entry.longDatePart === datePart && entry.urlPart === urlPart);

  return {
    error,
    Component: post?.content
  }
}

export default function BlogEntry() {
  const data = useLoaderData<typeof loader>()

  const blogEntry = useBlog(data.longDatePart, data.urlPart);

  if (!blogEntry.Component || blogEntry.error) {
    return <div>Post not found</div>
  }

  const Component = blogEntry.Component

  return (
    <div><Component /></div>
  )
}

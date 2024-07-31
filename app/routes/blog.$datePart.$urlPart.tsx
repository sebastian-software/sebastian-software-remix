import { useParams } from "@remix-run/react";

import type { Post } from "./blog._index";

/*
const usePost = serverOnly$((id: string) => {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true,
  });

  return {
    Component: posts[id].default,
    error: undefined
  }
}) ?? ((id: string) => {
  const [component, setComponent] = useState<React.ElementType>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    async function fetchPost() {
      const posts = import.meta.glob<Post>("../blog/*.mdx", {
        eager: false,
      });

      const post = await (posts[id]());

      setComponent(post.default);
    }

    fetchPost().catch(() => {
      setError(true)
    });
  }, [id])

  return {
    Component: component,
    error
  }
})
*/

const usePost = (id: string) => {
  const posts = import.meta.glob<Post>("../blog/*.mdx", {
    eager: true,
  });

  return {
    Component: posts[id].default,
    error: undefined
  }
}

export default function BlogEntry() {
  const { datePart, urlPart } = useParams();
  const id = `../blog/${datePart}-${urlPart}.mdx`;

  const post = usePost(id);

  return (<div><post.Component /></div>)
}

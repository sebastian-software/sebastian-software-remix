import type { ActionFunctionArgs } from "@remix-run/node"

export async function action({ request }: ActionFunctionArgs) {
  const data = (await request.json()) as Record<string, string>

  console.log(">>>", data)

  return new Response("", { status: 204 })
}

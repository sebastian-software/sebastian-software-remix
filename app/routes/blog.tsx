import { Link, Outlet } from "@remix-run/react"

export default function Blog() {
  return (
    <>
      <div>
        <Link to="/blog">Übersicht</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

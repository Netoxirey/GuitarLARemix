import { useLoaderData } from "@remix-run/react"
import BlogsList from "~/components/blogs-list"
import { getBlogs } from "~/models/blog.server"
import styles from "~/styles/blog.css"

export function meta() {
  return [
    {
      title: "GuitarLA - Blog"
    },
    {
      description: "Guitar, blogs, learn."
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export  async function loader() {
  const blogs = await getBlogs()
 
  return blogs.data
}

function Blog() {
  const blogs = useLoaderData()
  return (
    <main className="contenedor">
      <BlogsList blogs={blogs}/>
    </main>
  )
}

export default Blog
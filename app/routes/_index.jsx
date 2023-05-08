import { useLoaderData } from "@remix-run/react"
import { getBlogs } from "~/models/blog.server"
import { getGuitars } from "~/models/guitas.server"
import GuitarList from "~/components/guitars-list"
import stylesGuitars from "~/styles/guitars.css"
import stylesBlogs from "~/styles/blog.css"
import BlogsList from "~/components/blogs-list"
import { getCourse } from "~/models/course.server"
import Course from "~/components/course"
import stylesCourse from "~/styles/course.css"

export function meta() {

}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitars,
    },
    {
      rel: "stylesheet",
      href: stylesBlogs,
    },
    {
      rel: "stylesheet",
      href: stylesCourse
    }
  ]
}

export async function loader() {

  const [guitars, blogs, course] = await Promise.all([
    getGuitars(),
    getBlogs(),
    getCourse()
  ])
  return{
    guitars: guitars.data,
    blogs: blogs.data,
    course: course.data
  }
}

function Index() {
  const {guitars, blogs, course} = useLoaderData()

  return (
    <>
    <main className="contenedor">
      <GuitarList guitars={guitars}/>
    </main>
      <Course course={course.attributes}/>
    <section className="contenedor">
    <BlogsList blogs={blogs}/>
    </section>
    </>
  )
}

export default Index
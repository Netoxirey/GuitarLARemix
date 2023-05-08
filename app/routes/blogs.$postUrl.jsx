import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getBlog } from "~/models/blog.server"
import { formatDate } from "~/utils/helper"
import styles from "~/styles/blog.css"

export function meta({data}) {
  console.log(data)
  if(!data) {
    return [
      {
        title: 'Blog not found'
      },
      {
        description: 'Guitars, blogs guitars, guitar, guitar not found'
      }
    ]
  }
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.title}`,
    },
    {
      description: `Guitars, learn, blogs, blog, ${data.data[0].attributes.title} `
    },
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

export async function loader({params}) {

  const {postUrl} = params
  const blog = await getBlog(postUrl)
   if(blog.data.length === 0) {
    throw new Response ('', {
      status: 404,
      statusText: 'Entry not found'
    })
   }
  return blog
}

function Post() {
  const blog = useLoaderData()
  const {title, content, image, publishedAt} = blog?.data[0]?.attributes

  return (
    <article className="contenedor post">
        <img className="image" src={image.data.attributes.url} alt={`image blog ${title}`}/>
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{formatDate(publishedAt)}</p>
            <p className="text">{content}</p>
        </div>
    </article>
  )
}

export default Post
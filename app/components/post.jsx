import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helper"

function Post({blog}) {
    const {title, content, image, url, publishedAt} = blog
  return (
    <article className="post">
        <img className="image" src={image.data.attributes.formats.small.url} alt={`image blog ${title}`}/>
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{formatDate(publishedAt)}</p>
            <p className="summary">{content}</p>
            <Link className="link" to={`/blogs/${url}`}>Read blog</Link>
        </div>
    </article>
  )
}

export default Post
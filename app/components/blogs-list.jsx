import Post from "./post"

function BlogsList({blogs}) {
  return (
    <>
     <h2 className="heading">Blog</h2>
       <div className="blog">
        {blogs?.map((blog) => (
          <Post key={blog.id} blog={blog.attributes}/>
        ))}
       </div>
    </>
  )
}

export default BlogsList
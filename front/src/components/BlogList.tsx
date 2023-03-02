import { Blog } from '../types'

type BlogListProps = {
  blogs: Blog[]
  title: string
}

const BlogList = ({ blogs, title }: BlogListProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog: Blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Wittend by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList

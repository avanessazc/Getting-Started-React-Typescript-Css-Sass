import { Blog } from '../types'
import { Link } from 'react-router-dom'

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
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Writtend by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList

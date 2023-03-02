import { useParams } from 'react-router-dom'
import useFetch from './hooks/useFetch'
import { Blog } from '../types'

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>()

  const {
    data: blog,
    isPending,
    error,
  }: { data: Blog; isPending: boolean; error: string } = useFetch('http://0.0.0.0:3000/blogs/' + id)
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails

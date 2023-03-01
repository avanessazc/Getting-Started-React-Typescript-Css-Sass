import { useState, useEffect } from 'react'
import { Blog } from '../types'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      fetch('http://0.0.0.0:3000/blogss')
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json()
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError('');
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          setIsPending(false);
        })
    }, 1000)
  }, [])
  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
      {blogs.length != 0 && <BlogList blogs={blogs} title='All Blogs!' />}
      {error && <div>{error}</div>}
    </div>
  )
}

// anonymous function to call another functions
// when function does not have parametres, it could be passed as reference
// import React, { MouseEvent } from 'react'
export default Home

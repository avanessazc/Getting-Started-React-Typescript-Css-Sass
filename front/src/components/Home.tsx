import { useState, useEffect } from 'react'
import { Blog } from '../types'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  
  useEffect(() => {
    fetch('http://0.0.0.0:3000/blogs')
    .then((res) => {
      // console.log('res:', res);
      return res.json();
    }).then((data) => {
      console.log(data);
      setBlogs(data);
    })
  }, [])
  return (
    <div className='home'>
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  )
}

// anonymous function to call another functions
// when function does not have parametres, it could be passed as reference
// import React, { MouseEvent } from 'react'
export default Home

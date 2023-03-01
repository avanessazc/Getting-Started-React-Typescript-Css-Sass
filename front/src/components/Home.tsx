import { useState } from 'react'
import { Blog } from '../types'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ])

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' />
      <BlogList
        blogs={blogs.filter((blog: Blog) => blog.author === 'mario')}
        title='Marios Blogs!'
      />
    </div>
  )
}

// anonymous function to call another functions
// when function does not have parametres, it could be passed as reference
// import React, { MouseEvent } from 'react'
export default Home

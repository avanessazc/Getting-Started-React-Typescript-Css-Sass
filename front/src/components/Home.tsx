import { useState } from 'react'

type Blog = {
  id: number
  title: string
  body: string
  author: string
}

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  return (
    <div className='home'>
      {blogs.map((blog: Blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Wittend by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

// anonymous function to call another functions
// when function does not have parametres, it could be passed as reference
// import React, { MouseEvent } from 'react'
export default Home

// import { useState, useEffect } from 'react'
import { Blog } from '../types'
import BlogList from '../components/BlogList'
import useFetch from '../components/hooks/useFetch'

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  }: { data: Blog[]; isPending: boolean; error: string } = useFetch('http://0.0.0.0:3000/blogs')
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  )
}

// anonymous function to call another functions
// when function does not have parametres, it could be passed as reference
// import React, { MouseEvent } from 'react'
export default Home

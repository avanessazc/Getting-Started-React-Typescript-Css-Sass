import React, { MouseEvent } from 'react';

const Home = () => {
  const handleClick = (e: MouseEvent) => {
    console.log('Holas', e)
  }
  const handleClick2 = (name: string, e: MouseEvent) => {
    console.log('Hola', name, e.target)
  }
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <button
        onClick={(e) => {
          handleClick(e)
        }}
      >
        Click me
      </button>
      <button
        onClick={(e) => {
          handleClick2('Vanessa', e)
        }}
      >
        Click me2
      </button>
    </div>
  )
}

export default Home

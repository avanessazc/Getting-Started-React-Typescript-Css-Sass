import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState<string>('Vanessa')
  const [age, setAge] = useState<number>(33)
  const handleClick = () => {
    setName('Luigi')
    setAge(45)
    console.log(name)
  }
  // const handleClick2 = (name: string, e: MouseEvent) => {
  //   console.log('Hola', name, e.target)
  // }
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

// anonymous function to call another functions
// when function does not have parametres, it could be passed as reference
// import React, { MouseEvent } from 'react'
export default Home

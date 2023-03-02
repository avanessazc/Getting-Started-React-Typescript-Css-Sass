import { useState, useEffect } from 'react'
// import { Blog } from '../types';

const useFetch = (url: string) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setIsPending(false)
          setError('')
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message)
          setIsPending(false)
        })
    }, 1000)
  }, [])
  return { data, isPending, error }
}

export default useFetch

import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState<any>()
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const abortCtrl = new AbortController()

    // This setTimeout is just for testing "isPending" state
    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError('')
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message)
            setIsPending(false)
          }
        })
    }, 1000)
    return () => abortCtrl.abort()
  }, [])
  return { data, isPending, error }
}

export default useFetch

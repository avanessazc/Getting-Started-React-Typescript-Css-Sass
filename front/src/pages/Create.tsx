import { useState, ChangeEvent, FormEvent } from 'react'

const Create = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [isPending, setIsPending] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const blog = { title, body, author }
    setIsPending(true)
    setTimeout(() => {
      fetch('http://0.0.0.0:3000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log('New blog added')
        setIsPending(false)
      })
    }, 1000)
  }
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setAuthor(e.target.value)}
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <p>Adding blog....</p>}
      </form>
    </div>
  )
}

export default Create

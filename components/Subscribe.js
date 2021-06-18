import { useState } from 'react'

function Subscribe({ setSubscribed }) {
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    await fetch('api/update-notion', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    setSubscribed(true)
  }

  return (
    <form className='mt-8 w-full flex' onSubmit={handleSubmit}>
      <input
        className='border rounded-tl rounded-bl border-gray-100 w-full px-4 py-2 text-gray-900'
        placeholder='Your Email Here'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type='submit'
        className='bg-yellow-400 text-gray-900 px-4 py-2 font-medium sm:text-lg rounded-tr rounded-br'        
      >
        Subscribe
      </button>
    </form>
  )
}

export default Subscribe

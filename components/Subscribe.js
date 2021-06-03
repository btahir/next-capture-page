import React from 'react'

function Subscribe() {
  return (
    <form className='mt-8 w-full flex'>
      <input
        className='border rounded-tl rounded-bl border-gray-100 w-full px-4 py-2 text-gray-900'
        type='email'
        required
      />
      <button
        type='submit'
        className='bg-yellow-400 px-4 py-2 font-medium sm:text-lg rounded-tr rounded-br'
      >
        Subscribe
      </button>
    </form>
  )
}

export default Subscribe

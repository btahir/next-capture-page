import React from 'react'

function HeroContent() {
  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      <div className='w-full h-96 max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-50 sm:rounded-2xl'>
        <div className='w-full h-full text-white py-8 px-6'>
          <h1 className='text-center text-3xl sm:text-4xl font-extrabold sm:leading-[3rem]'>
            Your headline here.{' '}
            <span className='text-yellow-400'>Catch their attention!</span>
          </h1>
          <p className='mt-6 text-lg sm:text-xl'>
            Ea esse minim reprehenderit voluptate. Ea nisi culpa magna proident
            id voluptate. Aute labore id aliquip nisi amet voluptate sunt duis
            proident ea aute fugiat ea. Anim deserunt amet eiusmod ullamco esse.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroContent

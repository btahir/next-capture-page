import Head from 'next/head'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Capture Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative h-screen w-screen'>
        <img
          src='https://source.unsplash.com/random'
          alt='main background image'
          className='absolute inset-0 w-full h-full object-cover filter brightness-90'
        />

        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='w-full h-96 max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-50 sm:rounded-2xl'>
            <div className='w-full h-full text-white py-8 px-6'>
              <h1 className='text-center text-3xl sm:text-4xl font-extrabold'>
                Your headline here
              </h1>
              <p className='mt-6 text-lg sm:text-xl'>
                Ea esse minim reprehenderit voluptate. Ea nisi culpa magna
                proident id voluptate. Aute labore id aliquip nisi amet
                voluptate sunt duis proident ea aute fugiat ea. Anim deserunt
                amet eiusmod ullamco esse.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

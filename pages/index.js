import Head from 'next/head'
import HeroContent from '../components/HeroContent'

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
          className='absolute inset-0 w-full h-full object-cover'
        />
        <HeroContent />
      </main>
    </div>
  )
}

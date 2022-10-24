import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='bg-neutral-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Andrew&apos;s Portfolio</title>
      </Head>
      
      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>
    </div>
  )
}

export default Home

import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='bg-neutral-900 text-white h-screen'>
      <Head>
        <title>Andrew&apos;s Portfolio</title>
      </Head>
      
      <Header />

      <section id='hero'>
        <Hero />
      </section>
    </div>
  )
}

export default Home

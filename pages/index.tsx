import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import andrew from '../public/andrew.jpeg';
import { urlFor } from '../sanity';
import { PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, skills, projects, socials}: Props) => {
  return (
    <div className='bg-neutral-900 text-white h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Andrew&apos;s Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='flex items-center justify-center  sticky bottom-5 w-full cursor-pointer'>
          <div className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer overflow-hidden'>
            <Image src={urlFor(pageInfo.heroImage).url()} alt='logo' layout='fill' objectFit='cover'/>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {  
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
    revalidate: 30,
  };
};

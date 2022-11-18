/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ScriptProps } from 'next/script'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.css'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperinces } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, socials, skills }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] '>
      <Head>
        <title>Harsh Upadhyay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes='512x512'/>
      </Head>

    {/* Header */}

    <Header socials={socials} />

    {/* Hero */}
    <section id="hero" className='snap-start'>
    <Hero pageInfo={pageInfo}/>

    </section>
    {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

    {/* Experience */}

    <section id='experience' className='snap-center '>
      <WorkExperience  experiences={experiences}/>
    </section>

    {/* Skills */}

    <section id='skills' className='snap-start'>
      <Skills skills={skills}/>
    </section>

    {/* Projects */}   

    <section id='projects' className='snap-start'>
      <Projects projects={projects}/>
    </section>

    <section id='contact' className='snap-start'>
      <ContactMe/>
    </section>

     <Link href='#hero'>
     <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img 
        className='w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
        src="fp1.jpeg" alt="" />
      </div>
     </footer>
     </Link>
     
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperinces();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return{
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';

type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social icons*/}
            {socials.map((social) => (
              <SocialIcon 
              key={social._id}
              url={social.url}
              fgColor='gray'
              bgColor='transparent'/> 
              
            ))}

            
            {/* <SocialIcon url="https://www.linkedin.com/in/harsh-upadhyay-60741a121/" 
            fgColor='gray'
            bgColor='transparent'/> 

            
            <SocialIcon url="https://www.instagram.com/itsharu.dev/" 
            fgColor='gray'
            bgColor='transparent'/> 

            
            <SocialIcon url="https://twitter.com/itsharu11_" 
            fgColor='gray'
            bgColor='transparent'/>  */}

            {/* <SocialIcon url="https://stackoverflow.com/users/20025644/haru" 
            fgColor='gray'
            bgColor='rgb(36,36,36)'/>  */}

        </motion.div>

        <Link href='#contact'>

          <motion.div 
          initial={{
            x: 500,
            opacity:0,
            scale: 0.5,
          }}
          animate={{
            x:0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row items-center text-gray-300'>
          <SocialIcon
              className='cursor-pointer'
              network='email'
              fgColor='gray'
              bgColor='transparent'
            />  
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'> Get In Touch</p>
          </motion.div>
        </Link>

    </header>
  )
}
import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
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
            
            <SocialIcon url="https://www.youtube.com/channel/UCFC-ectV3dB3SwHEeeJ5Vyg" 
            fgColor='gray'
            bgColor='transparent'/> 

            
            <SocialIcon url="https://www.linkedin.com/in/harsh-upadhyay-60741a121/" 
            fgColor='gray'
            bgColor='transparent'/> 

            
            <SocialIcon url="https://www.instagram.com/itsharu.dev/" 
            fgColor='gray'
            bgColor='transparent'/> 

            
            <SocialIcon url="https://twitter.com/itsharu11_" 
            fgColor='gray'
            bgColor='transparent'/> 

            {/* <SocialIcon url="https://stackoverflow.com/users/20025644/haru" 
            fgColor='gray'
            bgColor='rgb(36,36,36)'/>  */}

        </motion.div>
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

    </header>
  )
}
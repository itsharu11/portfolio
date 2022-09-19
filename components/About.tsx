import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 2,
            // repeat: while,
        }}
        

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
    <motion.img 
    src='about.jpg'
    initial={{
        x: -200,
    }}
    whileInView={{
        x:0
    }}
    transition={{
        duration: 1.2,
    }}
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
    />
        
    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decorration-[#F7AB0A]/50'>little</span> background
        </h4>
        <p className='text-base'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam error quasi, a cum ab veniam totam, libero quos laborum consequuntur aperiam illo itaque fuga incidunt quidem est explicabo officiis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi natus tempore non, recusandae consequatur sit amet aspernatur est accusantium, quasi nam iusto magni! Laboriosam veritatis commodi id nulla porro!
        </p>
    </div>

    </motion.div>
  )
}
import { motion } from 'framer-motion'
import React from 'react'
import { Skill as SkillType } from '../typings'
import Skill from './Skill'

type Props = {
    skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='h-screen flex flex-col relative  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-7 gap-5'>

        {skills?.slice(0, skills.length / 2).map(skill => (
            <Skill key={skill._id} skill={skill}/>
        ))}

            {skills?.slice(skills.length / 2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft/>
        ))}

        </div>

    </motion.div>

    

  )
}

export default Skills
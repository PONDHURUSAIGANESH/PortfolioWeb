import React from 'react'
import { motion } from 'framer-motion'

const Skill=({name,x,y})=>{


    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y, transition:{duration:1.5}}}
            transition={{duration:1.5}}
            >
                {name}
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            >
                Tech-Stack
            </motion.div>
            <Skill name="HTML" x="-20vw" y="2vw"/>
            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="JavaScript" x="20vw" y="6vw"/>
            <Skill name="ReactJs" x="0vw" y="12vw"/>
            <Skill name="NextJs" x="-20vw" y="-15vw"/>
            <Skill name="NodeJs" x="15vw" y="-11vw"/>
            <Skill name="SQL" x="-15vw" y="16vw"/>
            <Skill name="AWS" x="-35vw" y="5vw"/>
            <Skill name="Azure" x="30vw" y="-10vw"/>
            <Skill name="PowerBI" x="30vw" y="13vw"/>
            <Skill name="Python " x="7vw" y="19vw"/>
            <Skill name="Java " x="1vw" y="-19vw"/>
        </div>
    </>
  )
}

export default Skills
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({position, company, companyLink, time, address, work })=>{
    const ref=useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-purple-950 dark:text-cyan-300 capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref =useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div ref={ref}  className='w-[75%] mx-auto relative '>
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="Solution Expert Engineer" company="Chegg"
                companyLink="https://www.chegg.com/"
                time="2023-present" address='Online'
                work="Solved more than 20+ physics problems"
                />
                <Details 
                position="Solution Expert Engineer" company="Chegg"
                companyLink="https://www.chegg.com/"
                time="2023-present" address='Online'
                work="Solved more than 20+ physics problems"
                />
                <Details 
                position="Solution Expert Engineer" company="Chegg"
                companyLink="https://www.chegg.com/"
                time="2023-present" address='Online'
                work="Solved more than 20+ physics problems"
                />
                <Details 
                position="Solution Expert Engineer" company="Chegg"
                companyLink="https://www.chegg.com/"
                time="2023-present" address='Online'
                work="Solved more than 20+ physics problems"
                />
                <Details 
                position="Solution Expert Engineer" company="Chegg"
                companyLink="https://www.chegg.com/"
                time="2023-present" address='Online'
                work="Solved more than 20+ physics problems"
                />
                <Details 
                position="Solution Expert Engineer" company="Chegg"
                companyLink="https://www.chegg.com/"
                time="2023-present" address='Online'
                work="Solved more than 20+ physics problems"
                />
                <Details 
                position="AI Engineer" company="MNM"
                companyLink="https://www.linkedin.com/company/marketics-and-marketers-m-m/about/"
                time="2022-2023" address='Chennai, TamilNadu'
                work="Improved the effieciency of the AI model by 93%"
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
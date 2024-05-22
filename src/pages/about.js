import Animatedtext from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect,useRef } from 'react'
import profilepic from "../../public/images/profile/datascientist.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnimatedNumbers = ({value}) =>{
    const  ref= useRef(null);
    const motionvalue=useMotionValue(0);
    const springval=useSpring(motionvalue,{duration:3000});
    const isInview=useInView(ref,{once:true});
    useEffect(() => {
      if(isInview){
        motionvalue.set(value);
      }
    }, [isInview,value,motionvalue])

    useEffect(() => {
      springval.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent=latest.toFixed(0);
        }
      })
    }, [springval,value])
    
    
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>SaiGanesh | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <Animatedtext text="Passion Fuels Purpose!" className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                    About Me
                </h2>
                <p className='font-medium'> Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.
</p>
<p className='my-4 font-medium'>
 I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
</p>
<p className='font-medium'>
 Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.

</p>
            </div>

<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-9 dark:bg-dark dark:border-light
'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
    <Image src={profilepic} alt="SaiGanesh" className='w-full h-auto rounded-2xl'/>
</div>
<div className='col-span-2 flex flex-col items-end justify-between'>
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block  text-7xl font-bold'>
            <AnimatedNumbers value={50}/>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'> satisfied clients</h2>
    </div>
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block  text-7xl font-bold'>
        <AnimatedNumbers value={40}/>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects completed</h2>
    </div>
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block  text-7xl font-bold'>
        <AnimatedNumbers value={2}/>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of experience </h2>
    </div>
</div>
        </div>

        <Skills/>
        <Experience />
        <Education />
        </Layout>
        
      </main>
    </>
  )
}

export default about